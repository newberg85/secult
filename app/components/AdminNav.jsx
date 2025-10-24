'use client';
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { Menu, Package, PanelBottom, PanelRight, X } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/Components/ui/sheet";
import { Button } from "@/Components/ui/button";
import Link from "next/link";


const AdminNav = () => {
  const router = useRouter();
  

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/admin/login");
  };

  return (
    <div className="flex flex-col  bg-muted/40 p-4">
     <div className="sm:hidden flex flex-col">
      <header className="sticky top-0 z-30 flex items-center gap-3 sm:static">
       <Sheet>
        <SheetTrigger  asChild>
          <Button size='icon' variant='outline' className='w-[50px] h-[50px] rounded-full sm:hidden'>
            <PanelBottom className="w-15 h-15"/>
            <span className="sr-only">Abrir / Fechar menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent className="sm:max-w-xs">
            <nav className="px-4 py-7 grid gap-6 text-lg font-medium">
              <Link 
              href='#'
              className="flex h-10 bg-primary rounded-full"
              >
                <Package className="w-5 h-5 transition-all"/>
                <span className="sr-only">
                  Logo
                </span>
              </Link>
            </nav>
        </SheetContent>
       </Sheet>
       </header>
    </div>
    </div>
  );
};

export default AdminNav;
