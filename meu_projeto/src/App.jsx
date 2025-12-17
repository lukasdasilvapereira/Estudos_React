import HelloWorld from './components/HelloWorld.jsx'
import SayMyName from './components/SayMyName.jsx'
import Pessoa from './components/Pessoa.jsx'

function App() {
  const name = "Lucas Pereira"

  function soma(a, b){
    return a + b
  }
  return (
    <div>
      <h1>Olá React, me chamo {name}</h1>
      <p>Meu primeiro react</p>
      <p>Soma {soma(2, 4)}</p>
      <HelloWorld />
      <SayMyName nome={name}/>
      <Pessoa nome="Lucas" idade="19" profissao="Programador"/>
    </div>
  )
}

export default App
