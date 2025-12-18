// FRAGMENTS <> </> SERVEM PRA POLUIR MENOS O DOM E FUNCIONAM QUASE COMO UMA DIV
import Item from './Item'

function List() {
    return (
        <>
            <h2>Minha lista</h2>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1974} />
                <Item marca="Fiat" ano_lancamento={1999}/>
                <Item marca="McLaren" ano_lancamento={1954}/>
            </ul>
        </>
    )

}

export default List