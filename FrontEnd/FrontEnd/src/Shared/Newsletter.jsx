import React from 'react'
import './newsletter.css'
import { Col, Container, Row } from 'react-bootstrap'

const Newsletter = () => {
  return <section className='newsletter'>
    <Container>
        <Row className='group wrap2'>
            <Col lg='6'>
                <div className="newsletter_content">
                    <h2>Subscribe now to get useful information</h2>
                    <div className="newsletter_input">
                        <input type="email" placeholder='Enter your email'/>
                        <button className="btn newsletter_btn">Subscribe</button>
                    </div>
                    <p>Subscribe to our Voyage and be a part of the journey.</p>
                </div>
            </Col>
            <Col lg='6'>
                <div className="newsletter-img">
                    <img src="/images/male-tourist.png" alt="" />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Newsletter