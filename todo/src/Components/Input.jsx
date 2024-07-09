import React, { useEffect, useRef, useState } from 'react'
import AddTask from './AddTask'

const Input = () => {
    const InputElement = useRef();
    const [Arr, setArr] = useState([])
    const AddTaskHandle = function (event) {
        var getTask = InputElement.current.value
        if (getTask == "") return;
        var getData = [{ value: getTask }, ...Arr]
        setArr(getData);
        InputElement.current.value = ""
    }
    const DelectedTaskHandle = (i) => {
        var data = Arr.filter((arr, is) =>is !== i);
        setArr(data);
    }
    return (
        <>
            <div className='flex justify-center items-center mt-5'>
                <div className='md:w-[800px] h-[6rem] bg-blue-500 rounded-lg p-6 flex shadow-lg '>
                    <div className='w-full flex bg-slate-300 justify-center rounded-l-md '>
                        <input ref={InputElement} className='w-full text-black bg-slate-300 outline-none rounded-l-md px-4 text-lg ' />
                    </div>
                    <div className='w-[5rem] flex bg-slate-300 justify-center rounded-r-lg  '>
                        <button className='text-sky-900 w-full bg-slate-300 rounded-r-lg font-bold active:text-blue-400 active:shadow-lg ' onKeyDown={AddTaskHandle} onClick={AddTaskHandle}>Add</button>
                    </div>
                </div>
            </div>
            {Arr.map(function (item, i) {
                return <AddTask key={i} index={i} eventMethod={() => DelectedTaskHandle(i)} name={item.value} />
            })
            }


        </>
    )
}

export default Input
