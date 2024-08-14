import React from 'react'
// import logo from '/'
import './nav.css'
const Nav = () => {
  return (
    <div className=' nav  w-full h-18 flex items-center justify-between ' >
        <div className='logo logo w-[5vw]  ml-[40px] ' >
            <img  src={'logo.svg'} alt=""  />
        </div>
        <div>
            <ul className='flex item-center gap-[40px] pr-[15px]  mr-[40px]  ' >
                <li className='text-[17px] font-semibold text-[#02254B]  ' >Home</li>
                <li className='text-[17px] font-semibold text-[#02254B] ' >About</li>
                <li className='text-[17px] font-semibold text-[#02254B]  ' >Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Nav
