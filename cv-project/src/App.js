import React, { useState, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import { v4 as uuidv4 } from 'uuid';
import CVForm from "./components/CVForm/CVForm";
import CVPreview from "./components/CVPreview/CVPreview";
import emptyCV from "./components/Utils/emptyCV";
import exampleCV from "./components/Utils/exampleCV";


const App = () => {
  const [cv, setCv] = useState(emptyCV);
  
  const handleChangePersonal = e => {
    const {name, value, type} = e.target;
    if (type === "file"){
      handleChangeFile(e)
      return
    }
  
    setCv(prevState => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value
      },
    }));
  }

  const handleChangeFile = e => {
    const { name } = e.target;
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setCv(prevState => ({
        ...prevState,
        personalInfo: {
          ...prevState.personalInfo,
          [name]: reader.result,
        },
      }))
    }
    reader.readAsDataURL(file);
  }

 

  const onChangeExperience = (e, id) => {
    const { name, value } = e.target;
    setCv(prevState => ({
      ...prevState,
      experience: prevState.experience.map(experienceItem => {
        return (experienceItem.id === id) ?
          { ...experienceItem, [name]: value }
          : experienceItem;
      }),
    }))
  }

  const onChangeEducation = (e, id) => {
    const { name, value } = e.target;
    setCv(prevState => ({
      ...prevState,
      education: prevState.education.map(educationItem => {
        return (educationItem.id === id) ?
          { ...educationItem, [name]: value }
          : educationItem;
      }),
    }))
  }
  const onChangeSkills = (e, id) => {
    const { name, value } = e.target;
    setCv(prevState => ({
      ...prevState,
      skills: prevState.skills.map(skillItem => {
        return (skillItem.id === id) ?
          { ...skillItem, [name]: value }
          : skillItem;
      }),
    }))
  }

  const handleAddExperience = e => {
    e.preventDefault();
    const newItem = {
      id: uuidv4(),
      position: '',
      company: '',
      city: '',
      state: '',
      from: '',
      to: '',
    }
    setCv(prevState => ({
      ...prevState,
      experience: [...prevState.experience, newItem]
    }))
  }

  const handleAddEducation = e => {
    e.preventDefault();
    const newItem = {
      id: uuidv4(),
      school: '',
      city: '',
      state: '',
      degree: '',
      subject: '',
      from: '',
      to: ''
    }
    setCv(prevState => ({
      ...prevState,
      education: [...prevState.education, newItem]
    }))
  }
  const handleAddSkill = (e) => {
    e.preventDefault();
    const newSkillItem = {
      id: uuidv4(),
      skill: ''
    }
    setCv(prevState => ({
      ...prevState,
      skills: [...prevState.skills, newSkillItem]
    }))
  }

  const handleDeleteExperience = (e, id) => {
    e.preventDefault();
    setCv(prevState => ({
      ...prevState,
      experience: prevState.experience.filter(item => item.id !== id),
    }));
  }

  const handleDeleteEducation = (e, id) => {
    e.preventDefault();
    setCv(prevState => ({
      ...prevState,
      education: prevState.education.filter(item => item.id !== id),
    }));
  }

  const handleDeleteSkill = (e, id) => {
    e.preventDefault()
    setCv(prevState => ({
      ...prevState,
      skills: prevState.skills.filter(item => item.id !== id),
    }));
  }

  const handleLoadExample = e => {
    e.preventDefault();
    setCv(exampleCV)
  }


  const handleReset = e => {
    e.preventDefault();
    setCv(emptyCV);
  }

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });



    
    return (
      <main>
        <CVForm
          personalInfo={cv.personalInfo}
          experience={cv.experience}
          education={cv.education}
          skills={cv.skills}
          handleAddExperience={handleAddExperience}
          handleAddEducation={handleAddEducation}
          handleAddSkill={handleAddSkill}
          handleDeleteExperience={handleDeleteExperience}
          handleDeleteEducation={handleDeleteEducation}
          handleDeleteSkill={handleDeleteSkill}
          onChangeExperience={onChangeExperience}
          onChangeEducation={onChangeEducation}
          onChangeSkills={onChangeSkills}
          handleChangePersonal={handleChangePersonal}
          handleLoadExample={handleLoadExample}
          handleReset={handleReset}
          onPrint={handlePrint}
        />
        <CVPreview state={cv} ref={componentRef} />
      </main>
    )
  }


export default App;
