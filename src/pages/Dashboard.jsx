import { Calendar, Users, FileText, DollarSign } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Dashboard() {
  // Stat card data
  const stats = [
    { id: 1, label: "Total Posts", value: 24, icon: FileText },
    { id: 2, label: "Total Users", value: 8, icon: Users },
    { id: 3, label: "Revenue", value: "₹12,300", icon: DollarSign },
    { id: 4, label: "New Signups", value: 12, icon: Users },
  ]

  // Example upcoming events
  const upcomingEvents = [
    { id: 1, name: "Orientation Session", date: "2025-11-20", attendees: 50 },
    { id: 2, name: "Workshop: React Basics", date: "2025-11-22", attendees: 30 },
    { id: 3, name: "Guest Lecture: AI Trends", date: "2025-11-25", attendees: 120 },
  ]

  return (
    <div className="p-6 ">
      <h1 className="text-3xl font-bold mb-8 text-foreground">Dashboard</h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.id} className="flex flex-row items-center gap-4 p-4">
               <div className="w-1/3"> <Icon className="h-6 w-6 text-primary" /> </div>
               <div className="w-2/3 flex flex-col items-center justify-evenly h-full">
                <CardTitle className="text-xl">{stat.label}</CardTitle>
                <CardContent className="text-2xl font-bold">{stat.value}</CardContent>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Upcoming Events Table */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Upcoming Events</h2>
        <Card className="overflow-x-auto px-4 py-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Attendees</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {upcomingEvents.map((event) => (
                <TableRow key={event.id} className="hover:bg-gray-100 hover:dark:bg-gray-700">
                  <TableCell className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    {event.name}
                  </TableCell>
                  <TableCell>{event.date}</TableCell>
                  <TableCell>{event.attendees}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  )
}
