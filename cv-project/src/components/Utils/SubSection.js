import styled from "styled-components";

const SubSection = ({ title, secondaryTitle, children }) => {
  return (
    <SubSectionWrapper>
      <Title>{title}</Title>
      <Title>{secondaryTitle}</Title>
      {children}
    </SubSectionWrapper>
  );

}

const SubSectionWrapper = styled.section`
display: flex;
flex-direction: column;
font-size: 1.6rem;
margin-bottom: 1rem;
color: ${({ theme }) => theme.colors.dark}
`;

const Title = styled.h4`
`;

export default SubSection;