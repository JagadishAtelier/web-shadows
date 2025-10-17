import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import {
  Home,
  PanelsTopLeft,
  Users,
  Settings,
  CalendarDays,
  LogOut,
} from "lucide-react"

export default function Sidebar() {
  const { pathname } = useLocation()

  const links = [
    { to: "/", label: "Dashboard", icon: Home },
    { to: "/pages", label: "Pages", icon: PanelsTopLeft },
    { to: "/students", label: "Students", icon: Users },
    { to: "/events", label: "Events", icon: CalendarDays },
    { to: "/settings", label: "Settings", icon: Settings },
  ]

  return (
    <aside className="hidden md:flex flex-col w-64 border-r bg-background shadow-lg">
      {/* Logo / Title */}
      <div className="p-4 border-b">
        <h1 className="text-2xl font-bold text-foreground">UCU CMS</h1>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 ">
        <nav className="p-4 space-y-4">
          {links.map((link) => {
            const Icon = link.icon
            const isActive = pathname === link.to

            return (
              <Button
                key={link.to}
                asChild
                variant={isActive ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start text-sm font-medium gap-3 py-6 hover:bg-gray-100",
                  isActive ? "bg-primary text-primary-foreground hover:bg-gray-200 hover:text-gray-900" : ""
                )}
              >
                <Link to={link.to} className="flex items-center">
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              </Button>
            )
          })}
        </nav>
      </ScrollArea>

      <Separator />

      {/* Footer */}
      <div className="p-4 flex flex-col gap-2">
        <Button variant="ghost" className="justify-start gap-2 w-full">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
        <span className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} UCU CMS
        </span>
      </div>
    </aside>
  )
}
