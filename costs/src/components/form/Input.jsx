import styles from './Input.module.css'

function Input({ type, text, name, placeholder, handleOnChange, value }) {
    return (
        <div className={styles.form}>
            <label htmlFor={name} className={styles.label}>{text}</label>
            <input type={type} placeholder={placeholder}  name={name} id={name} onChange={handleOnChange} value={value} className={styles.input}/>
        </div>
    )
}

export default Input