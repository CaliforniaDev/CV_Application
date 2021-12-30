import styles from '../../styles/CVPreview.module.scss';

const CVHeader = ({ personalInfo }) => {
    const { firstName, lastName } = personalInfo;
    return (
        <header className={styles.headerWrapper}>
            <h1>
                {firstName} {lastName}
            </h1>
        </header>
    )
}

export default CVHeader;