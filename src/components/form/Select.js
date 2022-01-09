import styles from './Select.module.css'
function Select({ type,text, name, opt,placeholder, handleOnChange,value}) {
    return(
        <div className={styles.form_control}>
            <label htmlFor= {name}>{text}:</label>
            <select 
            type = {type}
            id= {name}
            name = {name}
            placeholder={placeholder}
            onChange={handleOnChange}
            value = {value || ''}>
            <option>Selecione uma Opção</option>
            {opt.map((opt)=>(
                <option value = {opt.id} key={opt.id}>{opt.name}</option>
            ))}
            </select>
        </div>
    );
}

export default Select;