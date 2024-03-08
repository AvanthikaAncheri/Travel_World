import React, { useState } from 'react';
import './booking.css';
import { FaStar } from "react-icons/fa6";
import { Button, Form, FormGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { BASE_URL } from '../../assets/config';

const Booking = ({tour, avgRating}) => {
 
    const {price, title} = tour;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const [booking, setBooking] = useState({
      userId: user && user.id,
      userEmail: user && user.email,
      tourName:title,
      fullName: '',
      phone: '',
      guestSize: 1,
      bookAt: '',
    });

    const style = {color : "#faa935", fontSize:"1.2rem"};

    const handleName = e => {
      setBooking(prev => ({
        ...prev,
        [e.target.id]: e.target.value
      }));
    };
    
    const serviceFee = 10;
    const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee);

    const handleClick = async (e) => {
      e.preventDefault();

      const res = await fetch(`${BASE_URL}/booking`, {
          method:'post',
          headers:{
            'Accept': 'application/json',
             'Content-Type': 'application/json'
          },
          credentials:'include',
          body:JSON.stringify(booking)
      });

      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }

       navigate("/thank-you");
    };

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
          <h3>${price}<span> /per person</span></h3>
          <span className='tour__rating d-flex align-items-center'>
            <FaStar style={style} />{avgRating === 0 ? null : avgRating}
          </span>
      </div>

      <div className="booking_form">
          <h5>Information</h5>
          <Form className='booking__info-form' onSubmit={handleClick}>
              <FormGroup>
                <input type="text" placeholder="Full Name" id="fullName" required onChange={handleName} />
              </FormGroup>
              <FormGroup>
                  <input type="number" placeholder='Phone' id='phone' required onChange={handleName} />
              </FormGroup>
              <FormGroup className="d-flex align-items-center gap-3">
                  <input type="date" placeholder=' ' id='bookAt' required onChange={handleName} />
                  <input type="number" placeholder='No. of people' id='guestSize' required onChange={handleName} />
              </FormGroup>
          </Form>
      </div>

      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className='border-0 px-0 booking_list'>
               <h5 className='d-flex align-items-center gap-1'>${price} <FaStar style={style} />1 person</h5>
               <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className='border-0 px-0 booking_list'>
               <h5>Service charge</h5>
               <span>${serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className='border-0 px-0 booking_list total'>
               <h5>Total:</h5>
               <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>

        <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
      </div>
    </div>
  );
};

export default Booking;
