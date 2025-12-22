function OutraLista({ itens }) {
    return (

        <div>
            <h2>Lista de Coisas Boas</h2>

            {itens.length > 0 ? (
                itens.map((item, index) => (
                    <p key={index}>{item}</p>
                ))
            ) : (
                <p>Não há itens na lista</p>
            )}
        </div>
    )
}

export default OutraLista