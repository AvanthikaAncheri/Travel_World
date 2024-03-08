import React, { useEffect, useState } from 'react'
import CommonSection from '../Shared/CommonSection'

import '../Styles/tours.css'
import { Col, Container, Row } from 'react-bootstrap'
import SearchBar from '../Shared/SearchBar'
import tours from '../assets/Data/Tours'
import TourCard from '../Shared/TourCard'
import Newsletter from '../Shared/Newsletter'
import { BASE_URL } from '../assets/config'
import useFetch from '../hooks/useFetch'

const Tours = () => {

  const [pageCount, setPageCount] = useState(0)
  const [page,setPage] = useState(0)

  const {data:toursdata, loading, error} = useFetch(`${BASE_URL}/tours?page=${page}`)
  const {data:tourCount} = useFetch(`${BASE_URL}/tours/search/getTourCount`)

  useEffect(()=>{

    const pages = Math.ceil(tourCount/8)
    setPageCount(pages)
    window.scrollTo(0,0)
  },[page, tourCount,tours])

  return (
    <>
    <CommonSection title={"All Tours"}/>
    <section>
      <Container>
        <Row>
          <SearchBar/>
        </Row>
      </Container>
    </section>
    <section className='pt-0'>
      <Container>
        {
          loading && <h4 className='text-center pt-4'>Loading...</h4>
        }
        {
          error && <h4 className='text-center pt-4'>{error}</h4>
        }
        {
          !loading && !error && <Row>
          {
            toursdata?.map(tour=>
            <Col lg={3} key={tour._id} className='mb-4'>
              <TourCard tour={tour}/>
            </Col>)
          }

          <Col lg="12">
            <div className="pagination">
              {[...Array(pageCount).keys()].map(Number=>(
                <span key={Number} onClick={() => setPage(Number)} 
                className={page===Number?'active_page': " "}
                >
                  {Number + 1}
                </span>
              ))}
            </div>
          </Col>
        </Row>
        }
      </Container>
    </section>
    <Newsletter/>
    </>
  )
}

export default Tours