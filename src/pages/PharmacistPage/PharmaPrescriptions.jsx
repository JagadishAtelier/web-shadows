import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableHeader,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/Context/SidebarContext";
import { useNavigate } from "react-router-dom";
import { Eye, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const baseTableHead = [
  "Patient Name",
  "Medication",
  "Date",
  "Sex",
  "Status",
  "Assigned Doctor",
];

const allPagesData = [
  {
    name: "John Doe",
    id: "Paracetamol",
    date: "2025-10-21",
    sex: "Male",
    status: "Dispensed",
    doctor: "Dr. Priya Mehta",
    service: "Cardiology",
  },
  {
    name: "Aarav Patel",
    id: "Paracetamol",
    date: "2025-10-20",
    sex: "Male",
    status: "Dispensed",
    doctor: "Dr. R. Kumar",
    service: "Orthopedics",
  },
  {
    name: "Saanvi Sharma",
    id: "Paracetamol",
    date: "2025-10-22",
    sex: "Female",
    status: "Dispensed",
    doctor: "Dr. Neha Kapoor",
    service: "Neurology",
  },
  {
    name: "Ishaan Verma",
    id: "Amoxicillin",
    date: "2025-10-23",
    sex: "Male",
    status: "Pending",
    doctor: "Dr. Anil Desai",
    service: "Pediatrics",
  },
  {
    name: "Diya Nair",
    id: "Amoxicillin",
    date: "2025-10-24",
    sex: "Female",
    status: "Pending",
    doctor: "Dr. Sneha Rao",
    service: "Dermatology",
  },
];

function PharmaPrescriptions() {
  const navigate = useNavigate();
  const { setMode, setActiveLink, setSelectedPatientId } = useSidebar();
  const [role, setRole] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

  const handleEdit = (id) => {
    setMode("edit");
    setSelectedPatientId(id);
    setActiveLink("edit overview");
    navigate(`/overview/:${id}`);
  };

  // 🔹 Filtered + searched data
  const filteredData = allPagesData.filter((patient) => {
    const matchesSearch =
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.doctor.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter = filterStatus
      ? patient.status.toLowerCase() === filterStatus.toLowerCase()
      : true;

    return matchesSearch && matchesFilter;
  });

  const tableHead =
    role === "doctor" || role === "pharmacist"
      ? [...baseTableHead, "Action"]
      : baseTableHead;

  return (
    <div className="p-4 my-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold text-foreground">
            Patients List
          </h2>
          <p>Showing:
List of all patient medications</p>
        </div>

        {/* 🔹 Search & Filter */}
        <div className="flex gap-3 items-center">
          <div className="relative w-70">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <Input
              type="search"
              placeholder="Search by Name, Medicine, or Doctor"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white h-10 pl-9"
            />
          </div>

          <select
            className="h-10 border px-3 rounded-md bg-white"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="">All Status</option>
            <option value="Dispensed">Dispensed</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto max-sm:w-[570px] ">
        <Table className="min-w-[570px] rounded-2xl overflow-hidden border border-gray-200">
          <TableHeader>
            <TableRow className="bg-[#E5E7FB] rounded-2xl hover:bg-[#E5E7FB]">
              {tableHead.map((column, index) => (
                <TableHead
                  key={index}
                  className="py-4 px-2 text-[#475467] whitespace-nowrap"
                >
                  {column}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredData.length > 0 ? (
              filteredData.map((patient, index) => (
                <TableRow key={index} className="text-[#475467] bg-white">
                  <TableCell className="font-medium py-4 px-2 whitespace-nowrap">
                    {patient.name}
                  </TableCell>
                  <TableCell className="px-2">{patient.id}</TableCell>
                  <TableCell className="px-2">{patient.date}</TableCell>
                  <TableCell className="px-2">{patient.sex}</TableCell>
                  <TableCell className="px-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        patient.status === "Dispensed"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-green-100 text-green-700"
                      }`}
                    >
                      {patient.status}
                    </span>
                  </TableCell>
                  <TableCell className="px-2">{patient.doctor}</TableCell>

                  {(role === "doctor" || role === "pharmacist") && (
                    <TableCell className="px-2">
                      <Button
                        className="bg-[#0E1680] text-white h-8"
                        onClick={() => handleEdit("P001")}
                      >
                        <Eye size={16} />
                      </Button>
                    </TableCell>
                  )}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={tableHead.length} className="text-center py-6">
                  No records found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default PharmaPrescriptions;
