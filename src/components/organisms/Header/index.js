import React from 'react'
import styled from 'styled-components'
import logo from '../../../assets/images/logo3.png'
import bg from  '../../../assets/images/music4.svg'
import {HeaderText ,PrimaryNavigation} from 'components'
//import NavLinks from '../../molecules/NavLinks/'

const Wrapper=styled.section`
     min-height: 100vh;
     width: 100%;
     /* background-image: linear-gradient(rgb(4,9,30,0.7) , rgb(4,9,30,0.7)), url(images/classrom.svg); */
     background-image: url(${bg});
     background-position:center;
     background-size: cover;
     position:relative;
     //border:5px solid #000
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
const NavLinkWrapper=styled.div`
        flex:1;
        text-align: right;
        .fa{
             display: none;
           }
        a{
             text-decoration:none
         }
`

const CaptionWrapper = styled.div`
       font-weight:10
`
const hideMenu=()=>{

     //  return null;
}
const Header= (props) => {
 
                  return (
                                <Wrapper>
                                                <Nav>
                                                    <a href="index.html"><img src={logo}/></a>😄
                                                     {/* <IconLink to="/" icon="arc" height={100} /> */}
                                                   
                                                    <NavLinkWrapper>
                                                            <i className="fa fa-times" onClick={hideMenu()}></i>
                                                            <PrimaryNavigation reverse/> 
                                                            {/* <i class="fa fa-bars" onclick="showMenu()"></i> */}
                                                    </NavLinkWrapper>
                                            
                                                </Nav>

                                                {/* <CaptionWrapper >
                                                    <HeaderText/>
                                                </CaptionWrapper> */}

                                               
                                </Wrapper>
                    
                         )
              }

export default Header