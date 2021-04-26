import React from 'react'
import styled from 'styled-components'
import logo from '../../../assests/images/logo3.png'
import bg from  '../../../assests/images/classroom.svg'

const Section=styled.section`
     min-height: 100vh;
     width: 100%;
     /* background-image: linear-gradient(rgb(4,9,30,0.7) , rgb(4,9,30,0.7)), url(images/classroom.svg); */
     background-image: url(${bg});
     background-position:center;
     background-size: cover;
     position:relative;
`

const Nav = styled.div`
        display: flex;
        padding: 2% 6%;
        justify-content:space-between;
        align-items: center;

        img{
            width:100px;
            height:100px
        }
`
const Navlinks = styled.div`
   flex:1;
   text-align: right;
   ul li{
          list-style: none;
          display: inline-block;
          padding:8px 12px;
          position:relative;
    }
     .fa{
        display: none;
    }
    a{
        text-decoration:none
    }
`
const TextBox = styled.div`
        width:90%;
        color:#fff;
        position:absolute;
        top: 50%;
        left:50%;
        transform: translate(-50%,-50%);
        text-align: center;
`

const Header = (props) => {
 
                        return (
                     <Section>
                                    <Nav>
                                        <a href="index.html"><img src={logo}/></a>
                                        <Navlinks id="navLinks">
                                            <i class="fa fa-times" onclick="hideMenu()"></i>

                                            <ul>
                                                <li><a href="">HOME</a></li>
                                                <li><a href="">ABOUT</a></li>
                                                <li><a href="">COURSE</a></li>
                                                <li><a href="">BLOG</a></li>
                                                <li><a href="">CONTACT</a></li>     
                                            </ul>
                                        </Navlinks>
                                        {/* <i class="fa fa-bars" onclick="showMenu()"></i> */}
                                    </Nav>

                                    <TextBox >
                                        <h1>World's Biggest university 'STUDOMIA'</h1>
                                        <p>
                                            Studomia learning Apps serves as a connecting bridge between practical learners and skilled expert practitioners.
                                             <br/> We connect learners to certified and vetted experts to facilitating both in-person and virtual learning.
                                        </p>
                                        <a href="" class="hero-btn">Visit us to know more </a>
                                    </TextBox>
                   </Section>
                    
                         )
              }

export default Header