import React from "react";
import Header from "./components/Header";
import CvForm from "./components/CvForm";

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
  handleChange = e => {
    this.setState({
      personalInfo: {
        [e.target.name]: e.target.value
      },
    })
  }
  render() {
    console.log(this.state.personalInfo);
    return (
      <div>
        <Header />
        <CvForm 
          handleChangeProp={this.handleChange} 
        />
      </div>
    )
  }
}
export default App;
