import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import logo from '../assets/logo.png'
import {
  Home,
  PanelsTopLeft,
  Users,
  Settings,
  CalendarDays,
  LogOut,
  LayoutDashboard,
  Bed,
  UserPlus,
} from "lucide-react"

export default function Sidebar() {
  const { pathname } = useLocation()

  const links = [
    { to: "/", label: "Dashboard", icon: LayoutDashboard },
    { to: "/patient-list", label: "Patient  List", icon: Users },
    { to: "/rom-allocation", label: "Room Allocation", icon: Bed },
    { to: "/add-patient", label: "Add Patient", icon: UserPlus },
  ]

  return (
    <aside className="hidden md:flex flex-col w-64 bg-transparent shadow-lg">
      {/* Logo / Title */}
      <div className="p-2.5 bg-[#02053D]">
        <div className="border border-[#3B44B2] bg-[#21234E] pl-5 py-[0.33rem] rounded-md">
        <h1 className="text-sm font-medium text-white m-0">HealthBridge Clinic</h1>
        <p className="text-white m-0 text-sm font-light">Nairobi, Kenya</p>
        </div>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 bg-[#FCFCFD] mt-5 ml-3 rounded-md shadow-lg relative">
        <div className="p-4 flex gap-2 items-center justify-center border-b">
          <img src={logo}/>
          <p className="text-lg font-bold">MediCore</p>
        </div>
        <nav className="p-4 space-y-4">
          {links.map((link) => {
            const Icon = link.icon
            const isActive = pathname === link.to

            return (
              <div
                key={link.to}
                asChild
                variant={isActive ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start rounded-md text-sm font-medium gap-3 p-2 hover:bg-gray-100",
                  isActive ? "bg-[#E5E7FB] text-[#011D4A] hover:bg-gray-200 hover:text-gray-900" : "text-[#667085]"
                )}
              >
                <Link to={link.to} className="flex items-center gap-2 text-base">
                  <Icon size={20} className=""/>
                  {link.label}
                </Link>
              </div>
            )
          })}
        </nav>
<div className="p-5 flex flex-col gap-2 absolute bottom-0 left-0 border-t w-full">
  {[{ icon: Settings, label: "Settings" }, { icon: LogOut, label: "Logout" }].map((item) => {
    const Icon = item.icon
    const isActive = false // or logic if needed

    return (
      <div
        key={item.label}
        className={cn(
          "flex items-center justify-start gap-2 w-full text-base font-medium p-2 rounded-md cursor-pointer transition-colors",
          "hover:bg-gray-100 hover:text-gray-900",
          isActive ? "bg-[#E5E7FB] text-[#011D4A]" : "text-[#667085]"
        )}
      >
        <Icon size={20} />
        {item.label}
      </div>
    )
  })}
</div>

      </ScrollArea>
      {/* Footer */}
    </aside>
  )
}
