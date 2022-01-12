import React from "react";
import styled from "styled-components";
import Section from "../Utils/Section";
import SubSection from "../Utils/SubSection";

const ContactInfo = ({ personalInfo }) => {
  const {
    phoneNumber,
    address, 
    city,
    state,
    zipCode,
    website
  } = personalInfo;

  return (
    <ContactWrapper>
      <Section>
      <SubSection title="Phone">{phoneNumber}</SubSection>
      <SubSection title="Mail Address">
        {address} <br />
        {city}, {state} {zipCode}
      </SubSection>
      <SubSection title="Website">{website}</SubSection>
    </Section>
    </ContactWrapper>
    
  );
}

const ContactWrapper = styled.div`
`;

export default ContactInfo;