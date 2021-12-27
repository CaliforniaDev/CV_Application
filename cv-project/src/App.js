import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Header from "./components/Header";
import CVForm from "./components/CVForm/CVForm";
import CVPreview from "./components/CVPreview/CVPreview";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
      },
      experience: [
        {
          id: uuidv4(),
          position: 'Web Dev',
          company: 'Nybble Box',
          city: 'Riverside',
          state: 'CA',
          from: '2020',
          to: '2021'
        }
      ],
      education: [
        {
          id: uuidv4(),
          school: 'DeVry',
          city: 'Riverside',
          state: 'CA',
          degree: 'Bachelors',
          subject: 'Computer Science',
          from: '2015',
          to: '2019'
        }
      ],
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


  render() {
    return (
      <div>
        <Header />
        <CVForm
          personalInfo={this.state.personalInfo}
          experience={this.state.experience}
          education={this.state.education}
          handleAddExperience={this.handleAddExperience}
          handleAddEducation={this.handleAddEducation}
          handleDeleteExperience={this.handleDeleteExperience}
          handleDeleteEducation={this.handleDeleteEducation}
          onChangeExperience={this.onChangeExperience}
          onChangeEducation={this.onChangeEducation}
          handleChangePersonal={this.handleChangePersonal} 
        />
        <CVPreview
        personalInfo={this.state.personalInfo} 
        />
      </div>
    )
  }
}
export default App;
