import React, { Component } from "react";
import {  Input } from "reactstrap";

import style from "./search-panel.module.css";

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
  }
  onUpdateSearch(e) {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
  }

  render() {
    return (
      <Input
        type="text"
        placeholder="search"
        className={style.input}
        onChange={this.onUpdateSearch}
      />
    );
  }
}
