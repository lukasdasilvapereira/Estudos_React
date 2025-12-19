import style from './Frase.module.css'
import Title from './Title'

function Frase(){
    return(
        <>
        <Title />
        <p className={style.fraseContent}>Esse é meu exercício em React</p>
        </>
    )
}

export default Frase