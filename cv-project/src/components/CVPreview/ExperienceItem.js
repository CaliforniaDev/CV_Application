import styles from '../../styles/CVPreview.module.scss';

const ExperienceItem = ({ experienceItem }) => {
    return (
        <div className={styles.experienceItemsWrapper}>
            <h4>Experience</h4>
            <div>
                <p>{experienceItem.company}</p>
            </div>
        </div>

    );
}

export default ExperienceItem;