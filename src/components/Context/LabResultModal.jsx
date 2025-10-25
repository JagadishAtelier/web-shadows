import React,{useState,useCallback} from "react";
import { useDropzone } from "react-dropzone"
import { Button } from "@/components/ui/button";
import { Delete, Download, Eye, Search, Trash, UploadCloud } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const LabResultModal = ({ open, setOpen }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Lab Result Added!");
    setOpen(false);
  };
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[65%] h-fit rounded-2xl bg-[#FFFFFF] shadow-lg">
        <DialogHeader className="border-b pb-4">
          <DialogTitle className="text-lg font-bold text-[#0E1680]">
            Add Lab Result
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 flex flex-wrap justify-between gap-3 mt-4"
        >
                      <div className="w-[48%]">
            <label className="block text-sm font-medium mb-1 text-[#0E1680]">
              Test Type
            </label>
            <select className="w-full border rounded-md px-2 h-9" required>
              <option value="">Select Test Type</option>
              <option>Blood Test</option>
              <option>Urine Test</option>
              <option>X-Ray</option>
              <option>CT Scan</option>
              <option>MRI</option>
            </select>
          </div>
                    <div className="w-[48%]">
            <label className="block text-sm font-medium mb-1 text-[#0E1680]">
              Test Date
            </label>
            <Input type="date" required />
          </div>
                      <div className="w-[48%]">
            <label className="block text-sm font-medium mb-1 text-[#0E1680]">
              Doctor Ordered
            </label>
            <select className="w-full border rounded-md px-2 h-9" required>
              <option value="">Doctor Ordered</option>
              <option>Blood Test</option>
              <option>Urine Test</option>
              <option>X-Ray</option>
              <option>CT Scan</option>
              <option>MRI</option>
            </select>
          </div>
                      <div className="w-[48%]">
            <label className="block text-sm font-medium mb-1 text-[#0E1680]">
             Urgency Level
            </label>
            <select className="w-full border rounded-md px-2 h-9" required>
              <option value="">Urgency Level</option>
              <option>Blood Test</option>
              <option>Urine Test</option>
              <option>X-Ray</option>
              <option>CT Scan</option>
              <option>MRI</option>
            </select>
          </div>
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
          <div className="w-full">
            <label className="block text-sm font-medium mb-1 text-[#0E1680]">
              Test Result Summary
            </label>
            <Textarea placeholder="Enter result summary..." required />
          </div>

          <DialogFooter className="w-full flex justify-end mt-4">
            <Button
              type="submit"
              className="bg-[#0E1680] text-white w-32 h-10 hover:bg-gray-300 hover:text-black"
            >
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LabResultModal;
