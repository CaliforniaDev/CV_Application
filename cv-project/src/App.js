import React from "react";
import { v4 as uuidv4 } from 'uuid';
import CVForm from "./components/CVForm/CVForm";
import CVPreview from "./components/CVPreview/CVPreview";
import emptyCV from "./components/Utils/emptyCV";
import exampleCV from "./components/Utils/exampleCV";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {
        firstName: '',
        lastName: '',
        title: '',
        photo: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        email: '',
        phoneNumber: '',
        website: '',
        description: ''
      },
      experience: [
        {
          id: uuidv4(),
          position: '',
          company: '',
          city: '',
          state: '',
          from: '',
          to: '',
          description: ''
        }
      ],
      education: [
        {
          id: uuidv4(),
          school: '',
          city: '',
          state: '',
          degree: '',
          subject: '',
          from: '',
          to: ''
        }
      ],
      skills: [
        {
          id: uuidv4(),
          skill: ''
        }
      ]
    }
  }

  handleChangePersonal = e => {
    this.setState(state => ({
      personalInfo: {
        ...state.personalInfo,
        [e.target.name]: e.target.value
      },
    }));
  }

  onChangeExperience = (e, id) => {
    const { name, value } = e.target;
    this.setState(state => ({
      experience: state.experience.map(experienceItem => {
        return (experienceItem.id === id) ?
          { ...experienceItem, [name]: value }
          : experienceItem;
      }),
    }))
  }

  onChangeEducation = (e, id) => {
    const { name, value } = e.target;
    this.setState(state => ({
      education: state.education.map(educationItem => {
        return (educationItem.id === id) ?
          { ...educationItem, [name]: value }
          : educationItem;
      }),
    }))
  }
  onChangeSkills = (e, id) => {
    const { name, value } = e.target;
    this.setState(state => ({
      skills: state.skills.map(skillItem => {
        return (skillItem.id === id) ?
          { ...skillItem, [name]: value }
          : skillItem;
      }),
    }))
  }

  handleAddExperience = e => {
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

  handleAddEducation = e => {
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
  handleAddSkill = (e) => {
    e.preventDefault();
    const newSkillItem = {
      id: uuidv4(),
      skill: ''
    }
    this.setState(state => ({
      skills: [...state.skills, newSkillItem]
    }))
  }

  handleDeleteExperience = (e, id) => {
    e.preventDefault();
    this.setState(state => ({
      experience: state.experience.filter(item => item.id !== id),
    }));
  }

  handleDeleteEducation = (e, id) => {
    e.preventDefault();
    this.setState(state => ({
      education: state.education.filter(item => item.id !== id),
    }));
  }

  handleDeleteSkill = (e, id) => {
    e.preventDefault()
    this.setState(state => ({
      skills: state.skills.filter(item => item.id !== id),
    }));
  }

  handleLoadExample = e => {
    e.preventDefault();
    this.setState(exampleCV)
  }


  handleReset = e => {
    e.preventDefault();
    this.setState(emptyCV);
  }


  render() {
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
}
export default App;
