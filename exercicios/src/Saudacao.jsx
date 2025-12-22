function Saudacao({name}){
    function gerarNome(nam){
        return `Olá, ${nam}!`
    }

    return(
        <>
        {name && 
        <p>{gerarNome(name)}</p>
        }
        </>
    )
}

export default Saudacao