import styles from "../../styles/CVPreview.module.scss";

const CVBody = ({ personalInfo, experience, education }) => {
    console.log(personalInfo);
    return(
        <section className={styles.contactInfoContainer}>
            <div className={styles.contactsWrapper}>
            <h4>PHONE</h4>
            <p>{personalInfo.phoneNumber}</p>
            <h4>MAIL ADDRESS</h4>
            <p>{personalInfo.address}</p>
            <p>{personalInfo.city}, {personalInfo.state} {personalInfo.zipCode}</p>
            </div>
        </section>
    );
}

export default CVBody;