import { useEffect, useState } from "react";
import { Bell, Menu, X, User, Moon, Sun } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-background border-b">
      {/* Left section - logo / menu */}
      <div className="flex items-center gap-3">
        {/* Mobile Menu */}
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <SheetHeader className="p-4 border-b">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col p-4 space-y-2">
              <Button variant="ghost" className="justify-start">
                Dashboard
              </Button>
              <Button variant="ghost" className="justify-start">
                Users
              </Button>
              <Button variant="ghost" className="justify-start">
                Settings
              </Button>
            </nav>
          </SheetContent>
        </Sheet>

        <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
      </div>

      {/* Center section - search */}
      <div className="hidden md:block w-1/3">
        <Input type="text" placeholder="Search..." className="w-full" />
      </div>

      {/* Right section - notifications & user */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 block w-2 h-2 bg-red-500 rounded-full" />
        </Button>

        <Button
          onClick={toggleTheme}
          variant="ghost"
          className="p-2 rounded-full"
        >
          {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </Button>

        <Separator orientation="vertical" className="h-6 hidden md:block" />

        <Button variant="ghost" className="flex items-center gap-2">
          <User className="h-5 w-5" />
          <span className="hidden md:inline text-sm font-medium">Admin</span>
        </Button>
      </div>
    </header>
  );
}
