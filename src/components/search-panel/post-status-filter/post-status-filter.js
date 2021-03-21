import React, { Component } from "react";
import { Button } from "reactstrap";

import style from "./post-status-filter.module.css";

export default class PostStatusFilter extends Component {
  constructor(props) {
    super(props);
    this.buttons = [
      { name: "all", label: "All" },
      { name: "like", label: "like" },
    ];
  }
  render() {
    const buttons = this.buttons.map(({ name, label }) => {
      const{filter, onFilterSelect} = this.props;
      const active =filter === name;
      const buttonOutline = active ? false : true;

      return (
        <Button
        className={style.button}
          key={name}
          outline={buttonOutline}
          color="info"
          onClick={()=>onFilterSelect(name)}
        >
          {label}
        </Button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}
