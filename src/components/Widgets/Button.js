const Button = ({ className, children, onClick=null }) => {
    return (
        <button
            className={className}
            children={children}
            onClick={onClick} />
    );
};

export default Button;