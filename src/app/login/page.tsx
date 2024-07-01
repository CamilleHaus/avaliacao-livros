import { Button } from '@/components/ui/button'
import ModeToggle from '@/components/ui/light-dark-toggle'
import { Rocket } from 'lucide-react';
import BookLogo from  "../../../public/svgs/bookLogo.svg"
import BookWise from "../../../public/svgs/bookwise.svg";

import Link from 'next/link'

const LoginPage: React.FC = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="mt-4 flex h-[95vh] w-[95%] gap-6">
        <div className="flex w-[40%] items-center justify-center rounded-md bg-login bg-cover">
          <h3 className="flex items-center gap-2 w-full justify-center">
          <BookLogo /><BookWise />
          </h3>
        </div>
        <div className="relative flex w-[60%] flex-col items-center justify-center gap-10">
          <div className="w-[310px]">
            <h2 className="text-xl font-bold">Boas-vindas!</h2>
            <p className="text-sm">Faça seu login ou acesse como visitante.</p>
          </div>
          <div className="flex flex-col gap-4">
            <Button className="flex w-[310px] justify-start rounded-md py-6 text-left">
              Google
            </Button>
            <Button className="flex w-[310px] justify-start rounded-md py-6 text-left">
              Facebook
            </Button>
            <Button className="flex w-[310px] justify-start rounded-md py-6 text-left">
              <Rocket className="mr-2 h-4 w-4" />
              <Link href="/">Acessar como visitante</Link>
            </Button>
          </div>
          <div className="absolute right-0 top-0">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
