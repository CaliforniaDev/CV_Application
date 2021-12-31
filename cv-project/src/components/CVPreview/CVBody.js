import styles from "../../styles/CVPreview.module.scss";
import ExperienceItem from "./ExperienceItem";
const CVBody = ({ personalInfo, experience, education }) => {


    return (
        <div>
            <section className={styles.contactInfoContainer}>
                <div className={styles.contactsWrapper}>
                    <h4>PHONE</h4>
                    <p>{personalInfo.phoneNumber}</p>
                    <h4>MAIL ADDRESS</h4>
                    <p>{personalInfo.address}</p>
                    <p>{personalInfo.city}, {personalInfo.state} {personalInfo.zipCode}</p>
                    <h4>WEBSITE</h4>
                    <p>{personalInfo.website}</p>
                </div>
                <div className={styles.contactsWrapper}>
                    <h4>PERSONAL</h4>
                    <LoremIpsum />
                </div>
            </section>
            <section>
                <ExperienceItem experience={experience}/>
            </section>
        </div>

    );

}

const LoremIpsum = () => {
    return(
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