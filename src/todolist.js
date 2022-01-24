import React from "react";
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: false,
      checkedItems: new Map(),
      todoStyle: {
        fontStyle: "normal"
      },
      doneStyle: {
        fontStyle: "bold",
        textDecoration: "line-through"
      }
    };
  }

  deleteTodo = (ev, val) => {
    return (
      <button onClick={(e) => this.props.removeTodo(val)} key={ev}>
        Delete
      </button>
    );
  };

  setMarkTodo = () => {
    this.setState({
      todo: !this.state.todo
    });
  };

  handleChange(event) {
    var isChecked = event.target.checked;
    var item = event.target.value;

    this.setState((prevState) => ({
      checkedItems: prevState.checkedItems.set(item, isChecked)
    }));
  }
  render() {
    return (
      <>
        <div>
          {this.props.Lists.map((val, e) => (
            <div style={{ marginTop: "10px" }}>
              <input
                value={e}
                type="checkbox"
                onChange={(event) => {
                  this.handleChange(event);
                }}
              />
              <label
                style={
                  this.state.checkedItems.get(e.toString()) === true
                    ? this.state.doneStyle
                    : this.state.todoStyle
                }
                for={e}
              >
                {val}
                {this.deleteTodo(e, val)}
              </label>
              <br />
            </div>
          ))}
        </div>
        <hr />
        <h2>TODO APP</h2>
      </>
    );
  }
}
export default TodoList;
