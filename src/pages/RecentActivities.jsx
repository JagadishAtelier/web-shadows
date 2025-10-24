import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableHeader,
} from "@/components/ui/table";

const tableHead = [
  "Patient Name",
  "Patient ID",
  "Date",
  "Sex",
  "Status",
  "Assigned Doctor",
  "Service Type",
];

const allPagesData = [
  {
    name: "John Doe",
    id: "P001",
    date: "2025-10-21",
    sex: "Male",
    status: "Active",
    doctor: "Dr. Priya Mehta",
    service: "Cardiology",
  },
  {
    name: "Aarav Patel",
    id: "P002",
    date: "2025-10-20",
    sex: "Male",
    status: "Active",
    doctor: "Dr. R. Kumar",
    service: "Orthopedics",
  },
  {
    name: "Saanvi Sharma",
    id: "P003",
    date: "2025-10-22",
    sex: "Female",
    status: "Completed",
    doctor: "Dr. Neha Kapoor",
    service: "Neurology",
  },
  {
    name: "Ishaan Verma",
    id: "P004",
    date: "2025-10-23",
    sex: "Male",
    status: "Completed",
    doctor: "Dr. Anil Desai",
    service: "Pediatrics",
  },
  {
    name: "Diya Nair",
    id: "P005",
    date: "2025-10-24",
    sex: "Female",
    status: "Completed",
    doctor: "Dr. Sneha Rao",
    service: "Dermatology",
  },
];

function RecentActivities() {
  return (
    <div className="p-4 my-5">
        <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
      <a href="/" className="text-blue-700 underline">View All</a>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-[#E5E7FB] rounded-2xl hover:bg-[#E5E7FB]">
            {tableHead.map((column, index) => (
              <TableHead key={index} className="py-4 text-[#475467]">{column}</TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {allPagesData.map((patient, index) => (
            <TableRow key={index} className="text-[#475467]">
              <TableCell className="font-medium py-4 text-[#475467]">{patient.name}</TableCell>
              <TableCell>{patient.id}</TableCell>
              <TableCell>{patient.date}</TableCell>
              <TableCell>{patient.sex}</TableCell>
              <TableCell>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    patient.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-purple-100 text-purple-700"
                  }`}
                >
                  {patient.status}
                </span>
                </TableCell>
              <TableCell>{patient.doctor}</TableCell>
              <TableCell>{patient.service}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default RecentActivities;
