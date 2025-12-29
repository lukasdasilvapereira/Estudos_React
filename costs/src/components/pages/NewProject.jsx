import styles from './NewProject.module.css'
import LinkButton from './layout/LinkButton'

function NewProject() {
    return (
        <div className={styles.new_section}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>

            <form>
                <div>
                    <label htmlFor="nome">Nome do projeto:</label>
                    <input type="text" placeholder="Insira o nome do projeto" name="nome" id="nome" />
                </div>

                <div>
                    <label htmlFor="orcamento">Orçamento do projeto:</label>
                    <input type="number" placeholder="Insira o orçamento total" name="orcamento" id="orcamento" />
                </div>

                <div>
                    <label htmlFor="categoria">Selecione a categoria:</label>
                    <select name="categoria" id="categoria">
                        <option value="Selecione uma opção">Selecione uma opção</option>
                        <option value="infra">Infra</option>
                        <option value="desenvolvimento">Desenvolvimento</option>
                        <option value="Design">Design</option>
                        <option value="planejamento">Planejamento</option>
                    </select>
                </div>
                <button type="submit">Criar Projeto</button>
            </form>
        </div>
    )
}

export default NewProject