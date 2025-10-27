import React,{useState,useEffect} from "react";
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
import { Edit2, Eye } from "lucide-react";
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


function LabTechRecentTable() {
    const navigate = useNavigate()
    const [role, setRole] = useState("");
    const { setMode, setActiveLink,setSelectedPatientId } = useSidebar();
      useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

    const handleEdit = (id) => {
    setMode("edit"); // switch sidebar mode
    setSelectedPatientId(id);
    setActiveLink("edit overview"); // highlight edit link
    navigate(`/overview/:${id}`); // navigate to overview page
  };

const tableHead = role === "doctor" || role === "pharmacist" || role === "labtech" ? [...baseTableHead, "Action"] : baseTableHead;
  return (
    <div className="p-4 my-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
        <a href="/" className="text-blue-700 underline">
          View All
        </a>
      </div>

      {/* Responsive table wrapper */}
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
  )
}

export default LabTechRecentTable