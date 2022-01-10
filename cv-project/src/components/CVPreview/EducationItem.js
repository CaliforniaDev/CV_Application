import styled from "styled-components";
import  Section from "../Utils/Section";
import SubSection from "../Utils/SubSection";
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
    <EducationWrapper>
      <Section>
        <SubSection title="Education">
          <h5>{school}</h5>
          <p><span>Degree: </span>{degree}</p>
          <p><span>Subject: </span>{subject}</p>
          <p>{from}-{to}</p>
        </SubSection>
      </Section>
    </EducationWrapper>
  );
}

const EducationWrapper = styled.div`
  span {
    font-weight: bold;
  }
`

export default EducationItem;