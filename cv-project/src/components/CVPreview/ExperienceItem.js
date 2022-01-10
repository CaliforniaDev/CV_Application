import SubSection from "../Utils/SubSection";
import styled from "styled-components";

const ExperienceItem = ({ experienceItem }) => {
  const { 
    position, 
    company, 
    city, 
    state, 
    from, 
    to,
    description 
  } = experienceItem;

  const experienceTitle = `${company} | ${position} ${from}-${to} `;
  const subTitle = `${city}, ${state} | ${from}-${to}`;
  
  return (
    <ExperienceWrapper>
      <SubSection title={experienceTitle} secondaryTitle={subTitle}>
        {description}
      </SubSection>
    </ExperienceWrapper>

  );
}
const ExperienceWrapper = styled.div`
display: flex;
flex-direction: column;
margin: 1rem 0;

h4 {
  font-size: 1.6rem;
  letter-spacing: 1px;
  font-style: italic;
  margin-bottom: 0.4rem;
}
  
`
export default ExperienceItem;