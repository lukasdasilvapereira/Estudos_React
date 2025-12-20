import Button from "./evento/Button"

function Event() {
    function clicar() {
        console.log(`Ativado primeiro evento`)
    }

    function segundoEvento(){
        console.log("Ativado segundo evento")
    }
    return (
        <div>
            <p>Clique abaixo para ativar o evento</p>
            <Button evento={clicar} text="Primeiro evento" />
            <Button evento={segundoEvento} text="Segundo evento" />
        </div>
    )
}

export default Event