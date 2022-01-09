import SubSection from "../Utils/SubSection";
import styled from "styled-components";

const ExperienceItem = ({ experienceItem }) => {
  const { 
    position, 
    company, 
    city, 
    state, 
    from, 
    to 
  } = experienceItem;

  const experienceTitle = `${company} | ${position} ${from}-${to} `;
  const subTitle = `${city}, ${state} | ${from}-${to}`;
  console.log(experienceTitle);
  return (
    <ExperienceWrapper>
      <SubSection title={experienceTitle} secondaryTitle={subTitle}>
        <p> Developed a Responsive E-Commerce Web App utilizing
HTML5, CSS3, and JavaScript programing languages. Google
API is used to render map points between delivery and recipient. Written in modern, performant, maintainable code. Crafted
interactive wireframes before coding using Adobe XD. </p>
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