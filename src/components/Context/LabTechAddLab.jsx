import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const LabTechAddLabModal = ({ openAddLabModal, setOpenAddLabModal }) => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [file, setFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted!");
    setOpenAddLabModal(false);
  };

  return (
    <Dialog open={openAddLabModal} onOpenChange={setOpenAddLabModal}>
      <DialogContent className="sm:max-w-[65%] h-fit rounded-2xl bg-[#FFFFFF] shadow-lg">
        <DialogHeader className="border-b pb-4">
          <DialogTitle className="text-lg font-bold text-[#0E1680]">
            Add New Medicine
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 flex flex-wrap justify-between gap-3 mt-4"
        >
          <div className="w-[48%]">
            <label className="block text-sm font-medium mb-1 text-[#0E1680]">
              Patient Name
            </label>
            <Input type="text" placeholder="Patient Name" required />
          </div>

          <div className="w-[48%]">
            <label className="block text-sm font-medium mb-1 text-[#0E1680]">
              Test Name
            </label>
            <Input type="text" placeholder="Test Name" required />
          </div>

          <div className="w-[48%]">
            <label className="block text-sm font-medium mb-1 text-[#0E1680]">
              Result
            </label>
            <Input type="text" placeholder="Result" required />
          </div>

          <div className="w-[48%]">
            <label className="block text-sm font-medium mb-1 text-[#0E1680]">
              Choose File
            </label>
            <Input type="file" required />
          </div>

          {/* Payment Method */}
          <div className="w-full">
            <label className="block text-sm font-medium mb-1 text-[#0E1680]">
              Payment Method
            </label>
            <select
              className="w-full border rounded-md px-2 h-9"
              required
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="">Select Payment Method</option>
              <option value="mpesa">Mpesa</option>
              <option value="card">Card</option>
              <option value="cash">Cash</option>
              <option value="insurance">Insurance</option>
            </select>
          </div>

          {/* Dynamic Inputs Based on Payment Method */}
          {paymentMethod === "card" && (
            <div className="w-full grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium mb-1 text-[#0E1680]">
                  Card Number
                </label>
                <Input type="text" placeholder="Enter Card Number" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-[#0E1680]">
                  Card Holder Name
                </label>
                <Input type="text" placeholder="Card Holder Name" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-[#0E1680]">
                  Expiry Date
                </label>
                <Input type="month" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-[#0E1680]">
                  CVV
                </label>
                <Input type="password" placeholder="CVV" required />
              </div>
            </div>
          )}

          {paymentMethod === "mpesa" && (
            <div className="w-full">
              <label className="block text-sm font-medium mb-1 text-[#0E1680]">
                Mpesa Transaction ID
              </label>
              <Input type="text" placeholder="Enter Mpesa Transaction ID" required />
            </div>
          )}

          {paymentMethod === "cash" && (
            <div className="w-full">
              <label className="block text-sm font-medium mb-1 text-[#0E1680]">
                Cash Received By
              </label>
              <Input type="text" placeholder="Enter Receiver Name" required />
            </div>
          )}

          {paymentMethod === "insurance" && (
            <div className="w-full grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium mb-1 text-[#0E1680]">
                  Insurance Provider
                </label>
                <Input type="text" placeholder="Provider Name" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-[#0E1680]">
                  Policy Number
                </label>
                <Input type="text" placeholder="Policy Number" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-[#0E1680]">
                  Authorization code
                </label>
                <Input type="text" placeholder="Authorization code" required />
              </div>
            </div>
          )}

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

export default LabTechAddLabModal;
