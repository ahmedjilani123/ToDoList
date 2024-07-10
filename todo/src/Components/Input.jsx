import React, { useEffect, useRef, useState } from 'react'
import AddTask from './AddTask'
import toast, { Toaster } from 'react-hot-toast';
const Input = () => {
    const InputElement = useRef();
    const [Arr, setArr] = useState([])
    const AddTaskHandle = function () {
        var getTask = InputElement.current.value
        if (getTask == ""){
            toast.error("please enter some task");
            return;
        }
        var getData = [{ value: getTask }, ...Arr]
        localStorage.setItem('task', JSON.stringify(getData));
        setArr(getData);
        InputElement.current.value = ""
    }
    const DelectedTaskHandle = (i) => {
        const task = JSON.parse(localStorage.getItem('task'));
        var data = task.filter((arr, is) =>is !== i);
        localStorage.setItem('task', JSON.stringify(data));
        setArr(data);
    }
    useEffect(() => {
        const task = JSON.parse(localStorage.getItem('task'));
        if (task) {
            setArr(task);
        }
      }, []);
    return (
        <>

            <div className='flex justify-center items-center mt-5'>
                <div className='md:w-[800px] h-[6rem] bg-blue-500 rounded-lg p-6 flex shadow-lg '>
                    <div className='w-full flex bg-slate-300 justify-center rounded-l-md '>
                        <input ref={InputElement} placeholder="add your task" className='w-full text-black bg-slate-300 outline-none rounded-l-md px-4 text-lg ' />
                    </div>
                    <div className='w-[5rem] flex bg-slate-300 justify-center rounded-r-lg  '>
                        <button className='text-sky-900 w-full bg-slate-300 rounded-r-lg font-bold active:text-blue-400 active:shadow-lg ' onKeyDown={AddTaskHandle} onClick={AddTaskHandle}>Add</button>
                    </div>
                </div>
            </div>
            <Toaster position='top-right'></Toaster>
            {Arr.map(function (item, i) {
                return <AddTask key={i} index={i} eventMethod={() => DelectedTaskHandle(i)} name={item.value} />
            })
            }


        </>
    )
}

export default Input
