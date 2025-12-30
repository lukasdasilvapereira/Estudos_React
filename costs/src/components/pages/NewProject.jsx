import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './NewProject.module.css'

function NewProject() {
    return (
        <div className={styles.new_section}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>

            <form>
                <Input type='text' text="Nome do projeto:" name='name' id='name' placeholder="Insira o nome do projeto" />

                <Input type='number' text="Orçamento do projeto:" name='orcamento' id="orcamento" placeholder="Insira o orçamento do projeto" />

                <Select name="category_id" text="Selecione a Categoria:" />
               <SubmitButton text="Criar Projeto"/>
            </form>
        </div>
    )
}

export default NewProject