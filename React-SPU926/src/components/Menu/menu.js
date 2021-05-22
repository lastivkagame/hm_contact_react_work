import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Nav } from 'react-bootstrap';

const Menu = () => {
  return (
<>
<Nav className="mr-auto">
     {/* <ul> */}
      {/* <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar> */}

<Nav.Link href="/">Home</Nav.Link>
<Nav.Link href="/add/">Add user</Nav.Link>
<Nav.Link href="/about/">About us </Nav.Link>
{/*       

      <li>
        {" "}
        <Link to="/">Home</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/add/">Add user </Link>
      </li>
      <li>
        {" "}
        <Link to="/about/">About us </Link>
      </li> */}
    {/* </ul> */}
    </Nav>
    </>
  );
};

export default Menu;
