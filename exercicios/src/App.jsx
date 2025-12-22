import OutraLista from "./OutraLista"

function App() {
  const lista = ["React", "Vue", "Angular"]
  return (
    <div>
      <OutraLista itens={lista} />
    </div>
  )
}

export default App
