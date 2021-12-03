import React from 'react'

import { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from '../contex/DataArray'
import Darkcontext from '../contex/usecontext'


import "../CSS/Followers.css"



const Followers = () => {
    const {Dark} = useContext(Darkcontext)

    const {dataFollowers, inputText, FoollowerDetail, data }=useContext(DataContext)
    console.log(data)

    return (
        <div className={Dark?"ScON":"ScOFF"}>
            <h1>Seguidores </h1> 
        {
            
            dataFollowers.map
            (run=>(
            <div className={Dark?"cON":"cOFF"}>
            <img src={run.avatar_url} alt="" />
            <h1>{run.login}</h1>
            
            <Link to="/detail"><button on onClick={()=>FoollowerDetail(run.login)}>Ver Perfil</button></Link>


            </div>
            
            ))
            
        }
        </div>
    )
}

export default Followers
