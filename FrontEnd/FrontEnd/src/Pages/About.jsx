import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Subtitle from '../Shared/Subtitle'
import '../Styles/home.css'
import Newsletter from '../Shared/Newsletter'

const About = () => {

     
  return (
    
    <div>
        <section>
            <Container>
                <Row>
                <Col lg='12'>
                <div className="hero__content wrap1">
              <div className="hero__subtitle group">
                <Subtitle subtitle={'Our Assurance'}/>
                <img src="/images/world.png" alt="" />
              </div>
              <h2>We are the Conqueror...</h2>
              <p className='para'>Travelling is an amazing way to learn a lot of things in life. A lot of people around the world travel every year to many places. Moreover, it is important to travel to humans. Some travel to learn more while some travel to take a break from their life. No matter the reason, travelling opens a big door for us to explore the world beyond our imagination and indulge in many things.</p>
              <h5>Come Join hands with us</h5>
            </div>
          </Col>
                </Row>
            </Container>
        </section>

        <Newsletter/>
    </div>
  )
}

export default About

