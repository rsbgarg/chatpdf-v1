import AWS from 'aws-sdk'
import { log } from 'console';

export async function uploadtoS3(file:File) {
    try{
        AWS.config.update({
            accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY_ID,
            secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY,

        });
        const s3 = new AWS.S3({
            params: { 
                Bucket : process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
            },
            region: process.env.NEXT_PUBLIC_S3_REGION
        })

        const file_key = 'uploads/' + Date.now().toString +
        file.name.replace(' ', '-');

        const params = {
            Bucket : process.env.NEXT_PUBLIC_S3_BUCKET_NAME!,
            Key: file.name,
            Body: file
        }

        const upload = s3.putObject(params).on('httpUploadProgress', 
        evt => {
            console.log('Uploading to S3 ...'
            , parseInt(((evt.loaded * 100)/evt.total).toString()) + '%')
        }).promise()

        await upload.then(data =>{
            console.log('successfully uploaded to S3 ', file_key);
            
        })

        return Promise.resolve({
            file_key,
            file_name: file.name
        })

    } catch(error){
        console.error(error);

    }
    

}