import React from "react";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  setValue = (val) => {
    this.setState({
      value: val
    });
  };

  render() {
    return (
      <>
        <input
          placeholder="Type your todo!"
          value={this.state.value}
          onChange={(e) => this.setValue(e.target.value)}
        />

        <button onClick={(e) => this.props.addtoList(this.state.value)}>
          ADD +
        </button>
      </>
    );
  }
}
export default AddTodo;
