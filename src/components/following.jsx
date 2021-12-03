import { Link } from 'react-router-dom'
import React from 'react'
import { useContext } from 'react'
import DataContext from '../contex/DataArray'
import Darkcontext from '../contex/usecontext'

const Following = () => {


    //context
    const {Dark} = useContext(Darkcontext)
    const {dataFollowing, FoollowerDetail}=useContext(DataContext)
    console.log(dataFollowing)


    return (
        <div className={Dark?"ScON":"ScOFF"}>
        <h1>Seguidos </h1> 
    {
        
        dataFollowing.map
        (run=>(
            <div className={Dark?"cON":"cOFF"}>
        <img src={run.avatar_url} alt="" />
        <h1>{run.login}</h1>
        
        <Link to="/detail"><button onClick={()=>FoollowerDetail(run.login)}>Ver Perfil</button></Link>


        </div>
        
        
        ))
        
    }
    </div>
    )
}

export default Following
