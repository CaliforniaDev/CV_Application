import ContactInfo from "./ContactInfo";
import Skills from "./Skills";
import styled from "styled-components";

const Sidebar = ({ personalInfo, skills }) => {
  return (
    <SidebarWrapper>
      <ContactInfo personalInfo={personalInfo} />
      <Skills skills={skills} />
    </SidebarWrapper>
  );
}

const SidebarWrapper = styled.div`
    h4 {
        text-transform: uppercase;
    }
    display: flex;
    flex-direction: column;
`;

export default Sidebar;