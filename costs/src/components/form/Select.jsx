import styles from './Select.module.css'

function Select({ text, options, name, handleOnChange, value }) {
    return (
        <div className={styles.form}>
            <label htmlFor={name} className={styles.label}>{text}</label>
            <select
                name={name}
                id={name}
                onChange={handleOnChange}
                value={value || ''}
                className={styles.select}
            >
                <option value="">Selecione uma opção</option>
            </select>

        </div>
    )
}

export default Select