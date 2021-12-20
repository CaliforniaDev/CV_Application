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
  handleAddExperience = e => {
    e.preventDefault();
    console.log("Add Button clicked");
  }
  render() {
    return (
      <div>
        <Header />
        <CVForm
          personalInfo={this.state.personalInfo}
          experience={this.state.experience}
          handleAddExperience={this.handleAddExperience}
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
