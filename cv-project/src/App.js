import React from "react";
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
  render() {
    return (
      <div>
        <Header />
        <CVForm
          personalInfo={this.state.personalInfo}
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
