import React from 'react'
import './footer.css'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import logo from '../Header/logo.png';
import { Link } from 'react-router-dom';
import { RiFacebookCircleLine, RiInstagramLine, RiMailSendLine, RiMapPinLine, RiTwitterXLine, RiYoutubeLine } from "react-icons/ri";
import {FaPhoneAlt} from 'react-icons/fa'

const Footer = () => {

  const quick__links =[
    {
      path: '/home',
      display: 'Home',
    },
    {
      path: '/about',
      display: 'About',
    },
    {
      path: '/tours',
      display: 'Tours',
    },
  ]

  const quick__links2 =[
    {
      path: '/gallery',
      display: 'Gallery',
    },
    {
      path: '/login',
      display: 'Login',
    },
    {
      path: '/register',
      display: 'Register',
    },
  ]

  const style = {color : "#faa935", fontSize:"1.2rem"};

  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='4'> 
          <div className="logo">
              <img src={logo} alt="" />
              <p>Travelling to new countries gives life a wonderful experience and helps teach a person about the cultures and traditions of that country</p>

              <div className="social_links">
                <span>
                  <Link to='#' className='link'><RiYoutubeLine/></Link>
                </span>
                <span>
                  <Link to='#' className='link1'><RiInstagramLine /></Link>
                </span>
                <span>
                  <Link to='#' className='link1'><RiTwitterXLine /></Link>
                </span>
                <span>
                  <Link to='#' className='link'><RiFacebookCircleLine /></Link>
                </span>
              </div>
            </div>
        </Col>
        <Col lg='2'>
          <h5 className="footer_link">Discover</h5>

          <ListGroup className='footer-links1'>
             {
              quick__links.map((item,index)=>(
                <ListGroupItem key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
             }
          </ListGroup>
        </Col>
        <Col lg='2'>
        <h5 className="footer_link">Quick Links</h5>

<ListGroup className='footer-links1'>
   {
    quick__links2.map((item,index)=>(
      <ListGroupItem key={index}>
        <Link to={item.path}>{item.display}</Link>
      </ListGroupItem>
    ))
   }
</ListGroup>
        </Col>
        <Col lg='4'>
        <h5 className="footer_link">Contact Us</h5>

<ListGroup className='footer-links1'>
   <ListGroupItem className='listgroup'>
    <h6 className='list-h6'>
    <RiMapPinLine style={style}/> Address :
    </h6>
    <p>
      Calicut, Kerala, India
    </p>
   </ListGroupItem>
   <ListGroupItem className='listgroup'>
    <h6 className='list-h6'>
    <RiMailSendLine style={style}/> Email :
    </h6>
    <p>
      akira@gmail.com
    </p>
   </ListGroupItem>
   <ListGroupItem className='listgroup'>
    <h6 className='list-h6'>
    <FaPhoneAlt style={style}/> Phone :
    </h6>
    <p>
      +91 7902623278
    </p>
   </ListGroupItem>
</ListGroup>
        </Col>
      </Row>
      <Row className='row-copyright'>
      <Col className='copyright'>
        <p className="copyright-para">
          Copyright 2024 @ Design and developed by Avanthika A
        </p>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer