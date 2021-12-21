const Button = ({ onClick, classNameProp, name }) => {
    return (
        <button onClick={onClick} className={classNameProp}>{name}</button>
    )
}

export default Button;