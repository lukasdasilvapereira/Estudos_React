function Event({numero}){
     function clicar(){
            console.log(`Clicado ${numero}`)
        }
    return(
        <div>
            <p>Clique abaixo para ativar o evento</p>
            <button onClick={clicar}>Clique aqui</button>
        </div>
    )
}

export default Event