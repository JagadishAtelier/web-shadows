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
import { Eye, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import PharmaAddMediModal from "@/components/Context/PharmaAddMediModal";
const tableHead = [
  "Name",
  "Stock",
  "Expiry Date",
  "Status",
  "Action",
];

const allPagesData = [
   {
    name: "Paracetamol 500mg",
    stock: 120,
    expiryDate: "2026-03-15",
    status: "Available",
  },
  {
    name: "Amoxicillin 250mg",
    stock: 45,
    expiryDate: "2025-12-20",
    status: "Low Stock",
  },
  {
    name: "Cough Syrup 100ml",
    stock: 0,
    expiryDate: "2025-05-10",
    status: "Out of Stock",
  },
  {
    name: "Vitamin D3 Capsules",
    stock: 80,
    expiryDate: "2027-01-05",
    status: "Available",
  },
  {
    name: "Insulin Injection",
    stock: 15,
    expiryDate: "2025-11-25",
    status: "Expiring Soon",
  },
];

function PharmaStock() {
const navigate = useNavigate()
  const [openPharmaMedi, setOpenPharmaMedi] = useState(false);
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

  return (
    <div className="p-4 my-5">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold mb-4">Medication Inventory</h2>
          <Button className="bg-[#0E1680] h-10" onClick={() => setOpenPharmaMedi(true)}>
            + Add Medicine
          </Button>
      </div>
<PharmaAddMediModal openPharmaMedi={openPharmaMedi} setOpenPharmaMedi={setOpenPharmaMedi} />
          <div className="relative w-full my-7">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <Input
              type="search"
              placeholder="search medication"
              className="bg-white h-10 pl-9"
            />
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
                  {patient.name}
                </TableCell>
                <TableCell className="px-2">{patient.stock}</TableCell>
                <TableCell className="px-2">{patient.expiryDate}</TableCell>
                <TableCell className="px-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
  patient.status === "Available"
    ? "bg-[#C7FCD3] text-[#056018]"
    : patient.status === "Out of Stock"
    ? "bg-[#EF4444BF] text-[#056018]"
    : "bg-[#FACC15] text-[#011D4A]"
                    }`}
                  >
                    {patient.status}
                  </span>
                </TableCell>
                  <TableCell className="px-2">
                    <Button className="bg-[#0E1680] text-white h-8" onClick={() => handleEdit("P001")}>Updated</Button>
                  </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default PharmaStock