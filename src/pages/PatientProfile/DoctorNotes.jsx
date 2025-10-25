import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function DoctorNotes() {
    return (
        <div className='p-6 w-full flex flex-col gap-10'>
            <h2 className="text-lg font-bold text-[#0E1680] ">Doctor’s Notes</h2>

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

            {/* Consulation Section */}

            <div className='flex gap-3 border p-4 rounded-md'>
                <div className="w-full flex flex-col gap-4">
                    <label className="block text-lg font-semibold mb-1 text-[#0E1680]">Consultation Details</label>
                    <div className='flex flex-wrap gap-5'>
                        <div className="w-full">
                            <label className="block text-sm font-medium mb-1">Date</label>
                            <Input type="date" required className="bg-white h-10" />
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium mb-1">Doctor Name</label>
                            <Input type="text" placeholder=" Doctor name" required className="bg-white h-10" />
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium mb-1">Reasons For consultation</label>
                            <select className="w-full border rounded-md p-2 bg-white" required>
                                <option value="">Select Reasons For consultation</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium mb-1">Symptoms & Observations</label>
                            <Textarea type="text" placeholder=" Symptoms & Observations" required className="bg-white h-25" />
                        </div>
                    </div>
                </div>

            </div>

            {/* Treatment Section */}
            <div className='flex gap-3 border p-4 rounded-md'>
                <div className="w-full flex flex-col gap-4">
                    <label className="block text-lg font-semibold mb-1 text-[#0E1680]">Diagnosis & Treatment</label>
                    <div className='flex flex-wrap gap-5'>
                        <div className="w-full">
                            <label className="block text-sm font-medium mb-1">Provision Diagnosis</label>
                            <Textarea type="text" placeholder=" Provision Diagnosis" required className="bg-white h-25" />
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium mb-1">Prescribed Medication</label>
                            <Input type="text" placeholder=" Prescribed Medication" required className="bg-white h-10" />
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium mb-1">Lifestyle & Treatment Recommendation</label>
                            <Textarea type="text" placeholder="Lifestyle & Treatment Recommendation" required className="bg-white h-25" />
                        </div>
                    </div>
                </div>

            </div>

            {/* Lab Section */}
            <div className='flex gap-3 border p-4 rounded-md'>
                <div className="w-full flex flex-col gap-4">
                    <label className="block text-lg font-semibold mb-1 text-[#0E1680]">Lab & Imaging Requests</label>
                    <div className='flex flex-wrap gap-5'>
                        <div className="w-full">
                            <label className="block text-sm font-medium mb-1">Select Tests or Imaging requests</label>
                            <Input type="text" placeholder="Select Tests or Imaging requests" required className="bg-white h-10" />
                        </div>
                    </div>
                </div>

            </div>
            <div className='flex justify-end mt-4'>
                <Button className="bg-[#0E1680] hover:bg-[#0E1680] h-10 w-50">Save Notes</Button>
            </div>
        </div>
    )
}

export default DoctorNotes