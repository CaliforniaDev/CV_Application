import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import CVForm from "./components/CVForm/CVForm";
import CVPreview from "./components/CVPreview/CVPreview";
import emptyCV from "./components/Utils/emptyCV";
import exampleCV from "./components/Utils/exampleCV";


const App = () => {
  const [cv, setCV] = useState(emptyCV);
  useEffect(() => console.log(cv), []);
  console.log(cv);
  const handleChangePersonal = e => {
    const {name, value, type} = e.target;
    if (type === "file"){
      handleChangeFile(e)
    }
  
    this.setState(state => ({
      personalInfo: {
        ...state.personalInfo,
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
      this.setState(state => ({
        personalInfo: {
          ...state.personalInfo,
          [name]: reader.result,
        },
      }))
    }
    reader.readAsDataURL(file);
  }

 

  const onChangeExperience = (e, id) => {
    const { name, value } = e.target;
    this.setState(state => ({
      experience: state.experience.map(experienceItem => {
        return (experienceItem.id === id) ?
          { ...experienceItem, [name]: value }
          : experienceItem;
      }),
    }))
  }

  const onChangeEducation = (e, id) => {
    const { name, value } = e.target;
    this.setState(state => ({
      education: state.education.map(educationItem => {
        return (educationItem.id === id) ?
          { ...educationItem, [name]: value }
          : educationItem;
      }),
    }))
  }
  const onChangeSkills = (e, id) => {
    const { name, value } = e.target;
    this.setState(state => ({
      skills: state.skills.map(skillItem => {
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
    this.setState(state => ({
      experience: [...state.experience, newItem]
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
    this.setState(state => ({
      education: [...state.education, newItem]
    }));
  }
  const handleAddSkill = (e) => {
    e.preventDefault();
    const newSkillItem = {
      id: uuidv4(),
      skill: ''
    }
    this.setState(state => ({
      skills: [...state.skills, newSkillItem]
    }))
  }

  const handleDeleteExperience = (e, id) => {
    e.preventDefault();
    this.setState(state => ({
      experience: state.experience.filter(item => item.id !== id),
    }));
  }

  const handleDeleteEducation = (e, id) => {
    e.preventDefault();
    this.setState(state => ({
      education: state.education.filter(item => item.id !== id),
    }));
  }

  const handleDeleteSkill = (e, id) => {
    e.preventDefault()
    this.setState(state => ({
      skills: state.skills.filter(item => item.id !== id),
    }));
  }

  const handleLoadExample = e => {
    e.preventDefault();
    this.setState(exampleCV)
  }


  const handleReset = e => {
    e.preventDefault();
    this.setState(emptyCV);
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
