import Frase from './components/Frase'
import './components/Marcas'
import Marcas from './components/Marcas'

function App(){
  return(
    <>
    <Frase />
    <Marcas marca="Ferrari" dinheiro={1.00000000000}/>
    </>
  )
}

export default App
