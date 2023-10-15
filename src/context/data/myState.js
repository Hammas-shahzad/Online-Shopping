import React, { useState } from 'react'
import myContext from './myContext'


const MyState = (props) => {

    // const [mode , setMode ] = useState("light");
    const [mode , setMode ] = useState("light");

    const toggleMode = ()=>{
        if(mode === "light"){
            setMode("dark");
            document.body.style.backgroundColor = "rgba(17, 24 , 39)"
            document.body.style.color = "white"
        }
        else{
            setMode("light");
            document.body.style.backgroundColor = "white"
            document.body.style.color = "rgba(17, 24 , 39) "
        }
    }

  return (
    <myContext.Provider value={{mode ,toggleMode}}>
        {props.children}
    </myContext.Provider>
  )
}

export default MyState