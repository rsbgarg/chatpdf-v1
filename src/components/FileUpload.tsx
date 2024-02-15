'use client'
import React from "react";
import { useDropzone } from "react-dropzone";
import { Inbox, Loader2 } from "lucide-react";

const FileUpload = () => {
    const { getRootProps, getInputProps }  = useDropzone();
    const [uploading, setUploading] = React.useState(false);
    return (
        <div className="p-2 bg-white rounded-xl">
          <div
            {...getRootProps({
              className:
                "border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col",
            })}
          >
            <input {...getInputProps()} />
            {uploading  ? (
              <>
                {/* loading state */}
                <Loader2 className="h-10 w-10 text-blue-500 animate-spin" />
                <p className="mt-2 text-sm text-slate-400">
                  Spilling Tea to GPT...
                </p>
              </>
            ) : (
              <>
                <Inbox className="w-10 h-10 text-blue-500" />
                <p className="mt-2 text-sm text-slate-400">Drop PDF Here</p>
              </>
            )}
          </div>
        </div>
      );
};

export default FileUpload;