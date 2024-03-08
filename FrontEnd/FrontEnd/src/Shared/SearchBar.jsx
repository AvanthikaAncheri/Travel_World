import React, { useRef } from 'react'
import './searchbar.css'
import {Col,Form,FormGroup} from 'react-bootstrap'
import { RiMapPinLine } from 'react-icons/ri'
import { GiPathDistance } from "react-icons/gi";
import { IoMdPeople } from "react-icons/io";
import {useNavigate} from 'react-router-dom';
import { BASE_URL } from '../assets/config';

const SearchBar = () => {

  const locationRef = useRef('')
  const distanceRef = useRef(0)
  const maxGroupSizeRef = useRef(0)

  const navigate = useNavigate()

  const searchHandler = async() => {

    const location = locationRef.current.value
    const distance = distanceRef.current.value
    const maxGroupSize = maxGroupSizeRef.current.value

    if(location==='' || distance==='' || maxGroupSize===''){
        return alert("All fields are required!")
    }

    const res = await fetch(`${BASE_URL}/tours/search/getbysearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`)

    if(!res.ok) alert('Something went wrong')

    const result = await res.json()

    navigate(`/tour/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, {state: result.data})

  }

  const style = {color : "#faa935", fontSize:"1.2rem"};

  return <Col lg='12'>
     <div className="search__bar">
        <Form className='group1'>
            <FormGroup className='wrap form__group form__group-fast'>
                <span>                   
                    <div>
                        <h6 className="location" style={{gap:"10px",display:"flex"}}>
                        <span id='location'><RiMapPinLine style={style}/></span>
                           <p style={{marginTop:"10px"}}>Location </p>
                        </h6>
                        <input type="text" placeholder='Where are you going'ref={locationRef}/>
                    </div>
                </span>
            </FormGroup>
            <FormGroup className='wrap form__group form__group-fast'>
               <span>                   
                    <div>
                        <h6 className="location" style={{gap:"10px",display:"flex"}}>
                        <span id='location'><GiPathDistance style={style}/></span>
                           <p style={{marginTop:"10px"}}>Distance </p>
                        </h6>
                        <input type="number" placeholder='Distance/km'ref={distanceRef} style={{marginLeft:"5px"}}/>
                    </div>
                </span>
            </FormGroup>
            <FormGroup className='wrap form__group'>
            <span>                   
                    <div>
                        <h6 className="location" style={{gap:"10px",display:"flex"}}>
                        <span id='location'><IoMdPeople style={style}/></span>
                           <p style={{marginTop:"10px"}}>Group </p>
                        </h6>
                        <input type="number" placeholder='0'ref={maxGroupSizeRef} style={{marginLeft:"5px"}}/>
                    </div>
                </span>
            </FormGroup>
            <span className='search__icon' type='submit' onClick={searchHandler}>
                <img src="/images/search-line3.png" alt="" width={"42px"} height={"36px"}/>
            </span>
        </Form>
     </div>
  </Col>
}

export default SearchBar