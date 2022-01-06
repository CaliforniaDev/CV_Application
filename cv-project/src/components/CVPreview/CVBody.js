import styled from "styled-components";
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
        <BodyContainer>
            <h4>Phone</h4>
        </BodyContainer>
    );
}
const BodyContainer = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.secondaryLight}
`;





export default CVBody;