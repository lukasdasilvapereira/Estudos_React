import { useState } from "react"
import Saudacao from "./Saudacao"
import SayYourName from "./SayYourName"


function App() {
  const [name, setName] = useState()
  return (
    <div>
     <h1>State Lift</h1>
     <SayYourName setName={setName}/>
     <Saudacao nome={name}/>
    </div>
  )
}

export default App
