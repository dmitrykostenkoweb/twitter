import React, { Component } from "react";
import { Button } from "reactstrap";

import "./post-list-item.css";

export default class PostListItem extends Component {
 
  
  render() {
    const { label, onDelete, onToggleImportant, onToggleLiked, important, like } = this.props;
    let classNames = "app-list-item d-flex justify-content-between";

    if (important) {
      classNames += " important";
    }
    if (like) {
      classNames += " like";
    }
    return (
      <div className={classNames}>
        <span onClick={onToggleLiked} className="app-list-item-label">
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <Button
            className="btn-star btn-sm"
            onClick={onToggleImportant}
            outline
            color="secondary"
          >
            <i className="fa fa-star"></i>
          </Button>

          <Button 
          outline 
          color="danger"
          onClick={onDelete}>
            <i className="fa fa-trash-o"></i>
          </Button>

          <i className="fa fa-heart"></i>
        </div>
      </div>
    );
  }
}
