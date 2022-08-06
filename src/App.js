import React, { Component } from "react";
import NameTagList from "./NameTagList.js";
import UserInput from "./UserInput.js";

class App extends Component {
  /* this state is for all names on the name tags */
  state = {
    names: ["Nancy", "Mike", "Eleven", "Hopper", "Vecna"]
  };

  /* this removes a name from the index if the "x" is clicked */
  removeName = (clickedIndex) => {
    // to learn how the .filter method works, check out https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    const filterCallback = (_, index) => index !== clickedIndex;
    const newNames = this.state.names.filter(filterCallback);
    this.setState({ names: newNames });
  };

  /* this method adds our new name to the array of names above */
  addName = (name) => {
    /* use the "spread" syntax to copy the existing array */
    const newNames = [name, ...this.state.names];
    this.setState({ names: newNames });
  };

  /* lifecycle methods */

  /* react runs this code when UI rerenders (when the state changes) */
  componentDidUpdate() {
    /* save names that are in state but in a string form */
    const savedNamesString = JSON.stringify(this.state.names);
    /* store in local storage: local storage is basically a collection of key value pairs */
    localStorage.setItem("savedNames", savedNamesString);
  }
  /* react runs this code when UI rerenders (when the state changes) */
  componentDidMount() {
    /* fetch local storage and put in a new variable */
    const savedNamesString = localStorage.getItem("savedNames");
    /* set state to whatever is in savedNames */
    if (savedNamesString) {
      /* reverse the stringify so we can use the data */
      const savedNames = JSON.parse(savedNamesString);
      this.setState({ names: savedNames });
    }
  }

  /* this is the name tag generator display */
  render() {
    return (
      <div className="App">
        <h1>Name Tag Generator</h1>
        {/* addName is now the prop we are going to be passing to UserInput */}
        <UserInput addName={this.addName} />
        <NameTagList names={this.state.names} removeName={this.removeName} />
      </div>
    );
  }
}

export default App;
