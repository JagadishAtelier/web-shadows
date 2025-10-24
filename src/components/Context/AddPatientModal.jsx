import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const AddPatientModal = ({ open, setOpen }) => {
  const [activeTab, setActiveTab] = useState("Personal Information");
  const tabs = ["Personal Information", "Medical History", "Insurance Information"];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Patient Added!");
    setOpen(false);
  };
// Inside your component
const handleNext = () => {
  const currentIndex = tabs.indexOf(activeTab);
  if (currentIndex < tabs.length - 1) {
    setActiveTab(tabs[currentIndex + 1]);
  } else {
    // Last tab, submit the form
    handleSubmit(new Event("submit"));
  }
};

  // Render form based on active tab
  const renderFormContent = () => {
    switch (activeTab) {
      case "Personal Information":
        return (
          <>
            <div className="w-80">
              <label className="block text-sm font-medium mb-1">First Name</label>
              <Input type="text" placeholder="Enter patient first name" required />
            </div>
            <div className="w-80">
              <label className="block text-sm font-medium mb-1">Middle Name</label>
              <Input type="text" placeholder="Enter patient middle name" required />
            </div>
            <div className="w-80">
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <Input type="text" placeholder="Enter patient last name" required />
            </div>
            <div className="w-80">
              <label className="block text-sm font-medium mb-1">Age</label>
              <Input type="number" placeholder="Enter age" required />
            </div>
            <div className="w-80">
              <label className="block text-sm font-medium mb-1">Gender</label>
              <select className="w-full border rounded-md p-2" required>
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="w-80">
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <Input type="text" placeholder="Enter phone number" required />
            </div>
            <div className="w-80 mx-auto">
              <label className="block text-sm font-medium mb-1">Home Address</label>
              <Input type="text" placeholder="Enter Home Address" required />
            </div>
            <div className="w-80 mx-auto">
              <label className="block text-sm font-medium mb-1">Emergency Contact</label>
              <Input type="text" placeholder="Enter Emergency Contact" required />
            </div>
          </>
        );

      case "Medical History":
        return (
          <>
            <div className="w-80">
              <label className="block text-sm font-medium mb-1">Reason for Visit</label>
              <select className="w-full border rounded-md p-2" required>
                <option value="">Select Reason for Visit</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="w-80">
              <label className="block text-sm font-medium mb-1">Known Allergies</label>
              <Input type="text" placeholder="Enter Known Allergies" />
            </div>
            <div className="w-80">
              <label className="block text-sm font-medium mb-1">Pre-existing Conditions</label>
              <Input type="text" placeholder="Enter Pre-existing Conditions" />
            </div>
            <div className="w-80">
              <label className="block text-sm font-medium mb-1">Current Medications</label>
              <Input type="text" placeholder="Enter Current Medications" />
            </div>
            <div className="w-80">
              <label className="block text-sm font-medium mb-1">Past Surgeries or Procedures</label>
              <Input type="text" placeholder="Enter Past Surgeries or Procedures" />
            </div>
            <div className="w-80">
              <label className="block text-sm font-medium mb-1">Blood Type</label>
              <select className="w-full border rounded-md p-2" required>
                <option value="">Select Blood Type</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="w-80 mx-auto">
              <label className="block text-sm font-medium mb-1">Family Medical History</label>
              <Input type="text" placeholder="Enter Family Medical History" />
            </div>
            <div className="w-80 mx-auto">
              <label className="block text-sm font-medium mb-1">Ongoing Treatment Plans</label>
              <Input type="text" placeholder="Enter Ongoing Treatment Plans" />
            </div>
          </>
        );

      case "Insurance Information":
        return (
          <>
            <div className="w-80">
              <label className="block text-sm font-medium mb-1">Insurance Provider</label>
              <select className="w-full border rounded-md p-2" required>
                <option value="">Select Insurance Provider</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="w-80">
              <label className="block text-sm font-medium mb-1">Policy Number</label>
              <Input type="text" placeholder="Enter Policy Number" />
            </div>
            <div className="w-80">
              <label className="block text-sm font-medium mb-1">Coverage Type</label>
              <select className="w-full border rounded-md p-2" required>
                <option value="">Select Coverage Type</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="w-80">
              <label className="block text-sm font-medium mb-1">Expiration Date</label>
              <Input type="text" placeholder="Enter Expiration Date" />
            </div>
            <div className="w-80">
              <label className="block text-sm font-medium mb-1">Billing Status</label>
              <select className="w-full border rounded-md p-2" required>
                <option value="">Select Billing Status</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="w-80">
              <label className="block text-sm font-medium mb-1">Co-payment Amount</label>
              <Input type="text" placeholder="Enter Co-payment Amount" />
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[70%] h-fit rounded-2xl bg-[#FFFFFF]">
        <DialogHeader className="h-fit m-0">
          <DialogTitle className="border-b pb-5">Add Patient</DialogTitle>
        </DialogHeader>

        {/* Tabs */}
        <div className="flex gap-5 mb-5">
          {tabs.map((tab) => (
            <Button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`hover:bg-gray-300 hover:text-black h-12 ${
                activeTab === tab ? "bg-[#0E1680] text-white" : "bg-[#F2F3FD] text-black"
              }`}
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* Dynamic Form */}
        <form onSubmit={handleSubmit} className="space-y-4 flex flex-wrap justify-between gap-2">
          {renderFormContent()}
<div className="w-full flex justify-end mt-4">
  <Button
    type="button"
    onClick={handleNext}
    className="bg-[#0E1680] w-32 h-10 hover:bg-gray-300 hover:text-black"
  >
    {activeTab === tabs[tabs.length - 1] ? "Submit" : "Next"}
  </Button>
</div>

        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPatientModal;
