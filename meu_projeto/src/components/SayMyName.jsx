import style from './SayMyName.module.css'

function SayMyName({nome}){
    return (
        <div className={style.sayContainer}>
            <p className={style.sayContent}>Fala ae {nome}, suave?</p>
        </div>
    )
}

export default SayMyName