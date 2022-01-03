import styles from "../../styles/CVPreview.module.scss";
import ExperienceItem from "./ExperienceItem";
const CVBody = ({ personalInfo, experience, education }) => {

    const experimentItems = experience.map(experienceItem => {
        return <ExperienceItem
            key={experienceItem.id}
            experienceItem={experienceItem}
        />
    })

    return (
        <div>
            <section className={styles.personalInfoSection}>
                <div className={styles.contactsDiv}>
                    <div className={styles.contactsWrapper}>
                        <h4>PHONE</h4>
                        <p>{personalInfo.phoneNumber}</p>
                        <h4>MAIL ADDRESS</h4>
                        <p>{personalInfo.address}</p>
                        <p>{personalInfo.city}, {personalInfo.state} {personalInfo.zipCode}</p>
                        <h4>WEBSITE</h4>
                        <p>{personalInfo.website}</p>
                    </div>

                </div>
                <div className={styles.profileDiv}>
                    <div className={styles.profileWrapper}>
                        <h4>Profile</h4>
                        <LoremIpsum />
                    </div>

                </div>
            </section>
            <section className={styles.experienceSection}>
                <div className={styles.skills}></div>
                {experimentItems}
            </section>
        </div>

    );

}

const LoremIpsum = () => {
    return (
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.</p>
        </div>
    );
}



export default CVBody;