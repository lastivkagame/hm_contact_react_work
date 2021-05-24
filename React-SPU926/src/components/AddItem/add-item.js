import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./add-item.css";

export default class AddItem extends Component {
  state = {
    name: "",
    age: "",
    redirect: false,
    social: null,
    email: "",
    telephone: "",
    lastname: "",
    favourite: false
  };

  onNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  onFavouriteChange = (e) => {
    this.setState({
      favourite: e.target.value,
    });
  };

  onAgeChange = (e) => {
    this.setState({
      age: e.target.value,
    });
  };

  onSocialFbChange = (e) => {
    this.setState({
      social: null,
    });
    // let t = social.fb;
    // this.setState({
    //    social.fb = e.target.value,
    // });
  }

  onEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  }

  onTelephoneChange = (e) => {
    this.setState({
      telephone: e.target.value,
    });
  }

  onLastnameChange = (e) => {
    this.setState({
      lastname: e.target.value,
    });
  }

  onSubmitContact = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state);
    this.setState({
      name: "",
      age: "",
      lastname: "",
      redirect: true,
      telephone: "",
      social: null,
      email: ""
    });


    this.location = "/";
    return <Redirect to="/" />
  };

  render() {

    if (this.state.redirect) {
      this.setState({
        redirect: false
      });
      return <Redirect to="/" />
    }

    return (
      <>
        <div className="container mt-3">
          <h2> - ADD Contact - </h2>
          <form onSubmit={this.onSubmitContact} className="form-group mt-4">
            <input
              onChange={this.onNameChange}
              name="name"
              placeholder="Enter name"
              className="form-control mb-3"
              value={this.state.name}
            />
            <input
              onChange={this.onAgeChange}
              name="age"
              placeholder="Enter age"
              className="form-control mb-3"
              value={this.state.age}
            />
            <input
              onChange={this.onLastnameChange}
              name="lastname"
              placeholder="Enter lastname"
              className="form-control mb-3"
              value={this.state.lastname}
            />
            <input
              onChange={this.onTelephoneChange}
              name="telephone"
              placeholder="Enter telephone"
              className="form-control mb-3"
              value={this.state.telephone}
            />
            <input
              onChange={this.onEmailChange}
              name="email"
              placeholder="Enter email"
              className="form-control mb-3"
              value={this.state.email}
            />
            <div>
              <h2>Social</h2>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <input type="checkbox" aria-label="Checkbox for following text input" />
                </div>
              </div>
              <input type="text" class="form-control" aria-label="Text input with checkbox" />
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <input type="checkbox" aria-label="Checkbox for following text input" />
                </div>
              </div>
              <input type="text" class="form-control" aria-label="Text input with checkbox" />
            </div>
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" onChange={this.onFavouriteChange} checked = {this.state.favourite}
              name="favourite" />
              <label class="form-check-label" for="exampleCheck1">ADD to favorite</label> 
            </div>
            <div className="bottom-right">
              <button type="submit" className="btn btn-success">
                {" "}
                {/* <i className="fas fa-plus-circle"> </i> */}
                ADD Conatct
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
