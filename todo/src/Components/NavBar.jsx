import React from 'react'
import { IoIosSunny ,IoMdMoon} from "react-icons/io";
const NavBar = (props) => {
  return (
    <>
    <nav className='flex justify-between items-center content-center px-7 h-[3rem]'>
<span className=' font-bold text-3xl font-sans'>To-Do-List</span>
<span className=' text-3xl cursor-pointer flex' onClick={props.DarkMode}>{props.model ?<IoMdMoon />:<IoIosSunny />}</span>
    </nav>
      
    </>
  )
}

export default NavBar
