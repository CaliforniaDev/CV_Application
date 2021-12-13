import React from "react";
import Header from "./components/Header";
import CvForm from "./components/CvForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "this is a test"
    }
  }
  render() {
    return (
      <div>
        <Header />
        <CvForm />
      </div>
    )
  }
}
export default App;
