import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Card from "./components/Card";
import AddItem from "./components/AddItem/add-item";
import Search from "./components/Search/search";
import Menu from "./components/Menu/menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Info from "./components/Info/";
import { Navbar, Nav, Form } from 'react-bootstrap';

let Id = 10000;

export default class App extends Component {
  state = {
    selected: false,
    query: "",
    data: [
      {
        id: 1,
        name: "Ivan",
        lastname: "VBN",
        email: "ivan@gmail.com",
        age: 18,
        favourite: true,
        social: {
          fb: "https://fb.com/#",
          insta: "https://instagram.com",
        },
      },
      {
        id: 2,
        name: "Ivanka",
        lastname: "VBH",
        email: "ivan@gmail.com",
        age: 20,
        favourite: false,
        social: {
          insta: "https://instagram.com",
        },
      },
      {
        id: 3,
        name: "Ivanko",
        lastname: "KLL",
        email: "ivan@gmail.com",
        age: 23,
        favourite: false,
        social: {
          fb: "https://fb.com/#",
        },
      },
    ],
  };

  onDelete = (id) => {
    let index = this.findElementByIndex(id);

    this.setState(({ data }) => {
      return {
        data: [...data.slice(0, index), ...data.slice(index + 1)],
      };
    });
  };

  onAdd = (item) => {
    let newEl = {
      id: Id++,
      name: item.name,
      age: item.age,
      favourite: true,
      social: {
        fb: "https://fb.com/#",
        insta: "https://instagram.com",
      },
    };

    this.setState(({ data }) => {
      return {
        data: [...data, newEl],
      };
    });
  };

  findElementByIndex = (id) => {
    return this.state.data.findIndex((x) => x.id == id);
  };

  onFavouriteChange = (id) => {
    var index = this.findElementByIndex(id);
    this.setState(({ data }) => {
      let newEl = data[index];
      newEl.favourite = !newEl.favourite;

      let before = data.slice(0, index);
      let after = data.slice(index + 1);

      return {
        data: [...before, newEl, ...after],
      };
    });
  };

  onFilter = () => {
    let users = this.state.data;
    if (this.state.query === "") {
      return this.getUsers(users);
    }

    return this.getUsers(
      users.filter((x) => {
        //const query2 = this.state.search.toLowerCase();

        return (
          x.name.toLowerCase().includes(this.state.query.toLowerCase()) ||
          x.lastname.toLowerCase().includes(this.state.query.toLowerCase())
          );
      })
    );
  };

  onQueryChanged = (newQuery) => {
    this.setState({
      query: newQuery,
    });
  };

  getUsers = (data) => {
    return data.map((el) => {
      return (
        <Card
          onDelete={() => this.onDelete(el.id)}
          onFavouriteChange={() => this.onFavouriteChange(el.id)}
          key={el.id}
          id={el.id}
          name={el.name}
          lastname={el.lastname}
          telephone={el.telephone}
          email={el.email}
          age={el.age}
          favourite={el.favourite}
          social={el.social}
        />
      );
    });
  };

  // <Navbar bg="dark" variant="dark">
  //       <Navbar.Brand href="#home">Navbar</Navbar.Brand>
  //       <Nav className="mr-auto">
  //         <Nav.Link href="#home">Home</Nav.Link>
  //         <Nav.Link href="#features">Features</Nav.Link>
  //         <Nav.Link href="#pricing">Pricing</Nav.Link>
  //       </Nav>
  //       <Form inline>
  //         <FormControl type="text" placeholder="Search" className="mr-sm-2" />
  //         <Button variant="outline-info">Search</Button>
  //       </Form>
  //     </Navbar>

  render() {
    return (
      <>
        <Router>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Menu />
            </Nav>
            <Form inline>
              <Search onSearch={this.onQueryChanged} />
              {/* <div className="row">{this.onFilter()}</div> */}
            </Form>
          </Navbar>
          <Switch>
            <Route
              path="/"
              exact
              render={() => {
                return (
                  <>
                    <div className="container mt-4 justify-content-between">
                      {/* <Search onSearch={this.onQueryChanged} /> */}
                      <div className="row justify-content-between">{this.onFilter()}</div>
                    </div>
                  </>
                );
              }}
            />

            <Route path="/add/" exact component={AddItem} />
            <Route
              exact
              path="/about/"
              render={() => <h1>About us: tel: 9379992</h1>}
            />
            <Route
              path="/about/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <Info name={id} />;
              }}
            />

            <Route render={() => <h1>Nothing was found</h1>} />
          </Switch>
        </Router>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
