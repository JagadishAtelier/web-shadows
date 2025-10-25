import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableHeader,
} from "@/components/ui/table";

const tableHead = [
    "Test Name",
    "Status",
    "Action"
];
const allPagesData = [
    { name: "Blood text", id: "P001", date: "2025-10-21", sex: "Male", status: "Active", doctor: "Dr. Priya Mehta", service: "Cardiology" },
];
function LabResult() {
    return (
        <div className='p-6 w-full flex flex-col gap-10'>
            <h2 className="text-lg font-bold text-[#0E1680] ">Lab Results</h2>

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
                                <TableCell className="font-medium py-4 text-[#475467]">{patient.name}</TableCell>
                                <TableCell className="w-100">
                                    <div className="w-1/2 flex justify-center">
                                        <select className="w-full border rounded-md p-2 bg-white" required>
                                            <option value="">Select Status</option>
                                            <option>Completed</option>
                                            <option>On proccess</option>
                                            <option>No sample</option>
                                        </select>
                                    </div>
                                </TableCell>
                                <TableCell>
                    <Button className="bg-[#0E1680] text-white hover:bg-[#0E1680] h-8">Updated</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </div>
            </div>

            {/* Sample Collection & Processing Section */}
            <div className='flex gap-3 border p-4 rounded-md'>
                <div className="w-full flex flex-col gap-4">
                    <label className="block text-lg font-semibold mb-1 text-[#0E1680]">Sample Collection & Processing</label>
                    <div className='flex flex-wrap gap-5'>
                        <div className='flex gap-4 w-full'>
                        <div className="w-full">
                            <label className="block text-sm font-medium mb-1">Date</label>
                            <Input type="date" required className="bg-white h-10" />
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium mb-1">Technician Name</label>
                            <Input type="text" placeholder="Technician Name" required className="bg-white h-10" />
                        </div>
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium mb-1">Sample Condition Note</label>
                            <Textarea type="text" placeholder="Sample Condition Note" required className="bg-white h-25" />
                        </div>
                    </div>
                </div>

            </div>

            <div className='flex justify-end mt-4'>
                <Button className="bg-[#0E1680] hover:bg-[#0E1680] h-10 w-50">Save Result</Button>
            </div>
        </div>
    )
}

export default LabResult