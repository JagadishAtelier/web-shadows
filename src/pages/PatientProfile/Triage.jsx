import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
function Triage() {
  return (
        <div className='p-6 w-full flex flex-col gap-10'>
            <h2 className="text-lg font-bold text-[#0E1680] ">Triage</h2>

            {/* Information Section */}

            <div className='flex gap-3 border p-4 rounded-md'>
                <div className="w-full flex flex-col gap-3">
                    <label className="block text-lg font-semibold mb-1 text-[#0E1680]">Select Patient</label>
                    <div className='flex flex-wrap gap-5'>
                        <Input type="text" placeholder="Search Patient by name or ID...." required className="bg-white h-10 w-full" />
                    </div>
                </div>

            </div>

            {/* Consulation Section */}
            <div className='flex gap-3 border p-4 rounded-md'>
                <div className="w-full flex flex-col gap-3">
                    <label className="block text-lg font-semibold mb-1 text-[#0E1680]">Enter Vitals</label>
                    <div className='flex flex-wrap gap-5'>
                        <Input type="text" placeholder="Temperature(°C)" required className="bg-white h-10 w-[49%]" />
                        <Input type="text" placeholder="Blood Pressure(mmHg)" required className="bg-white h-10 w-[49%]" />
                        <Input type="text" placeholder=" Temperature(°C)" required className="bg-white h-10 w-[49%]" />
                        <Input type="text" placeholder="Blood Pressure(mmHg)" required className="bg-white h-10 w-[49%]" />
                        <Input type="text" placeholder=" Weight(Kg)" required className="bg-white h-10 w-[49%]" />
                        <Input type="text" placeholder="Height(″)" required className="bg-white h-10 w-[49%]" />
                    </div>
                </div>

            </div>

            {/* Treatment Section */}
            <div className='flex gap-3 border p-4 rounded-md'>
                <div className="w-full flex flex-col gap-4">
                    <label className="block text-lg font-semibold mb-1 text-[#0E1680]">Assesment</label>
                    <div className='flex flex-wrap gap-5'>
                        <div className="w-full">
                            <label className="block text-sm font-medium mb-1">Provision Diagnosis</label>
                            <Textarea type="text" placeholder="Triage Notes" required className="bg-white h-25" />
                        </div>
                    </div>
                </div>

            </div>
            <div className='flex justify-center mt-4'>
                <Button className="bg-[#0E1680] hover:bg-[#0E1680] h-10 w-50">Submit</Button>
            </div>
        </div>
  )
}

export default Triage