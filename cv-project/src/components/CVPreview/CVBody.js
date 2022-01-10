import styled from "styled-components";
import ExperienceItem from "./ExperienceItem";
import EducationItem from "./EducationItem"
import Section from "../Utils/Section";
import SubSection from "../Utils/SubSection";


const CVBody = ({ personalInfo, experience, education }) => {
  const experienceItems = experience.map(experienceItem => {
    return <ExperienceItem
      key={experienceItem.id}
      experienceItem={experienceItem}
    />
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
    <CVBodyWrapper>
      <Section title="Profile">
        <Description>{personalInfo.description}</Description>
      </Section>
      <Section title="Experience">
        {experienceItems}
      </Section>
    </CVBodyWrapper>

  );
}
const CVBodyWrapper = styled.div`
    padding: 2rem;
`;

const Description = styled.div`
  text-align: left;
  border-bottom: 1px solid #333;
  padding-bottom: 2rem;
`;





export default CVBody;