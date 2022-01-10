import React from "react";
import styled, { css } from "styled-components";

const Section = ({
  title,
  children,
  padding,
}) => {

  return (
    <SectionWrapper padding={padding}>
      <Title>{title}</Title>
      {children}
    </SectionWrapper>
  );
}

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${props => props.padding};
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 2rem;
`;

const Title = styled.h3`
  text-transform: uppercase;
  margin: 0;
  padding:0;
  font-size: 2.4rem;
  font-weight: 550;
  letter-spacing: 4px;
`;

export default Section;


