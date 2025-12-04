'use client';
import { useRouter } from "next/navigation";
import { Home, HomeIcon, LogOut, MenuIcon, Newspaper, Package, Settings, Users} from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/Components/ui/sheet";
import { Button } from "@/Components/ui/button";
import Link from "next/link";
import { TooltipProvider, TooltipContent, TooltipTrigger, Tooltip } from "@/Components/ui/tooltip";


const AdminNav = ({  onLogout }) => {
  const router = useRouter();
  


  return (
    <div className="flex flex-col">

      <aside
      className="fixed inset-y-0 left-0 z-10 hidden w-14 sm:flex flex-col border-r border-[#C2C6CF] bg-[#D7DAE0]/70 "
      >
          <nav className="flex flex-col items-center gap-4 px-2 py-5">
              <TooltipProvider>
                <Link
                href="#"
                className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#1E2939] text-primary-foreground rounded-full"
                >
                <Package className="w-4 h-4"/>
                </Link>

                <Tooltip>
                  <TooltipTrigger asChild>
                     <Link
                href="/admin/dashboard"
                prefetch={false}
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
                href="/admin/agentes"
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
                href="/admin/notices"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground
                transition-colors hover:text-foreground"
                >
                <Newspaper className="w-5 h-5"/>
                <span className="sr-only">Notícias</span>
                </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Notícias</TooltipContent>
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
                     <button
                     onClick={onLogout}
                     className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground
                     transition-colors hover:text-foreground"
                >
                <LogOut className="w-5 h-5"/>
                <span className="sr-only">Sair</span>
                </button>
                  </TooltipTrigger>
                  <TooltipContent side="right">Sair</TooltipContent>
                </Tooltip>
              </TooltipProvider>
          </nav>
      </aside>

     <div className="sm:hidden flex flex-col">
      <header className="sticky top-0 z-30 flex items-center gap-3 sm:static bg-[#D7DAE0]/90 p-2 border-b border-[#C2C6CF]/80">
       <Sheet>
        <SheetTrigger  asChild>
          <Button size='icon' variant='outline' className='w-[50px] h-[50px] rounded-full sm:hidden bg-[#D7DAE0]/40 border-[#c2c6cf]'>
            <MenuIcon className="w-15 h-15"/>
            <span className="sr-only">Abrir / Fechar menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side='left' className="sm:max-w-xs bg-[#D7DAE0]">
            <nav className="py-4 px-3 grid gap-6 text-lg font-medium ">
              <Link 
              href='#'
              className="flex h-10 rounded-full w-10 items-center bg-[#1E2939] justify-center text-primary-foreground md:text-base
              gap-2"
              prefetch={false}
              >
                <Package className="w-5 h-5 transition-all"/>
                <span className="sr-only">
                  Logo
                </span>
              </Link>
              <Link
               href="/admin/dashboard"
              className="flex items-center gap-4 px-2.5 text-muted-foreground
              hover:text-foreground"
              prefetch={false}
              >
                <Home />
               Inicio
              </Link>
              <Link
               href="/admin/agentes"
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
              <button
              onClick={onLogout}
              className="flex items-center gap-4 px-2.5 text-muted-foreground
              hover:text-foreground"
              >
                <LogOut />
               Sair
              </button>
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
