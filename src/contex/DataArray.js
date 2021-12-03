import { createContext, useState } from "react";


//creamos el context
const DataContext=createContext()

// Provider
const  DataContextProvider=({children})=>{


//Creacion de states
const [data,SetData]=useState("")
const [dataArray,SetDataArray]=useState([])
const [dataFollowers,SetDataFollower]=useState([])
const [dataFollowing,SetDataFollowing]=useState([])
const [repositories,SetRepositories]=useState([])

//Funciones
//obtener datos de input
const inputText=(text)=>{
    SetData(text)
    console.log(data)
}
//peticion de busqueda
const HandleData=async(x)=>{ 
    const Element = await fetch("https://api.github.com/users/"+x)
    const result = await Element.json()
    SetDataArray(result)
}
//peticion de seguidores
const HandleDataFollowers=async()=>{ 
    const ElementF = await  fetch(dataArray.followers_url)
    const resultF = await ElementF.json()
    SetDataFollower(resultF)
} 

const FoollowerDetail=(x)=>{
    SetData(x)
    HandleData(x)

}



//Seguidos
const HandleDataFollowing= async ()=>
{ 
    const ElementF = await  fetch("https://api.github.com/users/"+data+"/following")
    const resultF = await ElementF.json()
    SetDataFollowing(resultF)
} 
//Repostorios
const HandleRepositories= async(xx)=>{

    const request= await fetch(xx)
    const resultRequest=await request.json()
    SetRepositories(resultRequest)
}








const dataContext= {data, dataFollowers, dataFollowing, dataArray, repositories,
     HandleData, inputText, HandleDataFollowers, FoollowerDetail, HandleDataFollowing, HandleRepositories }
return(<DataContext.Provider value={dataContext}>{children}</DataContext.Provider>)



}
export {DataContextProvider}
export default DataContext