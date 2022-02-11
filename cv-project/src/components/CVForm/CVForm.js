import React from 'react';
import Personal from './Personal';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Button from '../Utils/Button';
import styled from 'styled-components';

const CVForm = ({
  personalInfo,
  experience,
  education,
  skills,
  onChangeExperience,
  onChangeEducation,
  onChangeSkills,
  handleAddExperience,
  handleAddEducation,
  handleAddSkill,
  handleDeleteExperience,
  handleDeleteEducation,
  handleDeleteSkill,
  handleChangePersonal,
  handleLoadExample,
  handleReset,
  onPrint
}) => {
  return (
    <MainContainer>
      <FormWrapper>
        <Personal
          personalInfo={personalInfo}
          handleChange={handleChangePersonal}
        />
        <Experience
          experience={experience}
          onChangeExperience={onChangeExperience}
          handleAddExperience={handleAddExperience}
          handleDeleteExperience={handleDeleteExperience}
        />
        <Education
          education={education}
          onChangeEducation={onChangeEducation}
          handleAddEducation={handleAddEducation}
          handleDeleteEducation={handleDeleteEducation}
        />
        <Skills
          skills={skills}
          onChangeSkills={onChangeSkills}
          handleAddSkill={handleAddSkill}
          handleDeleteSkill={handleDeleteSkill}
        />
        <Button
          pdfButton
          text="Generate PDF"
          onClick={onPrint}
        />
        <Button
          loadButton
          text="Load Example"
          onClick={handleLoadExample}
        />
        <Button
          resetButton
          text="Reset"
          onClick={handleReset}
        />
      </FormWrapper>
    </MainContainer>
  )
}
const MainContainer = styled.div`
  display: flex;
  padding: 4rem 8rem;
  justify-content: center;
`
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
  background: rgb(238, 238, 238);
  justify-content: center;
  width: 210mm;
  border-radius: 0.8rem;
  gap: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export default CVForm;