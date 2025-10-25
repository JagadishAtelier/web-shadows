import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function PatientOverviewFields() {
    return (
        <div className='w-[58%] flex flex-col gap-4'>
            <div className='flex gap-3'>
                <div className="w-full">
                    <label className="block text-sm font-medium mb-1">Healthcare Provider</label>
                    <Input type="text" placeholder="Enter Healthcare Provider" required className="bg-white h-10" />
                </div>
                <div className="w-full">
                    <label className="block text-sm font-medium mb-1">Consultation Type</label>
                    <Input type="text" placeholder="Enter Consultation Type" required className="bg-white h-10" />
                </div>
            </div>
                            <div className="w-full">
                    <label className="block text-sm font-medium mb-1">Patient Name</label>
                    <Input type="text" placeholder="Enter patient name" required className="bg-white h-10" />
                </div>
                            <div className="w-full">
                    <label className="block text-sm font-medium mb-1">Reason For Consultation</label>
                    <Textarea type="text" placeholder="Enter Reason For Consultation" required className="bg-white h-25" />
                </div>
                            <div className="w-full">
                    <label className="block text-sm font-medium mb-1">Review Notes</label>
                    <Textarea type="text" placeholder="Enter Review Notes" required className="bg-white h-25" />
                </div>
                            <div className="w-full">
                    <label className="block text-sm font-medium mb-1">Diagnosis & Findings</label>
                    <Textarea type="text" placeholder="Enter Diagnosis & Findings" required className="bg-white h-25" />
                </div>
                            <div className="w-full">
                    <label className="block text-sm font-medium mb-1">Treatment Plan</label>
                    <Textarea type="text" placeholder="Enter Treatment Plan" required className="bg-white h-25" />
                </div>
                <div className='flex justify-between mt-4'>
                    <Button className="bg-white text-black border hover:text-white hover:bg-[#0E1680] h-10">+ Add test</Button>
                    <Button className="bg-[#0E1680] hover:bg-[#0E1680] h-10">+ Add Medicine</Button>
                </div>
        </div>
    )
}

export default PatientOverviewFields