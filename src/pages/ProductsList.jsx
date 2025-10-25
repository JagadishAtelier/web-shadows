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
import { ChevronLeft, ChevronRight } from "lucide-react";
import AddPatientModal from "@/components/Context/AddPatientModal";
import { useSidebar } from "@/components/Context/SidebarContext";
import { useNavigate } from "react-router-dom";

const baseTableHead = [
  "Patient Name",
  "Patient ID",
  "Date",
  "Sex",
  "Status",
  "Assigned Doctor",
  "Service Type",
];

const allPagesData = [
  { name: "John Doe", id: "P001", date: "2025-10-21", sex: "Male", status: "Active", doctor: "Dr. Priya Mehta", service: "Cardiology" },
  { name: "Aarav Patel", id: "P002", date: "2025-10-20", sex: "Male", status: "Active", doctor: "Dr. R. Kumar", service: "Orthopedics" },
  { name: "Saanvi Sharma", id: "P003", date: "2025-10-22", sex: "Female", status: "Completed", doctor: "Dr. Neha Kapoor", service: "Neurology" },
  { name: "Ishaan Verma", id: "P004", date: "2025-10-23", sex: "Male", status: "Completed", doctor: "Dr. Anil Desai", service: "Pediatrics" },
  { name: "Diya Nair", id: "P005", date: "2025-10-24", sex: "Female", status: "Completed", doctor: "Dr. Sneha Rao", service: "Dermatology" },
  { name: "Rahul Jain", id: "P006", date: "2025-10-25", sex: "Male", status: "Active", doctor: "Dr. Mehta", service: "ENT" },
  { name: "Ananya Gupta", id: "P007", date: "2025-10-25", sex: "Female", status: "Active", doctor: "Dr. Kapur", service: "Cardiology" },
  { name: "Vikram Singh", id: "P008", date: "2025-10-26", sex: "Male", status: "Completed", doctor: "Dr. R. Kumar", service: "Orthopedics" },
];

function ProductsList() {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const rowsPerPage = 7;

  const totalPages = Math.ceil(allPagesData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = allPagesData.slice(startIndex, endIndex);
      const [role, setRole] = useState("");
    const { setMode, setActiveLink } = useSidebar();
      useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

    const handleEdit = (id) => {
    setMode("edit"); // switch sidebar mode
    setActiveLink("edit overview"); // highlight edit link
    navigate(`/overview/:${id}`); // navigate to overview page
  };

const tableHead = role === "doctor" ? [...baseTableHead, "Action"] : baseTableHead;


  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Patient List</h2>
        <Button className="bg-[#0E1680]" onClick={() => setOpen(true)}>
          + Add Patient
        </Button>
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
              <TableCell className="font-medium py-4 text-[#475467]">{patient.name}</TableCell>
              <TableCell>{patient.id}</TableCell>
              <TableCell>{patient.date}</TableCell>
              <TableCell>{patient.sex}</TableCell>
              <TableCell>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  patient.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-purple-100 text-purple-700"
                }`}>
                  {patient.status}
                </span>
              </TableCell>
              <TableCell>{patient.doctor}</TableCell>
              <TableCell>{patient.service}</TableCell>
                              {role === "doctor" && (
                                <TableCell className="px-2">
                                  <Button className="bg-blue-600 text-white h-8" onClick={() => handleEdit("P001")}>Edit</Button>
                                </TableCell>
                              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <p className="text-sm text-gray-500">
          Showing {startIndex + 1}–{Math.min(endIndex, allPagesData.length)} of {allPagesData.length} patients
        </p>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={goToPreviousPage} disabled={currentPage === 1}>
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

          <Button variant="outline" size="sm" onClick={goToNextPage} disabled={currentPage === totalPages}>
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
