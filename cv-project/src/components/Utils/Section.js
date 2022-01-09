import React from "react";
import styled, { css } from "styled-components";

const Section = ({
  title,
  children
}) => {

  return (
    <SectionWrapper>
      <Title>{title}</Title>
      {children}
    </SectionWrapper>
  );
}

const SectionWrapper = styled.section`
  margin: 2rem 3rem 0 3rem;
  color: ${({ theme }) => theme.colors.dark}
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


