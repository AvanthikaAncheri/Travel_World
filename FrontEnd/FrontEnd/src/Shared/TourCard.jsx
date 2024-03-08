import React from 'react'
import { Card,CardBody } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './tour-card.css'
import { FaStar } from 'react-icons/fa'



const TourCard = ({tour}) => {
  
   const {_id,title,photo,featured,reviews,city,price} = tour 

   console.log(tour.photo);

   const totalRating = reviews?.reduce((acc,item) => acc + item.rating, 0)
   const avgRating = totalRating === 0 ? "" : totalRating === 1 ? totalRating : (totalRating / reviews?.length).toFixed(1);

   const style = {color : "#faa935", fontSize:"1.2rem"};

  return (
    <div className='tour_card'>
        <Card>
            <div className="tour_img">
            <img src={photo} alt="placeholder-img"/>
               {featured && <span>Featured</span>}
            </div>
            <CardBody className='cardbody'>
            <div className="card_body" style={{alignItems:"center",justifyContent:"space-between",display:"flex"}}>
               <span className='tour-location' style={{alignItems:"center",justifyContent:"space-between",display:"flex",gap:"4px"}}><img src="/images/map-line.png" alt="" id='map-line'/>{city}</span>
               <span className='tour-location' style={{alignItems:"center",justifyContent:"space-between",display:"flex",gap:"4px"}}><FaStar style={style}/>{avgRating === 0 ? null : avgRating} {totalRating === 0 ? ("Not Rated") : (<span>({reviews.length})</span>)}</span>               
            </div>
            <h5 className='tour__title'><Link to={`/tours/${_id}`}>{title}</Link></h5>
            <div className="card__bottom">
                <h5>${price}<span> /per person</span></h5>

                <button className="btn booking__btn">
                <Link to={`/tours/${_id}`}>Book Now</Link>
                </button>
            </div>
        </CardBody>
        </Card>
        
    </div>
  )
}

export default TourCard