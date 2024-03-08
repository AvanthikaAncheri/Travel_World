import React, { useContext, useEffect, useRef, useState } from 'react';
import tours from '../assets/Data/Tours';
import { useParams } from 'react-router-dom';
import { Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import { FaStar } from "react-icons/fa6";
import calculateAvgRating from '../assets/avgRating';
import { RiMapPinLine } from "react-icons/ri";
import { MdLocationCity } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import { GiPathDistance } from "react-icons/gi";
import Booking from '../components/Booking/Booking';
import Newsletter from '../Shared/Newsletter';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../assets/config';
import '../Styles/tour-details.css'
import { AuthContext } from '../context/AuthContext';



const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);
  const {user} = useContext(AuthContext)

  const {data:tour, loading, error} = useFetch(`${BASE_URL}/tours/${id}`)

    useEffect(()=>{
    window.scrollTo(0,0)
  },[tour])

  // Check if tour is undefined, handle accordingly
  if (!tour) {
    return <p>Tour not found!</p>;
  }

  // Destructuring objects
  const { title, photo, reviews, city, price, maxGroupSize, address, desc, distance } = tour;

  const style = { color: "#faa935", fontSize: "1.2rem" };
  const style1 = { color: "#0b2727", fontSize: "1.1rem" };
  const style2 = { color: "#faa935", fontSize: "1.1rem", marginLeft: ".5rem" };

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  const submitHandler = async e => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
    // alert(`${reviewText},${tourRating}`);

    if(!user || user === undefined || user === null){
      alert('Please sign in')
    }

    try {

      if(!user || user === undefined || user === null){
        alert('Please sign in')
      }

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating:tourRating
      }

      const res = await fetch(`${BASE_URL}/review/${id}`,{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        credentials:'include',
        body:JSON.stringify(reviewObj)
      })

      const result =  await res.json()
      if(!res.ok) {
        return alert(result.message)
      }
      alert(result.message)
    } catch (error) {
      alert(error.message)
    }
  };



  return (
    <>
      <section>
        <Container>
        {
          loading && <h4 className='text-center pt-4'>Loading...</h4>
        }
        {
          error && <h4 className='text-center pt-4'>{error}</h4>
        }
          {
            !loading && !error && <Row>
            <Col lg='8'>
              <div className="tour_content">
                <img src={photo} alt="" />

                <div className="tour_info">
                  <h2>{title}</h2>
                  <div className="tour_rating">
                    <span className='tour__rating'>
                      <FaStar style={style} />{avgRating === 0 ? null : avgRating} {totalRating === 0 ? ("Not Rated") : (<span>({reviews.length})</span>)}
                    </span>
                    <span><RiMapPinLine style={style1} />  {address}</span>
                  </div>
                  <div className="tour_extra_details">
                    <span><MdLocationCity style={style1} />  {city}</span>
                    <span><FaDollarSign style={style1} />  {price} /person</span>
                    <span><GiPathDistance style={style1} />  {distance} k/m</span>
                    <span><HiUserGroup style={style1} />  {maxGroupSize} people</span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
                <div className="tour_reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>

                  <Form onSubmit={submitHandler}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      <span onClick={() => setTourRating(1)} style={{ cursor: "pointer" }}> 1 <FaStar style={style} /></span>
                      <span onClick={() => setTourRating(2)} style={{ cursor: "pointer" }}> 2 <FaStar style={style} /></span>
                      <span onClick={() => setTourRating(3)} style={{ cursor: "pointer" }}> 3 <FaStar style={style} /></span>
                      <span onClick={() => setTourRating(4)} style={{ cursor: "pointer" }}> 4 <FaStar style={style} /></span>
                      <span onClick={() => setTourRating(5)} style={{ cursor: "pointer" }}> 5 <FaStar style={style} /></span>
                    </div>

                    <div className="review_input">
                      <input type="text" ref={reviewMsgRef} placeholder='Share your thoughts' required />
                      <button className="btn primary_btn text-white" type='submit'>
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className='user__reviews'>
                    {reviews?.map(review => (
                      <div className="review_item" key={review.id}>
                        <img src="/images/avatar.jpg" alt="" />
                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>{review.username}</h5>
                              <p>{new Date(review.createdAt).toLocaleDateString("en-US", options)}</p>
                            </div>
                            <span className='d-flex align-items-center'>{review.rating} <FaStar style={style2} /></span>
                          </div>
                          <h6>{review.reviewText}</h6>
                          <p>{review.comment}</p>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
              </div>
            </Col>

            <Col lg='4'>
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
          }
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default TourDetails;
