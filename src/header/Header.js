import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import {Grid, Row, Col, Nav, NavItem } from 'react-bootstrap';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Header.css';
import logo from '../img/Overstock_logo.png';


class Header extends Component {
  
  render() {
    return (
      <Grid fluid={true}>
        <Row className="HeaderWrap">
          <Col lg={6} sm={6} >
            <img src={logo} alt="Logo" className="logoImg"/>
          </Col>
          <Col lg={6} sm={6} >
            <Nav className="navList">
              <NavItem eventKey={1} href='/add-product'> Add Product </NavItem>
              <NavItem eventKey={2}  href='/product-list'> Product List </NavItem>
            </Nav>
          </Col>
        </Row>
      </Grid>  
      
    );
  }
}

export default Header;
