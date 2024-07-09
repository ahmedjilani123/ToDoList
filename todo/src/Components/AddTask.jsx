import React, { useState } from 'react'
import { useRef } from 'react';
import { IoClose } from "react-icons/io5";
const AddTask = (props) => {
    const [Selected,setSelected]=useState(false)
    const selectRef = useRef()
const TaskCompleteHandle=()=>{
var selected =selectRef.current.checked
 setSelected(selected)
}


    return (
        <>
            <div className='flex justify-center items-center mt-5  '>
                <div className='md:w-[800px] flex justify-between bg-slate-300 rounded-md p-3 items-center content-center'>
                    <label className='flex justify-center items-center'>
                        <input ref={selectRef} type="checkbox" onChange={TaskCompleteHandle} className='mr-2 w-[1rem] h-[1rem] accent-blue-500 ' />
                        <p className={Selected ? 'line-through':''}>
                            {props.name}
                        </p>
                    </label>
                    <div className={Selected ? 'block cursor-pointer':'hidden cursor-pointer'}>
                        <IoClose  className='text-2xl active:text-red-400' onClick={props.eventMethod} />
                    </div>
                </div>
            </div >
        </>
    )
}

export default AddTask
