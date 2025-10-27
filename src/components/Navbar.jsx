import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between items-center px-20 py-5'>
        <p className='font-bold text-lg'>WEB SHADOWS</p>
        <div className='flex gap-5'>
            <a href='/' className='text-sm font-semibold'>WORK</a>
            <a href='/'className='text-sm font-semibold' >ABOUT</a>
            <a href='/'className='text-sm font-semibold' >TEAM</a>
            <a href='/'className='text-sm font-semibold' >CONTACT</a>
        </div>
    </div>
  )
}

export default Navbar