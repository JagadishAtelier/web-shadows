import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { ArrowLeft } from 'lucide-react'
import React from 'react'
import PatientOverviewFields from './PatientOverviewFields'

function PatientProfile() {
    return (
        <div>
            <div className='flex gap-2 items-center mb-8'>
                <ArrowLeft size={18} />
                <h2 className="text-lg font-bold text-[#0E1680]">Patient list / Patients Details / Alice Mwangi</h2>
            </div>
            <div className='flex gap-4'>
            {/* LEFT CONTENT */}
            <div className='w-[40%]'>

                {/* Patient image section */}

                <div className='flex  w-full items-center border-b pb-3'>
                    <div className='flex flex-col gap-1 items-center text-center justify-center w-1/2'>
                        <img src='/profile.png' className='h-20 rounded-full' />
                        <p className='font-bold fs-base'>Alice Mwangi</p>
                        <p>22 Years, Female</p>
                    </div>
                    <div className='flex flex-col gap-2 w-full bg-[#F2F3FD] p-3 rounded-md'>
                        <p className='text-lg font-semibold'>Current status</p>
                        <p className='bg-[#CCD0F8] text-[#101828] py-1 px-3 rounded-md'>Room Number: 28B</p>
                        <select className="w-full p-2 bg-[#CCD0F8] text-[#101828] py-1 px-3 rounded-md" required>
                            <option value="">Select Risky</option>
                            <option>Save</option>
                            <option>Risky</option>
                        </select>
                        <select className="w-full p-2 bg-[#CCD0F8] text-[#101828] py-1 px-3 rounded-md" required>
                            <option value="">Select Under Treatment</option>
                            <option>Under Treatment</option>
                            <option>Recovered</option>
                        </select>
                    </div>
                </div>

                {/* Patient Id section */}
                <div className='flex flex-col gap-4 border-b py-3 px-2'>
                    <div className='flex justify-between'>
                        <div>
                            <p className='text-[#667085]'>Patient ID</p>
                            <p>P001</p>
                        </div>
                        <div>
                            <p className='text-[#667085]'>Phone</p>
                            <p>9876543210</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <p className='text-[#667085]'>Date of Birth</p>
                            <p>14 February 2001</p>
                        </div>
                        <div>
                            <p className='text-[#667085]'>Disease</p>
                            <p>Cardiology</p>
                        </div>
                    </div>
                </div>


                {/* Patient pressure section */}
                <div className='flex flex-col gap-4 border-b py-3 px-2'>
                    <div className='flex justify-between gap-3'>
                        <div className='bg-[#E5E7FB] w-full p-3 rounded-md'>
                            <p className='mb-2 font-semibold'>Blood Pessure</p>
                            <p className='text-sm mb-1'>30%</p>
                            <Progress value={30} className=" [&>div]:bg-[#3B44B2]" />
                            <p className='text-end mt-1 text-sm'>141/90mmhg</p>
                        </div>
                        <div className='bg-[#E5E7FB] w-full p-3 rounded-md'>
                            <p className='mb-2 font-semibold'>Temparature</p>
                            <p className='text-sm mb-1'>30%</p>
                            <Progress value={30} className=" [&>div]:bg-[#3B44B2]" />
                            <p className='text-end mt-1 text-sm'>29°C</p>
                        </div>
                    </div>
                    <div className='flex justify-between gap-3'>
                        <div className='bg-[#E5E7FB] w-full p-3 rounded-md'>
                            <p className='mb-2 font-semibold'>Pulse</p>
                            <p className='text-sm mb-1'>30%</p>
                            <Progress value={30} className=" [&>div]:bg-[#3B44B2]" />
                            <p className='text-end mt-1 text-sm'>70kg</p>
                        </div>
                        <div className='bg-[#E5E7FB] w-full p-3 rounded-md'>
                            <p className='mb-2 font-semibold'>Oxygen Levels</p>
                            <p className='text-sm mb-1'>30%</p>
                            <Progress value={30} className=" [&>div]:bg-[#3B44B2]" />
                            <p className='text-end mt-1 text-sm'>5.6" inc</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT CONTENT */}
            <PatientOverviewFields/>
            </div>
        </div>
    )
}

export default PatientProfile