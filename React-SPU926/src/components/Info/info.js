import React from 'react';
import './info.css'
import { Button, Card, ListGroup, ListGroupItem, Col, Image } from 'react-bootstrap';

const Info = ({ name }) => {
  let path = `https://robohash.org/${name}?set=set4`

  return (
    <>
      {/* <div>Description of the ad</div> */}
      {/* <img src={path} alt="" /> */}
      <Col xs={2} md={2}>
        <Image className="border border-warning img-20vh align-items-center mt-2" src={path} roundedCircle />
      </Col>
    </>
  );
};

export default Info;