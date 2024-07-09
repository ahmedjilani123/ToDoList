import React from 'react'
import AddTask from './AddTask'

const Input = () => {
    const arr=[{name: 'foo', value: 'bar2'},{name: 'foo', value: 'bar4'},{name: 'foo', value: 'bar6'}]
    return (
        <>
            <div className='flex justify-center items-center mt-5'>
                <div className='md:w-[800px] h-[6rem] bg-blue-500 rounded-lg p-6 flex shadow-lg '>
                        <div className='w-full flex bg-slate-300 justify-center rounded-l-md '>
                            <input className='w-full text-black bg-slate-300 outline-none rounded-l-md px-4 text-lg ' />
                        </div>
                        <div className='w-[5rem] flex bg-slate-300 justify-center rounded-r-lg  '>
                            <button className='w-full bg-slate-300 rounded-r-lg font-bold active:text-blue-400 active:shadow-lg '>Add</button>
                        </div>
                        </div>
                      
            </div>
       {arr.map(function(item,i){
            return <AddTask key={i} name={item.value}/>
        })
    }
            
           
        </>
    )
}

export default Input
