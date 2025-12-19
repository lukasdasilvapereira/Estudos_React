import { useState } from "react"

function Form() {

    const [name, setName] = useState()
    const [password, setPassword] = useState()
    function retornarCadastro(e) {
        e.preventDefault()
        console.log(name)
        console.log(password)
    }

    return (
        <form onSubmit={retornarCadastro}>
        <div>
            <h2>Form</h2>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} />
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <input type="submit" value="cadastrar" />
        </div>
           </form>
    )
}

export default Form