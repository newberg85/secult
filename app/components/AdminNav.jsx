'use client';
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { Home, HomeIcon, LogOut, MenuIcon, Package, Settings, Users} from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/Components/ui/sheet";
import { Button } from "@/Components/ui/button";
import Link from "next/link";
import { TooltipProvider, TooltipContent, TooltipTrigger, Tooltip } from "@/Components/ui/tooltip";


const AdminNav = () => {
  const router = useRouter();
  

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/admin/login");
  };

  return (
    <div className="flex flex-col  bg-muted/40 p-4">

      <aside
      className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col"
      >
          <nav className="flex flex-col items-center gap-4 px-2 py-5">
              <TooltipProvider>
                <Link
                href="#"
                className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full"
                >
                <Package className="w-4 h-4"/>
                </Link>

                <Tooltip>
                  <TooltipTrigger asChild>
                     <Link
                href="#"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground
                transition-colors hover:text-foreground"
                >
                <HomeIcon className="w-5 h-5"/>
                <span className="sr-only">Inicio</span>
                </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Inicio</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                     <Link
                href="#"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground
                transition-colors hover:text-foreground"
                >
                <Users className="w-5 h-5"/>
                <span className="sr-only">Usuários</span>
                </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Usuários</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                     <Link
                href="#"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground
                transition-colors hover:text-foreground"
                >
                <Settings className="w-5 h-5"/>
                <span className="sr-only">Configurações</span>
                </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Configurações</TooltipContent>
                </Tooltip>

                
              </TooltipProvider>
              
          </nav>

          <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                     <Link
                href="#"
                onClick={handleLogout}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground
                transition-colors hover:text-foreground"
                >
                <LogOut className="w-5 h-5"/>
                <span className="sr-only">Sair</span>
                </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Sair</TooltipContent>
                </Tooltip>
              </TooltipProvider>
          </nav>
      </aside>

     <div className="sm:hidden flex flex-col">
      <header className="sticky top-0 z-30 flex items-center gap-3 sm:static">
       <Sheet>
        <SheetTrigger  asChild>
          <Button size='icon' variant='outline' className='w-[50px] h-[50px] rounded-full sm:hidden'>
            <MenuIcon className="w-15 h-15"/>
            <span className="sr-only">Abrir / Fechar menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side='left' className="sm:max-w-xs">
            <nav className="py-4 px-3 grid gap-6 text-lg font-medium">
              <Link 
              href='#'
              className="flex h-10 bg-primary rounded-full w-10 items-center justify-center text-primary-foreground md:text-base
              gap-2"
              prefetch={false}
              >
                <Package className="w-5 h-5 transition-all"/>
                <span className="sr-only">
                  Logo
                </span>
              </Link>
              <Link
               href="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground
              hover:text-foreground"
              prefetch={false}
              >
                <Home />
               Inicio
              </Link>
              <Link
               href="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground
              hover:text-foreground"
              prefetch={false}
              >
                <Users />
               Usuários
              </Link>
              <Link
               href="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground
              hover:text-foreground"
              prefetch={false}
              >
                <Settings />
               Configurações
              </Link>
              <Link
              href="#"
              onClick={handleLogout}
              className="flex items-center gap-4 px-2.5 text-muted-foreground
              hover:text-foreground"
              prefetch={false}
              >
                <LogOut />
               Sair
              </Link>
            </nav>
        </SheetContent>
       </Sheet>
       <h2>
          Menu
       </h2>
       </header>
    </div>
    </div>
  );
};

export default AdminNav;
