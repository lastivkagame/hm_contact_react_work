import React, { Component } from "react";

import "./EditItem.css";
import { Container, ListGroup, ListGroupItem, Card, Button, Modal, Row, Col, Form } from 'react-bootstrap';


export default class EditItem extends Component {

    state = {
        show: true,
        id: this.fillFields.id,
        name: "",
        lastname: "",
        age: "",
        telephone: "",
        email: "",
        favorite: false,
        social: {
            fb: null,
            insta: null
        },

    }

    // fillFields = (e) =>{
    //     this.setState({
    //         id: e.id,
    //         name: e.name,
    //         lastname: e.lastname,
    //         age: e.age,
    //         telephone: e.telephone,
    //         email: e.email,
    //         favorite: e.favorite,
    //         social: e.social
    //     });
    // }

    onNameChange = (e) => {
        //console.log(e.target.value);
        // this.state.name = ?
        this.setState({
            name: e.target.value,
        });
    }

    onSocialFbChange = (e) => {

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

    onAgeChange = (e) => {
        this.setState({
            age: e.target.value,
        });
    }

    onLastnameChange = (e) => {
        this.setState({
            lastname: e.target.value,
        });
    }

    onSubmitContact = (e) => {
        e.preventDefault();
        console.log("work submit");
        this.props.onEditPost(this.state);
        this.setState({
            name: "",
            age: "",
            show: false,
        });
    }

    showModal = e => {

        console.log("work show modal");
        if (this.state.show === true) {
            this.setState({
                show: false
            });
            console.log(this.show);
        }
        else {
            this.setState({
                show: true
            });
            console.log(this.state.show);
        }
    };

    render() {
        console.log(this.state.show);
        alert("hey");
        return (
            <>
            {/* <div className="bottom-right">
                                <button onClick={this.showModal} className="btn btn-success"><i className="fas fa-plus-circle"></i>
                                </button>
                            </div> */}
                <Modal show={this.state.show}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Contact</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form onSubmit={this.onSubmitContact} className="form-group mt-4">
                            <input onChange={this.onNameChange}
                                name="name" placeholder="enter name"
                                className="form-control mb-3" value={this.state.name} />
                            <input onChange={this.onLastnameChange} value={this.state.lastname} name="lastname" placeholder="enter lastname" className="form-control mb-3" />
                            <input onChange={this.onAgeChange} value={this.state.age} name="age" placeholder="enter age" className="form-control mb-3" />
                            <input onChange={this.onTelephoneChange} value={this.state.telephone} name="telephone" placeholder="enter telephone" className="form-control mb-3" />
                            <input onChange={this.onEmailChange} value={this.state.email} name="email" placeholder="enter email" className="form-control" />
                            
                            <div className="bottom-right">
                                {/* <button type="submit" className="btn btn-success"><i className="fas fa-plus-circle"></i>
                                </button> */}
                            </div>
                        </form>

                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.showModal} variant="secondary">Close</Button>
                        <Button type="submit"  variant="primary">Save changes</Button>
                        <button type="submit" className="btn btn-success"><i className="fas fa-plus-circle"></i>
                                </button>
                    </Modal.Footer>
                </Modal>



            </>

        );

    }

}


// /* tslint:disable:no-unused-variable */
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { DebugElement } from '@angular/core';

// import { EditItemComponent } from './EditItem.component';

// describe('EditItemComponent', () => {
//   let component: EditItemComponent;
//   let fixture: ComponentFixture<EditItemComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ EditItemComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(EditItemComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
