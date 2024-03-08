import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { BASE_URL } from '../../assets/config'
import useFetch from '../../hooks/useFetch'
import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'

const UserAdmin = () => {
  const { user } = useContext(AuthContext)
  const { data: booking, loading, error } = useFetch(`${BASE_URL}/booking`)

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !booking) {
    return <p>Error: Failed to fetch booking details!</p>;
  }

  const { tourName, fullName, phone, guestSize } = booking || {};

  return (
    <>
      <div className='main'>
        <h1 className='Heading'>BOOKING DETAILS</h1>
        <div className='card'>
          <Card style={{ width: '18rem' }} className='card-inner'>
            <Card.Body>
              <Card.Title>Tour Name: {tourName}</Card.Title>
              <Card.Text>Full Name: {fullName}</Card.Text>
              <Card.Text>Phone: {phone}</Card.Text>
              <Card.Text>Guest Size: {guestSize}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <Link to="/home"><Button variant="dark">Back to Home</Button></Link>
      </div>
    </>
  )
}

export default UserAdmin
