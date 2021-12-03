import logo from "../img/gitH.png"
import React from 'react'
import "../CSS/Form.css"


//
import  {useContext} from "react"
import { Link } from "react-router-dom"
import Darkcontext from '../contex/usecontext'
import DataContext from "../contex/DataArray"



const Form = () => {
    const {inputText, HandleData, data}=useContext(DataContext)
    const {Dark}= useContext(Darkcontext)
    return (
        <div className={Dark?"ON":"OFF"}>
        
        <section className="Section">
            <img src={logo} alt="" />

            <p>
                Introduce un usuario
            </p>
            <input type="text" name="" id="" onChange={(e)=>inputText(e.target.value)} />
            <Link to="/detail"><button className="Bsearch" onClick={()=>HandleData(data)}>Search</button></Link>


        </section>
        </div>
    )
}

export default Form
