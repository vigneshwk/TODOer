import React, { Component } from "react";
import SortableTree from "react-sortable-tree";
import "react-sortable-tree/style.css";
import { TextField, Fab } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      panelTitle: "",
      treeData: [
        { title: "Chicken", expanded: true, children: [{ title: "Egg" }] },
      ],
    };
  }

  handleChange = (value) => {
    console.log(value);
    this.setState({ treeData: value });
  };

  handleTextField = (event) => {
    const { name, id, type, value } = event.target;

    if (id === "panelTitle") {
      this.setState({ [id]: value });
    }
  };
  handleAdd = () => {
    const { panelTitle: title, treeData } = this.state;
    if (title) {
      treeData.push({ title, children: [] });
      this.setState({ treeData, panelTitle: "" });
    }
  };
  render() {
    console.log(this.state.treeData);
    return (
      <div style={{ height: 500 }}>
        <TextField
          name="panelTitle"
          id="panelTitle"
          onChange={this.handleTextField}
        />
        <Fab size="small" color="primary" onClick={this.handleAdd}>
          <AddIcon />
        </Fab>
        <SortableTree
          style={{ backgroundColor: "blue", width: "90%" }}
          treeData={this.state.treeData}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Todo;
