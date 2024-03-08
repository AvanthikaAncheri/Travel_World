import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, FormGroup, Row } from 'react-bootstrap';
import '../Styles/login.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../assets/config';

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: ''
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e => {
    setCredentials(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });

      const result = await res.json();
      
      if (!res.ok) {
        throw new Error(result.message);
      }

      dispatch({ type: 'REGISTER_SUCCESS' });
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login_container d-flex justify-content-between">
              <div className="login_img">
                <img src="/images/register.png" alt=""/>
              </div>
              <div className="login_form">
                <div className="user">
                  <img src="/images/user.png" alt="" />
                </div>
                <h2>Register</h2>

                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <input type="text" placeholder='Full name' required id='username' onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="email" placeholder='explore@gmail.com' required id='email' onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='xxxx' required id='password' onChange={handleChange} />
                  </FormGroup>
                  <Button className='btn secondary__btn auth__btn' type='submit'>Create Account</Button>
                </Form>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
