import React from 'react'
import "../CSS/header.css"


//
import  {useContext} from "react"
import Darkcontext from '../contex/usecontext'

const Header = () => {

const {Dark, changeDark}= useContext(Darkcontext)
console.log(Dark)


    return (
       <header className={Dark?"fON":"fOFF"}> 
           <div className="headerDiv1">
               <h1>GitHub {Dark}</h1>
               <img src="" alt="" />
               <h1>API</h1>

           </div>
           
           <div className="SwDarkMode">
              
               
               <p>DarkMode?</p>
               <button className={Dark?"bON":"bOFF"} onClick={()=>changeDark()}>{Dark?"OFF":"ON"}</button>
                </div>
           
           
       </header>
    )
}

export default Header
