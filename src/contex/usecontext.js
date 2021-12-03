import { createContext, useState} from "react";



//crear contexto
const Darkcontext=createContext()

//Creacion de provider
const DarkmodeProvider=({children})=>{


    //Creacion de state

  const [Dark, setdark] = useState(false)

  //funciones
  const changeDark=()=>{
      setdark(!Dark)


  }

  const data ={Dark,changeDark}

        return(<Darkcontext.Provider value={data}>{children}</Darkcontext.Provider>
        )

}


export {DarkmodeProvider}
export default Darkcontext


