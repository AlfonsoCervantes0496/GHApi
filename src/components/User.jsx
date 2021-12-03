import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from '../contex/DataArray'
import Darkcontext from '../contex/usecontext'
import "../CSS/User.css"








const User = () => {
    const {data, dataArray, HandleDataFollowers, HandleDataFollowing, HandleRepositories}=useContext(DataContext)
    const{Dark}=useContext(Darkcontext)
    const array=[]
    array.push(dataArray)
console.log(dataArray)
console.log(data)



    return (
        <section className={Dark?"ONf":"OFFf"}>
        {array.map(x=>(


        <div className={Dark?"ONu":"OFFu"}>
        <img src={x.avatar_url} alt="" />
        <div>
        <p>{x.login}</p>
        <div className="fila">
        
        
            <div className="col" onClick={()=>HandleDataFollowers()}>
            <Link to="/followers"><h2>Seguidores</h2></Link>
                <h3>{x.followers}</h3>
                </div>
            <div className="col" onClick={()=>HandleDataFollowing()}>
            <Link to="/following"><h2>Seguidos</h2></Link>
            <h3>{x.following}</h3>
                </div>
        <div className="col" onClick={()=>HandleRepositories(x.repos_url)}>
        <Link to="/repositories"><h2>Repositorios</h2></Link>
            <h3>{x.public_repos}</h3>
            </div>
        </div>
        </div>
        
        
                


            
            
        </div>
        ))}
        </section>
    )
}

export default User
