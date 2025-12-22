function Name({ setName }) {
    return (
        <div>
            {setName.length > 0 ? (
                <div>
                    <h2>Diga seu nome: </h2>
                    <input type="text" name="nome" id="nome" onChange={(e) => setName(e.target.value)}/>
                </div>
            ) : (
                <div>
                    <p>Esperando Resposta</p>
                </div>
            )}
        </div>
    )
}

export default Name