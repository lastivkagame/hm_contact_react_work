import React, { Component } from "react";
import { Button } from 'react-bootstrap';

import "./controls.css";

export default class Controls extends Component {
  render() {
    const className = "star-img " + 
      this.props.favourite == true ? "fas fa-star" : "far fa-star";
    return (
      <>
      <div class="row justify-content-around align-items-center">
        <span className="d-block">
          <i onClick={this.props.onDelete} className="fas fa-trash delete-img"></i>
        </span>
        <span className="d-block">
          <Button className="btn-success">EDIT</Button>
        </span>
        <span className="d-block">
          <i onClick={this.props.onFavouriteChange} className={className}></i>
        </span>
        </div>
      </>
    );
  }
}
