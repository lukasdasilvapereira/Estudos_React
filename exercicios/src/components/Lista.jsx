function Lista({itens = []}){
    return (
        <div>
            <h2>Lista</h2>
            {itens && (
                itens.map((item, index) => (
                    <p key={index}>{item}</p>
                ))
            )}
        </div>
    )
}

export default Lista