import HelloWorld from './components/HelloWorld.jsx'

function App() {
  const name = "Lucas da Silva Pereira"

  function soma(a, b){
    return a + b
  }
  return (
    <div>
      <h1>Olá React, me chamo {name}</h1>
      <p>Meu primeiro react</p>
      <p>Soma {soma(2, 4)}</p>
      <HelloWorld />
      <HelloWorld />
    </div>
  )
}

export default App
