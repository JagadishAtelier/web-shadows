import React, { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { Delete, Download, Eye, Search, Trash, UploadCloud } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableHeader,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input"

const tableHead = [
    "File Name",
    "Type",
    "Date Uploaded",
    "Uploaded By",
    "Action"
];
const allPagesData = [
    {
        fileName: "Blood Test Report",
        type: "PDF",
        dateUploaded: "2025-10-21",
        uploadedBy: "Dr. Priya Mehta",
    },
    {
        fileName: "X-Ray Scan",
        type: "Image (JPG)",
        dateUploaded: "2025-10-19",
        uploadedBy: "Nurse Anjali",
    },
    {
        fileName: "MRI Result",
        type: "PDF",
        dateUploaded: "2025-10-15",
        uploadedBy: "Dr. Arjun Rao",
    },
];

function PatientDocument() {
    const [file, setFile] = useState(null)

    const onDrop = useCallback((acceptedFiles) => {
        setFile(acceptedFiles[0])
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { "image/*": [] },
        multiple: false,
    })
    return (
        <div className='p-6 w-full flex flex-col gap-10'>
            <h2 className="text-lg font-bold text-[#0E1680] ">Patient Documents</h2>

            {/* Information Section */}

            <div className="flex flex-col w-full">
                <label className="text-sm font-medium mb-2 text-gray-700">
                    Drag & Drop Files here
                </label>

                <div
                    {...getRootProps()}
                    className={cn(
                        "flex flex-col items-center justify-center border w-full rounded-lg p-5 cursor-pointer transition-all",
                        isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-white hover:bg-gray-50"
                    )}
                >
                    <input {...getInputProps()} />
                    <div className="flex flex-col items-center text-center">
                        <div className="p-3 rounded-full bg-blue-50 mb-3">
                            <UploadCloud className="w-6 h-6 text-blue-600" />
                        </div>
                        <p className="text-sm text-gray-800">
                            <span className="font-semibold text-blue-700 cursor-pointer">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                            SVG, PNG, JPG or GIF (max. 800x400px)
                        </p>
                    </div>
                </div>

                {file && (
                    <div className="mt-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
                        <img
                            src={URL.createObjectURL(file)}
                            alt="Preview"
                            className="w-48 h-32 object-cover rounded-md border"
                        />
                    </div>
                )}
            </div>

            <div className='flex gap-3 rounded-md'>
                <div className="w-full flex flex-col gap-3">
                    <div className="flex items-center justify-between mb-5">
                        <label className="block text-lg font-semibold mb-1 text-[#0E1680]">
                            Uploaded Documents
                        </label>

                        <div className="relative w-1/4">
                            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                            <Input
                                type="search"
                                placeholder="Search by Document"
                                required
                                className="bg-white h-10 pl-9"
                            />
                        </div>
                    </div>
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
                                    <TableCell className="font-medium py-4 text-[#475467]">{patient.fileName}</TableCell>
                                    <TableCell className="font-medium py-4 text-[#475467]">{patient.type}</TableCell>
                                    <TableCell className="font-medium py-4 text-[#475467]">{patient.dateUploaded}</TableCell>
                                    <TableCell className="font-medium py-4 text-[#475467]">{patient.uploadedBy}</TableCell>
                                    <TableCell className="flex">
                                        <Button className="bg-transparent hover:bg-transparent text-black h-8"><Eye /></Button>
                                        <Button className="bg-transparent hover:bg-transparent text-black h-8"><Download /></Button>
                                        <Button className="bg-transparent hover:bg-transparent text-red-600 h-8"><Trash /></Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default PatientDocument