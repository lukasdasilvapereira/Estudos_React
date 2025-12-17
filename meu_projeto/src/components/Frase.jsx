import style from './Frase.module.css'

function Frase(){
    return (
        <div className={style.fraseContainer}>
            <h1 className={style.fraseContent}>Isso é uma frase</h1>
        </div>
    )
}

export default Frase