import React, { Component } from "react";
import SortableTree from "react-sortable-tree";
import "react-sortable-tree/style.css";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [
        { title: "Chicken", expanded: true, children: [{ title: "Egg" }] },
      ],
    };
  }

  handleChange = (value) => {
    console.log(value);
    this.setState({ treeData: value });
  };

  render() {
    console.log(this.state.treeData);
    return (
      <div style={{ height: 500 }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Todo;
