import React from 'react'
import tours from '../../assets/Data/Tours'
import { Col } from 'react-bootstrap'
import TourCard from '../../Shared/TourCard'
import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../assets/config'



const FeaturedList = () => {

  const {data: featuredTours, loading, error} = useFetch(`${BASE_URL}/tours/search/getFeaturedtour`);

  return <>
  {
    loading && <h4>Loading...</h4>
  }
  {
    error && <h4>{error}</h4>
  }
  {
   !loading && !error && featuredTours?.map(tour =>(
      <Col key={tour.id}>
      <TourCard tour={tour}/>
      </Col>
    ))
  }
  </>
}

export default FeaturedList