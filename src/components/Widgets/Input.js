const Input = ({className, placeholder, value, onChange, type}) => {
    return (
        <input 
            className={className}
            placeholder={placeholder}
            value={value || null}
            onChange={onChange || null}
            type={type}/>
    );
}

export default Input;