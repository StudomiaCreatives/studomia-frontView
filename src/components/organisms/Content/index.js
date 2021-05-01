import React from 'react'
import styled from 'styled-components'
import { size } from 'styled-theme'
import PropTypes from 'prop-types'


const Wrapper=styled.section`
       display : flex;
       flex-direction:column;
       width:100%;
`

const Course = styled.section`
       flex:1;
`

const Campus = styled.section`
        flex:2;

`

const Testimonial = styled.section`
         flex:3;
`

const Facility = styled.section`
          flex:4;
`

const AboutUs = styled.section`
        flex:5;
`

const ContactUs = styled.section`
          flex:6;
`


const Content = ({course , campus, testimonial, facility ,contactUs , ...props})=>{

        return (
                   <Wrapper>
                          <Course>{course}</Course>

                          <Campus>{campus}</Campus>

                          <Facility>{facility}</Facility>

                          <Testimonial>{testimonial}</Testimonial>

                          <ContactUs> {contactUs}</ContactUs>        
                   </Wrapper>
               

        )
}

export default Content;