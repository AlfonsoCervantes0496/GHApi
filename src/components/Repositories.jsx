import React from 'react'


import { useContext } from 'react'
import DataContext from '../contex/DataArray'
import Darkcontext from '../contex/usecontext'

import "../CSS/repos.css"

const Repositories = () => {

    //context
    const {Dark} = useContext(Darkcontext)
    const {repositories,  }=useContext(DataContext)

    console.log(repositories)
    return (
        <section className={Dark?"ffON":"ffOFF"}>
                <h1>Repositorios</h1>
                {
                    repositories.map(run=>(
                <div >
                    <h1>Id {run.id}</h1>
                    <h1>Nombre {run.full_name}</h1>
                   <a href={run.html_url}>  <button su>Ver proyecto</button></a>

                    <h1>Descripcion</h1>
                    <p>{run.description}</p>

                    




                </div>))
                }


        </section>
    )
}

export default Repositories
