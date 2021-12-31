import styles from '../../styles/CVPreview.module.scss';

const CVHeader = ({ personalInfo }) => {
    const { firstName, lastName, title } = personalInfo;
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerWrapper}>
                <h1>{firstName} {lastName}</h1>
                <h3>{title}</h3>
            </div>

        </header>
    )
}

export default CVHeader;