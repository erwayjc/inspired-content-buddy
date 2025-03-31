
import React, { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  
  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-70"></div>
                <div className="relative bg-white rounded-full p-1.5">
                  <Wand2 className="h-7 w-7 text-primary" />
                </div>
              </div>
              <span className="text-xl font-bold ml-3 text-gray-900">Inspired</span>
            </a>
          </div>

          {!isMobile && (
            <nav className="hidden md:flex space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-primary font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          )}

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="rounded-full">
              Log in
            </Button>
            <Button className="rounded-full bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/20 transition-all">
              Start Free Trial
            </Button>
          </div>

          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <MenuIcon className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="border-l border-gray-100">
                <div className="flex flex-col h-full pt-6">
                  <SheetClose className="absolute right-4 top-4">
                    <XIcon className="h-6 w-6" />
                  </SheetClose>
                  
                  <div className="flex items-center mb-10">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-70"></div>
                      <div className="relative bg-white rounded-full p-1.5">
                        <Wand2 className="h-7 w-7 text-primary" />
                      </div>
                    </div>
                    <span className="text-xl font-bold ml-3">Inspired</span>
                  </div>
                  
                  <nav className="flex flex-col space-y-6 mb-10">
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
                    <Button className="w-full rounded-full bg-gradient-to-r from-primary to-accent text-white">
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
