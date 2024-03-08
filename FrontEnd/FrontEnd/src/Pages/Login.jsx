import React, { useContext, useState } from 'react'
import './../Styles/login.css'
import { Button, Col, Container, Form, FormGroup, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../assets/config'

const Login = () => {

  const [credentials, setCredentials] = useState({
    email:'',
    password:''
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e => {
    setCredentials(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleclick = async e =>{
    e.preventDefault();

    dispatch({type:'LOGIN_START'})

    try {

      const res = await fetch(`${BASE_URL}/auth/login`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(credentials)
      })

      const result = await res.json()
      if(!res.ok) alert(result.message)

      console.log(result.data)
      
      dispatch({type:'LOGIN_SUCCESS', payload:result.data})
      navigate('/')

    } catch (error) {
      dispatch({type:'LOGIN_FAILURE', payload:error.message})
    }
  }

  return <section>
    <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login_container d-flex justify-content-between">
              <div className="login_img">
                <img src="/images/login.png" alt=""/>
              </div>
              <div className="login_form">
                 <div className="user">
                    <img src="/images/user.png" alt="" />
                  </div>
                  <h2>Login</h2>

                  <Form>
                    <FormGroup>
                      <input type="email" placeholder='explore@gmail.com' required id='email' onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup>
                      <input type="password" placeholder='xxxx' required id='password' onChange={handleChange}/>
                    </FormGroup>
                    <Button className='btn secondary__btn auth__btn' type='submit' onClick={handleclick}>Login</Button>
                  </Form>
                  <p>Don't have an account ?<Link to='/register'>Create</Link></p>
                  <Link to='/admin'>Admin</Link>

              </div>
            </div>
          </Col>
        </Row>
    </Container>
  </section>
}

export default Login