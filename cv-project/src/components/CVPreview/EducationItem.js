import styles from '../../styles/CVPreview.module.scss';

const EducationItem = ({ educationItem }) => {
    const {
        school,
        city,
        state,
        degree,
        subject,
        from,
        to
    } = educationItem;
    return (
        <div className={styles.educationItemWrapper}>
            <p>{school}</p>
            <p>Degree: {degree}</p>
            <p>Subject: {subject}</p>
        </div>
    );
}

export default EducationItem;