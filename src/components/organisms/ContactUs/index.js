import React from 'react';
import styled from 'styled-components';
import banner2 from '../../../assets/images/banner2.jpg'

const Wrapper = styled.section`
     margin: 100px auto;
     width:80%;
     background-image: linear-gradient( rgba(0,0,0,0.7) ,rgba(0,0,0,0.7) ),url(${banner2});
     background-position:cover;
     background-size:cover;
     border-radius:10px;
     text-align: center;
     padding:100px 0;


     h1{
        color:#fff;
        margin-bottom:40px;
        padding:0;

    }

`


const Button = styled.div`
           display: inline-block;
        text-decoration: none;
        color:#fff;
        border: 1px solid #fff;
        padding:12px 34px;
        font-size: 13px;
        background:transparent;
        position:relative;
        cursor: pointer;

        :hover{
        border:1p solid #f44336;
        transition:1s;
        background:#f44336;
    }
`

const ContactUs = (props) => {

          return (

                     <Wrapper>
                        <h1>Enroll for our various onLine courses <br/>Anywhere from the World</h1>
                        <Button><a href="" > CONTACT US</a></Button>
                     </Wrapper>
          )
}

export default ContactUs;