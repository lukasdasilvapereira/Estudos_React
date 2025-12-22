function Saudacao({nome}){

    function gerarSaudacao(esperarAlgumNome){
        return `Olá ${esperarAlgumNome}, tudo bem?`
    }
    return (
        <>{nome && <p>{gerarSaudacao(nome)}</p>}</>
    )
}

export default Saudacao