import React from "react";
import Header from "./components/Header";

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
      </div>
    )
  }
}
export default App;
