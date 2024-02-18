import { Button } from "@/src/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import { LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FileUpload from "@/src/components/FileUpload";

export default async function Home() {

  const { userId } = await auth();
  const isAuth = ! !userId;
  return (
    
    <div className=" w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold">Chat with any PDF</h1>
            <UserButton afterSignOutUrl="/" />
          </div>

          <div className="flex mt-2">
            {isAuth && <Button> Go to Chats</Button>}
          </div>

          <p max-w-xl mt-1 text-lg>
            Join millions of other fuckers whoa are doing this shit for a while to beat the existential dread
          </p>

          <div className="w-full mt-4">
            {isAuth ? (<FileUpload/>)
            : (
              <Link href="/sign-in">
                <Button>Login to get Started
                <LogIn className="w-4 h-4 ml-2"></LogIn>
                </Button>
                
              </Link>
            )
            }

          </div>
        </div>    
      </div>

    </div>

    )
}
