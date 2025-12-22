import { useState } from "react"
import Lista from "./components/Lista"
import Name from "./components/Name"
import Saudacao from "./Saudacao"

function App() {
  const list = ["Java", "C#", "C++"]
  const [name, setName] = useState()
  return (
    <div>
      <Lista itens={list} />
      <Name setName={setName}/>
      <Saudacao name={name}/>
    </div>
  )
}

export default App
