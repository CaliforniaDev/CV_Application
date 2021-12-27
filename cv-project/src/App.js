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
  
  onChangeEducation = () => {
    console.log("Education change handler");
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
    }))
  }

  handleDeleteExperience = (e, id) => {
    e.preventDefault();
    console.log("delete clicked");
    this.setState(state => ({
      experience: state.experience.filter(item => item.id !== id),
    }))
  }

  render() {
    return (
      <div>
        <Header />
        <CVForm
          personalInfo={this.state.personalInfo}
          experience={this.state.experience}
          handleAddExperience={this.handleAddExperience}
          handleDeleteExperience={this.handleDeleteExperience}
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
