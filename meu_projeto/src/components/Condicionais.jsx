import { useState } from "react"

function Condicionais() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviar(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail() {
        setUserEmail("")
    }
    return (
        <div>
            <form>
                <h2>Envie seu email</h2>
                <input type="email" name="email" id="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} />
                <button type="submit" onClick={enviar}>Enviar</button>
                {userEmail && (
                    <div>
                        <p>O email do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar Email</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicionais