import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import CVForm from "./components/CVForm/CVForm";
import CVPreview from "./components/CVPreview/CVPreview";
import emptyCV from "./components/Utils/emptyCV";
import exampleCV from "./components/Utils/exampleCV";


const App = () => {
  const [cv, setCv] = useState(emptyCV);
  useEffect(() => console.log(cv), [cv]);
  
  const handleChangePersonal = e => {
    const {name, value, type} = e.target;
    if (type === "file"){
      handleChangeFile(e)
    }
  
    setCv(prevState => ({
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
      experience: [...prevState.experience, newItem]
    }));
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
      education: [...prevState.education, newItem]
    }));
  }
  const handleAddSkill = (e) => {
    e.preventDefault();
    const newSkillItem = {
      id: uuidv4(),
      skill: ''
    }
    setCv(prevState => ({
      skills: [...prevState.skills, newSkillItem]
    }))
  }

  const handleDeleteExperience = (e, id) => {
    e.preventDefault();
    setCv(prevState => ({
      experience: prevState.experience.filter(item => item.id !== id),
    }));
  }

  const handleDeleteEducation = (e, id) => {
    e.preventDefault();
    setCv(prevState => ({
      education: prevState.education.filter(item => item.id !== id),
    }));
  }

  const handleDeleteSkill = (e, id) => {
    e.preventDefault()
    setCv(prevState => ({
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



    
    return (
      <main>
        <CVForm
          personalInfo={this.state.personalInfo}
          experience={this.state.experience}
          education={this.state.education}
          skills={this.state.skills}
          handleAddExperience={this.handleAddExperience}
          handleAddEducation={this.handleAddEducation}
          handleAddSkill={this.handleAddSkill}
          handleDeleteExperience={this.handleDeleteExperience}
          handleDeleteEducation={this.handleDeleteEducation}
          handleDeleteSkill={this.handleDeleteSkill}
          onChangeExperience={this.onChangeExperience}
          onChangeEducation={this.onChangeEducation}
          onChangeSkills={this.onChangeSkills}
          handleChangePersonal={this.handleChangePersonal}
          handleLoadExample={this.handleLoadExample}
          handleReset={this.handleReset}
        />
        <CVPreview
          state={this.state}
        />
      </main>
    )
  }


export default App;
