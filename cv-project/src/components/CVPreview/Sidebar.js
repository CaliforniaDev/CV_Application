import ContactInfo from "./ContactInfo";
import Skills from "./Skills";
import Section from "../Utils/Section";
import EducationItem from "./EducationItem";
import styled from "styled-components";

const Sidebar = ({ personalInfo, education, skills }) => {

  const educationItems = education.map(educationItem => {
    return (
      <EducationItem 
        key={educationItem.id}
        educationItem={educationItem}
      />
    );
  })

  return (
    <SidebarWrapper>
      <ContactInfo personalInfo={personalInfo} />
      {educationItems}
      <Skills skills={skills} />
    </SidebarWrapper>
  );
}

const SidebarWrapper = styled.div`
  padding: 2rem;
    h4 {
        text-transform: uppercase;
    }
    white-space: nowrap;
    display: flex;
    flex-direction: column;
`;

const Photo = styled.img`

`
export default Sidebar;