import { AuthButtonComponent } from "@/components/auth/auth-button-component";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen bg-black">
      <div className=" flex  max-w-[1440px] mx-auto flex-col items-center justify-center">
        <div className="flex justify-between items-center w-full py-6 text-slate-50">
          <Link href={"/"} className="text-3xl font-bold">
            Next auth
          </Link>
          <div className="flex gap-3 text-black font-semibold">
          <AuthButtonComponent path="/login">
            <Button variant={"outline"}>Sing in</Button>
          </AuthButtonComponent>

          <AuthButtonComponent path="/register">
            <Button variant={"outline"}>Sing in</Button>
          </AuthButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
}
