import React, { Component } from "react";

import Info from "../Info";
import Header from "../Header";
import Controls from "../Controls";

import "./card.css";

export default class Card extends Component {
  render() {
    const { id } = this.props;
    return (
      <div className="card ">
        <Info name={this.props.name} />
        <h2> <Header name={this.props.name + " "+ this.props.lastname} /></h2>
        <h4> <strong> Age: </strong> {this.props.age}</h4>
        <h4><strong>Telephone:</strong> {this.props.telephone}</h4>
        <h4><strong>Email:</strong> {this.props.email}</h4>
        <Controls
          id={id}
          onDelete={this.props.onDelete}
          onFavouriteChange={this.props.onFavouriteChange}
          favourite={this.props.favourite}
        />
      </div>
    );
  }
}
