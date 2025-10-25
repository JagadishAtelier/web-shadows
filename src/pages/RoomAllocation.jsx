import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableHeader,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Eye, Filter, Search } from "lucide-react";
import AddPatientModal from "@/components/Context/AddPatientModal";
import { useSidebar } from "@/components/Context/SidebarContext";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";

const baseTableHead = [
  "Patient Name",
  "Patient ID",
  "Bed Number",
  "Doctor",
  "Status",
];

const allPagesData = [
  { name: "John Doe", id: "P001", bedNumber: "1", status: "Active", doctor: "Dr. Priya Mehta", service: "Cardiology" },
  { name: "Aarav Patel", id: "P002", bedNumber: "2", status: "Active", doctor: "Dr. R. Kumar", service: "Orthopedics" },
  { name: "---", id: "---", bedNumber: "3", status: "Completed", doctor: "---", service: "Neurology" },
  { name: "---", id: "---", bedNumber: "4", status: "Completed", doctor: "---", service: "Pediatrics" },
  { name: "---", id: "---", bedNumber: "4",  status: "Completed", doctor: "---", service: "Dermatology" },
  { name: "Rahul Jain", id: "P006", bedNumber: "5", status: "Active", doctor: "Dr. Mehta", service: "ENT" },
  { name: "Ananya Gupta", id: "P007", bedNumber: "6", status: "Active", doctor: "Dr. Kapur", service: "Cardiology" },
  { name: "---", id: "---", bedNumber: "7", status: "Completed", doctor: "---", service: "Orthopedics" },
];

function RoomAllocation() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState(""); // "Occupied" / "Available" or empty
  const { setMode, setActiveLink, setSelectedPatientId } = useSidebar();

  const rowsPerPage = 7;

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

  // Map patient status to room status
  const mapStatus = (status) => (status === "Active" ? "Occupied" : "Available");

  // Filter and search
  const filteredData = allPagesData.filter((patient) => {
    const matchesSearch = patient.name.toLowerCase().includes(searchQuery.toLowerCase())
      || patient.id.toLowerCase().includes(searchQuery.toLowerCase())
      || patient.doctor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus ? mapStatus(patient.status) === filterStatus : true;
    return matchesSearch && matchesFilter;
  });

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const tableHead = role === "doctor" ? [...baseTableHead, "Action"] : baseTableHead;

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold text-foreground">Allocate Rooms</h2>
          <p>Showing: All Consultations of All Healthcare Providers</p>
        </div>

        <div className="flex gap-3 items-center">
          <div className="relative w-70">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <Input
              type="search"
              placeholder="Search by Name, ID, or Doctor"
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
            <option value="">All</option>
            <option value="Occupied">Occupied</option>
            <option value="Available">Available</option>
          </select>

          <Button className="bg-[#0E1680] h-10" onClick={() => setOpen(true)}>
            + Add Patient
          </Button>
        </div>
      </div>

      {/* Modal */}
      <AddPatientModal open={open} setOpen={setOpen} />

      {/* Table */}
      <Table className="rounded-2xl overflow-hidden border border-gray-200">
        <TableHeader>
          <TableRow className="bg-[#E5E7FB] hover:bg-[#E5E7FB]">
            {tableHead.map((column, index) => (
              <TableHead key={index} className="py-4 text-[#475467]">{column}</TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {currentData.map((patient, index) => (
            <TableRow key={index} className="text-[#475467] bg-white">
              <TableCell className="font-medium py-4">{patient.name}</TableCell>
              <TableCell>{patient.id}</TableCell>
              <TableCell>{patient.bedNumber}</TableCell>
              <TableCell>{patient.doctor}</TableCell>
              <TableCell>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    mapStatus(patient.status) === "Occupied"
                      ? "bg-red-100 text-red-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {mapStatus(patient.status)}
                </span>
              </TableCell>
              {role === "doctor" && (
                <TableCell className="px-2">
                  <Button className="bg-[#0E1680] text-white h-8" onClick={() => handleEdit(patient.id)}><Eye /></Button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <p className="text-sm text-gray-500">
          Showing {startIndex + 1}–{Math.min(endIndex, filteredData.length)} of {filteredData.length} patients
        </p>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1}>
            <ChevronLeft />
          </Button>

          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i}
              size="sm"
              variant={currentPage === i + 1 ? "default" : "outline"}
              onClick={() => setCurrentPage(i + 1)}
              className={currentPage === i + 1 ? "bg-[#0E1680] text-white" : ""}
            >
              {i + 1}
            </Button>
          ))}

          <Button variant="outline" size="sm" onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RoomAllocation;
