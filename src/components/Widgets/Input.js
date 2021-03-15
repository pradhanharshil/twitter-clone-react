const Input = ({className, placeholder, value=undefined, onChange=null, type}) => {
    return (
        <input 
            className={className}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            type={type}/>
    );
}

export default Input;