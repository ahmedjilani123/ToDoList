import React from 'react'
import { IoClose } from "react-icons/io5";
const AddTask = (props) => {

    return (
        <>
            <div className='flex justify-center items-center mt-5  '>
                <div className='md:w-[800px] flex justify-between bg-slate-300 rounded-md p-3 items-center content-center'>
                    <label className='flex justify-center items-center'>
                        <input type="checkbox" className='mr-2 w-[1rem] h-[1rem] accent-blue-500 ' />
                        <p className='line-through'>
                            {props.name}
                        </p>
                    </label>
                    <div className='cursor-pointer '>
                        <IoClose className='text-2xl active:text-red-400' />
                    </div>
                </div>
            </div >
        </>
    )
}

export default AddTask
