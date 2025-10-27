import { PillBottle, TestTube, TestTube2 } from 'lucide-react'
import React from 'react'
import LabTechRecentTable from './LabTechRecentTable'

function LabTechDashboard() {
  return (
        <div className='p-6'>
            <h1 className="text-3xl font-bold mb-8 text-foreground">Overview (Quick Stats)</h1>

            {/* Card 1 */}
            <div className='flex gap-5'>
                <div className='flex flex-col gap-2 justify-center items-center w-1/2 h-[30vh] text-center border border-[#CCD0F8] bg-[#F2F3FD] shadow rounded-md'>
                    <div className='bg-[#011D4A] text-white p-5 rounded-full'><TestTube2  size={30}/></div>
                    <h1 className='text[#011D4A] font-semibold text-3xl'>5</h1>
                    <p className='text-lg font-semibold text-[#475467]'>Pending Lab Tests</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center w-1/2 h-[30vh] text-center border border-[#CCD0F8] bg-[#F2F3FD] shadow rounded-md'>
                    <div className='bg-[#FFA500] text-white p-5 rounded-full'><TestTube2  size={30}/></div>
                    <h1 className='text[#011D4A] font-semibold text-3xl'>25</h1>
                    <p className='text-lg font-semibold text-[#475467]'>Completed Lab Tests</p>
                </div>
            </div>
            <LabTechRecentTable/>
        </div>
  )
}

export default LabTechDashboard