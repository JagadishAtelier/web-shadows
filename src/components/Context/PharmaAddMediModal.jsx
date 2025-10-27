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

const PharmaAddMediModal = ({ openPharmaMedi, setOpenPharmaMedi }) => {
const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Medicine Added!");
  setOpenPharmaMedi(false); // ✅ closes the modal properly
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
    <Dialog open={openPharmaMedi} onOpenChange={setOpenPharmaMedi}>
      <DialogContent className="h-fit rounded-2xl bg-[#FFFFFF] shadow-lg">
        <DialogHeader className="border-b pb-4">
          <DialogTitle className="text-lg font-bold text-[#0E1680]">
           Add New Medicine
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 flex flex-col justify-between gap-3 mt-4"
        >
                    <div className="w-full">
            <label className="block text-sm font-medium mb-1 text-[#0E1680]">
              Medicine Name
            </label>
            <Input type="text" placeHolder="Medicine Name" required />
          </div>
                    <div className="w-full">
            <label className="block text-sm font-medium mb-1 text-[#0E1680]">
              Quantity in stock
            </label>
            <Input type="text" placeHolder="Quantity in stock" required />
          </div>
                    <div className="w-full">
            <label className="block text-sm font-medium mb-1 text-[#0E1680]">
              Expiry Date
            </label>
            <Input type="date" required />
          </div>
                    <div className="w-full">
            <label className="block text-sm font-medium mb-1 text-[#0E1680]">
              Price per Unit
            </label>
            <Input type="text" placeHolder="Price per Unit" required />
          </div>

          <DialogFooter className="w-full flex justify-center mt-4">
            <Button
              type="submit"
              className="bg-[#0E1680] text-white w-32 h-10 hover:bg-gray-300 hover:text-black"
            >
              Save Medicine
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PharmaAddMediModal;
