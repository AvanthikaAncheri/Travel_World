import React from 'react'
import '../Styles/home.css'
import {Container,Row,Col} from 'react-bootstrap'
import Subtitle from './../Shared/Subtitle'
import SearchBar from '../Shared/SearchBar'

import ServiceList from '../services/ServiceList'
import FeaturedList from '../components/Featured-tour/FeaturedList'
import ImageGallery from '../components/gallery/ImageGallery'
import Newsletter from '../Shared/Newsletter'


const Home = () => {
  return (
    <>

    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content wrap1">
              <div className="hero__subtitle group">
                <Subtitle subtitle={'Know before you go'}/>
                <img src="/images/world.png" alt="" />
              </div>
              <h1>A journey is best in the Quality of <span className="highlight">memories</span></h1>
              <p>Travelling is an amazing way to learn a lot of things in life. A lot of people around the world travel every year to many places. Moreover, it is important to travel to humans. Some travel to learn more while some travel to take a break from their life. No matter the reason, travelling opens a big door for us to explore the world beyond our imagination and indulge in many things.</p>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box">
              <img src="/images/hero-img01.jpg" alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box" id='box1'>
              <video src="/images/hero-video.mp4" alt="" controls/>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box" id='box2'>
              <img src="/images/hero-img02.jpg" alt="" />
            </div>
          </Col>

          
        </Row>
        <Row>
          <Col>
             <SearchBar/>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container className='content1'>
          <Row>
          <Col lg='3' className='module1'>
            <h5 className="service">What we Serve</h5>
            <h2 className="service__offer">We offer our best services</h2>
            </Col>
          </Row> 
          <ServiceList/>               
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg="12" className='mb-5'>
            <Subtitle subtitle={'Explore'}/>
            <h2 className="featured-title">Our Featured Tours</h2>
          </Col>
          
        </Row>
        <Row className='list1'>
        <FeaturedList/>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experiance-content">
              <Subtitle subtitle={'Experiance'}/>
              <h2>With all our experiance<br />we will serve you</h2>
              <p>
              Travelling to new countries gives life a wonderful experience and helps teach a person <br/>about the cultures and traditions of that country
              </p>
            </div>

            <div className="counter_wrapper">
              <div className="counter_box">
                <span>12K+</span>
                <h6>Successful Trip</h6>
              </div>
              <div className="counter_box">
                <span>2K+</span>
                <h6>Regular Clients</h6>
              </div>
              <div className="counter_box">
                <span>15</span>
                <h6>Years Experiance</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experiance_img">
              <img src="/images/experience.png" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col>
          <Subtitle subtitle={'Gallery'}/>
          <h2 className="gallery_title">Visit our delegates tour gallery</h2>
          </Col>
        </Row>
        <Col style={{marginRight:"70px"}}>
          <ImageGallery/>
          </Col>
      </Container>
    </section>

   {/* <section>
    <Container className='wrap2'>
      <Row>
        <Col>
        <Subtitle subtitle={'Fans Love'}/>
        <h2 className="featured-title">What our fans say about us</h2>
        </Col>
        
      </Row>
    </Container>
   </section> */}

   <Newsletter/>
   
    </>
  )
}

export default Home