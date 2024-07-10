import React, { useState } from 'react'
import NavBar from './Components/NavBar'
import Input from './Components/Input'



const App = () => {
  const [Model,setMode]=useState(false);
  const DarkModeHandler=()=>{
    let model =!Model;
    setMode(model)
  }
  return (
    <>
    <div className={Model ?'bg-black text-white h-screen' :'bg-white text-black h-screen' }>
    <NavBar DarkMode={DarkModeHandler} model={Model}/>
    <Input/>
    </div>
  
    </>
  )
}

export default App
