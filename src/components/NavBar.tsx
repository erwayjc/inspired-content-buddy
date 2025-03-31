
import React from "react";
import { Button } from "@/components/ui/button";
import { Wand2, MenuIcon, XIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const NavBar = () => {
  const isMobile = useIsMobile();
  
  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <Wand2 className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-bold text-gray-900">Inspired</span>
            </a>
          </div>

          {!isMobile && (
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-primary font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          )}

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="rounded-full">
              Log in
            </Button>
            <Button className="rounded-full bg-primary hover:bg-primary/90">
              Start Free Trial
            </Button>
          </div>

          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col h-full pt-6">
                  <SheetClose className="absolute right-4 top-4">
                    <XIcon className="h-6 w-6" />
                  </SheetClose>
                  
                  <div className="flex items-center mb-6">
                    <Wand2 className="h-8 w-8 text-primary mr-2" />
                    <span className="text-xl font-bold">Inspired</span>
                  </div>
                  
                  <nav className="flex flex-col space-y-4 mb-8">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.name}>
                        <a
                          href={link.href}
                          className="text-gray-800 hover:text-primary font-medium py-2 transition-colors"
                        >
                          {link.name}
                        </a>
                      </SheetClose>
                    ))}
                  </nav>
                  
                  <div className="mt-auto space-y-4 mb-8">
                    <Button variant="outline" className="w-full rounded-full">
                      Log in
                    </Button>
                    <Button className="w-full rounded-full bg-primary hover:bg-primary/90">
                      Start Free Trial
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
