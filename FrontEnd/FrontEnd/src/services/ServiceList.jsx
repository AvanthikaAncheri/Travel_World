import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from 'react-bootstrap'

const ServiceData = [
    {
        imgUrl:'/images/weather.png',
        title: "Calculate Weather",
        desc: "Weather can be a major concern for travelers when choosing a destination, preparing their trip and during their stay. "
    },
    {
        imgUrl:'/images/guide.png',
        title: "Best Tour guide",
        desc: "A tour guide must be smart, well-behaved, friendly, hard-working, and helpful. He is a man of learning,and understanding."
    },
    {
        imgUrl:'/images/customization.png',
        title: "Customization",
        desc: "Tourism is the largest and fastest-growing industry across the world. It is a source of revenue and employment. "
    }
    
]

const ServiceList = () => {
  return (
    <>
    {  
         
        ServiceData.map((item,index) =>(
            <Col  key={index}>
                <ServiceCard item={item}/>
            </Col>
        ))
    }
    </>
  )
}

export default ServiceList