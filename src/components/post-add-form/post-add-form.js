import React, { Component } from "react";
import style from "./post-add-form.module.css";
import { Button, Input } from "reactstrap";

export default class PostAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      text: event.target.value,
    });
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({
      text: "",
    });
  }

  render() {
    return (
      <form className={style.addPostPanel} onSubmit={this.onSubmit}>
        <Input
          type="text"
          placeholder="write something"
          className={style.addPostInput}
          onChange={this.onValueChange}
          value={this.state.text}
        />
        <Button
          color="success"
          outline
          type="submit"
          className={style.addPostButton}
        >
          Add
        </Button>
      </form>
    );
  }
}
