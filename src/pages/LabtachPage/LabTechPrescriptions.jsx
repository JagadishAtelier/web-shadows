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
import { Edit2, Eye, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import LabTechAddLabModal from "@/components/Context/LabTechAddLab";

const baseTableHead = [
  "Patient Name",
  "Test",
  "Status",
  "Assigned Doctor",
];

const allPagesData = [
   {
    patientName: "John Doe",
    test: "Blood Test",
    status: "Pending",
    assignedDoctor: "Dr. Priya Mehta",
  },
  {
    patientName: "Sarah Lee",
    test: "X-Ray",
    status: "Completed",
    assignedDoctor: "Dr. Rahul Sharma",
  },
  {
    patientName: "Amit Patel",
    test: "MRI Scan",
    status: "In Progress",
    assignedDoctor: "Dr. Kavita Nair",
  },
  {
    patientName: "Emily Johnson",
    test: "ECG",
    status: "Completed",
    assignedDoctor: "Dr. Suresh Kumar",
  },
  {
    patientName: "Rohit Verma",
    test: "Urine Test",
    status: "Pending",
    assignedDoctor: "Dr. Anjali Desai",
  },
];

function LabTechPrescriptions() {
const navigate = useNavigate();
  const { setMode, setActiveLink, setSelectedPatientId } = useSidebar();
    const [openAddLabModal, setOpenAddLabModal] = useState(false);
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
      patient.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.assignedDoctor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.test.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter = filterStatus
      ? patient.status.toLowerCase() === filterStatus.toLowerCase()
      : true;

    return matchesSearch && matchesFilter;
  });

  const tableHead =
    role === "doctor" || role === "pharmacist" || role === "labtech"
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
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white h-10 pl-9"
            />
          </div>

          <Button className="bg-[#0E1680] h-10" onClick={() => setOpenAddLabModal(true)}>
            + Add Lab
          </Button>
        </div>
      </div>
<LabTechAddLabModal openAddLabModal={openAddLabModal} setOpenAddLabModal={setOpenAddLabModal}/>
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
            {allPagesData.map((patient, index) => (
              <TableRow key={index} className="text-[#475467] bg-white">
                <TableCell className="font-medium py-4 px-2 text-[#475467] whitespace-nowrap">
                  {patient.patientName}
                </TableCell>
                <TableCell className="px-2">{patient.test}</TableCell>
                <TableCell className="px-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      patient.status === "Pending"
                        ? "bg-green-100 text-green-700"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {patient.status}
                  </span>
                </TableCell>
                <TableCell className="px-2">{patient.assignedDoctor}</TableCell>
                {role === "doctor" || role === "pharmacist" || role === "labtech" && (
                  <TableCell className="px-2">
                    <Button className="bg-[#0E1680] text-white h-8" onClick={() => handleEdit("P001")}><Edit2/></Button>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default LabTechPrescriptions