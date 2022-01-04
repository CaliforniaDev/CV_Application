import styles from "../../styles/CVPreview.module.scss";
import ExperienceItem from "./ExperienceItem";
import EducationItem from "./EducationItem"
import Skills from './Skills';


const CVBody = ({ personalInfo, experience, education, skills }) => {
    const experimentItems = experience.map(experienceItem => {
        return <ExperienceItem
            key={experienceItem.id}
            experienceItem={experienceItem}
        />
    })

    const skillItems = skills.map(skillItem => {
        return (
            <Skills
                key={skillItem.id}
                skillItem={skillItem}
            />
        )
    })

    const educationItem = education.map(educationItem => {
        return (
            <EducationItem 
              key={educationItem.id}
              educationItem={educationItem}
            />
        )
    })

    return (
        <div>
            
        </div>
    );
}





export default CVBody;