import React from 'react'
import { IoIosSunny } from "react-icons/io";
const NavBar = () => {
  return (
    <>
    <nav className='flex justify-between items-center content-center bg-gray-900 px-7 h-[3rem]'>
<span className=' font-bold text-3xl font-sans'>To-Do-List</span>
<span className=' text-3xl cursor-pointer'><IoIosSunny /></span>
    </nav>
      
    </>
  )
}

export default NavBar
