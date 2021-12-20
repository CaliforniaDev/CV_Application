import styles from '../../styles/Button.module.scss';

const Button = ({ onClick }) => {
    return (
        <button onClick={onClick} className={styles.addButton}>Add</button>
    )
}

export default Button;