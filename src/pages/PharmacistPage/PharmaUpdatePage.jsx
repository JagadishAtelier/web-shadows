import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableHeader,
} from "@/components/ui/table";

const tableHead = [
    "Medication",
    "Dosage",
    "Frequency",
    "Doctor",
    "Status",
    "Action"
];
const allPagesData = [
  {
    medication: "Paracetamol 500mg",
    dosage: "1 tablet",
    frequency: "Twice a day",
    doctor: "Dr. Priya Mehta",
    status: "Dispensed",
    dispensed: false,
  },
  {
    medication: "Amoxicillin 250mg",
    dosage: "1 capsule",
    frequency: "Three times a day",
    doctor: "Dr. Rajesh Kumar",
    status: "Dispensed",
    dispensed: false,
  },
  {
    medication: "Cough Syrup 100ml",
    dosage: "10 ml",
    frequency: "Thrice a day",
    doctor: "Dr. Neha Singh",
    status: "Pending",
    dispensed: false,
  },
  {
    medication: "Vitamin D3 Capsules",
    dosage: "1 capsule",
    frequency: "Once a week",
    doctor: "Dr. Arjun Patel",
    status: "Dispensed",
    dispensed: false,
  },
  {
    medication: "Insulin Injection",
    dosage: "5 units",
    frequency: "Before breakfast",
    doctor: "Dr. Sneha Iyer",
    status: "Pending",
    dispensed: false,
  },
];

function PharmaUpdatePage() {
      const [data, setData] = useState(allPagesData);

  const handleDispense = (index) => {
    const updatedData = [...data];
    updatedData[index].dispensed = true;
    updatedData[index].status = "Dispensed";
    setData(updatedData);
  };
 return (
        <div className='p-6 w-full flex flex-col gap-10'>

            {/* Information Section */}

            <div className='flex gap-3 border p-4 rounded-md'>
                <div className="w-full flex flex-col gap-3">
                    <label className="block text-lg font-semibold mb-1 text-[#0E1680]">Patient Information</label>
                    <div className='flex flex-wrap gap-5'>
                        <Input type="text" placeholder=" Patient Name" required className="bg-white h-10 w-[49%]" />
                        <Input type="text" placeholder="Age" required className="bg-white h-10 w-[49%]" />
                        <Input type="text" placeholder=" Gender" required className="bg-white h-10 w-[49%]" />
                        <Input type="text" placeholder=" Patient ID" required className="bg-white h-10 w-[49%]" />
                    </div>
                </div>

            </div>

            {/* Diagnosis Section */}

            <div className='flex gap-3 border p-4 rounded-md'>
                <div className="w-full flex flex-col gap-3">
                <label className="block text-lg font-semibold mb-1 text-[#0E1680]">Diagnosis & Treatment</label>
                                        <div className="w-full">
                            <label className="block text-sm font-medium mb-1">Sample Condition Note</label>
                            <Textarea type="text" placeholder="Sample Condition Note" required className="bg-white h-25" />
                        </div>
                                                <div className="w-full">
                            <label className="block text-sm font-medium mb-1">Technician Name</label>
                            <Input type="text" placeholder="Technician Name" required className="bg-white h-10" />
                        </div>
                </div>
            </div>

            {/* Sample Collection & Processing Section */}
                <Table className="rounded-md overflow-hidden border border-gray-200">
                    <TableHeader>
                        <TableRow className="bg-[#E5E7FB] hover:bg-[#E5E7FB]">
                            {tableHead.map((column, index) => (
                                <TableHead key={index} className="py-4 text-[#475467]">{column}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {allPagesData.map((patient, index) => (
                            <TableRow key={index} className="text-[#475467] bg-white">
                                <TableCell className="font-medium py-4 text-[#475467]">{patient.medication}</TableCell>
                                <TableCell className="font-medium py-4 text-[#475467]">{patient.dosage}</TableCell>
                                <TableCell className="font-medium py-4 text-[#475467]">{patient.frequency}</TableCell>
                                <TableCell className="font-medium py-4 text-[#475467]">{patient.doctor}</TableCell>
                                <TableCell className="font-medium py-4 text-[#475467]">
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
                                <TableCell>
                  {patient.dispensed ? (
                    <Button
                      disabled
                      className="bg-gray-300 text-gray-600 h-8 cursor-not-allowed"
                    >
                      Dispensed
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleDispense(index)}
                      className="bg-[#0E1680] text-white hover:bg-[#0E1680] h-8"
                    >
                      Mark as Dispensed
                    </Button>
                  )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
        </div>
    )
}

export default PharmaUpdatePage