import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ui/light-dark-toggle";
import { Book, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LoginPage: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[95%] h-[95vh] flex gap-6 mt-4">
        <div className="bg-login bg-cover w-[40%] rounded-md flex justify-center items-center">
          <h3 className="text-3xl font-bold flex items-center gap-2">
            <Book size={32} /> Bookwise
          </h3>
        </div>
        <div className="flex flex-col w-[60%] justify-center items-center gap-10 relative">
          <div className="w-[310px]">
            <h2 className="text-xl font-bold">Boas-vindas!</h2>
            <p className="text-sm">Faça seu login ou acesse como visitante.</p>
          </div>
          <div className="flex flex-col gap-4">
            <Button className="w-[310px] text-left rounded-md flex justify-start py-6">
              Google
            </Button>
            <Button className="w-[310px] text-left rounded-md flex justify-start py-6">
              Facebook
            </Button>
            <Button
              className="w-[310px] text-left rounded-md flex justify-start py-6"
            >
              <Rocket className="mr-2 h-4 w-4" />
              <Link href="/">Acessar como visitante</Link>
            </Button>
          </div>
          <div className="absolute top-0 right-0">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
