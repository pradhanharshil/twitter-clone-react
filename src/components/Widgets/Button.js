const Button = ({ className, children, onClick }) => {
    return (
        <button
            className={className}
            children={children}
            onClick={onClick || null} />
    );
};

export default Button;