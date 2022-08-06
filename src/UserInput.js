/* be sure to add ", { Component } when using stateful components */
import React, { Component } from "react";

/* stateful component */
class UserInput extends Component {
  /* set initial state component */
  /* this state is for the single name on 1 name tag */
  state = {
    name: ""
  };
  /* event handler: update the name to whatever is typed in the input */
  updateName = (e) => {
    this.setState({ name: e.target.value });
  };

  /* handle submit method: stop page refresh, put the typed name into the addName prop, and set name value back to empty string */
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addName(this.state.name);
    this.setState({ name: "" });
  };

  render() {
    return (
      /* on submit handler */
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add a new name here..."
          /* render the value of whatever is inside the state */
          value={this.state.name}
          /* event listener */
          onChange={this.updateName}
        />
        <input type="submit" value="Create Name Tag" />
      </form>
    );
  }
}
export default UserInput;
