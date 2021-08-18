import React from 'react'
import styled from 'styled-components'
import logo from '../../../assets/images/new_logo_f.png'
import bg from  '../../../assets/images/image1.svg'
import {HeaderText ,PrimaryNavigation} from 'components'
//import NavLinks from '../../molecules/NavLinks/'
import { Button} from 'components'

const Wrapper=styled.section`
     min-height: 100vh;
   //  width: 100%;
     /* background-image: linear-gradient(rgb(4,9,30,0.7) , rgb(4,9,30,0.7)), url(images/classrom.svg); */
    //  background-image: url(${bg});
    //  background-repeat: no-repeat;
    //  background-position:right;
     background: url(${bg}) #FFFFFF left 35em top -10em no-repeat;
     //background-size: cover;
     //position:relative;
     //border:1px solid #000
`

const Nav = styled.div`
        display: flex;
        padding: 2% 6%;
        justify-content:space-between;
        align-items: center;
        background-color:#fff;
        max-height:50px;

        img{
            padding-top:5px;
           // width:300px;
            //height:500px
        }      
`
const NavLinkWrapper=styled.div`
        flex:1;
        text-align: right;
        .fa{
             display: none;
           }
        a{
              
              padding:0px;
             text-decoration:none
         }
`

const CaptionWrapper = styled.div`
    left: 72px;
	top: 300px;
	position: absolute;
	overflow: visible;
	width: 591px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: bold;
	font-size: 54px;
	color: rgba(81,81,81,1);

`

const Div = styled.div`
     left: 72px;
	top: 484px;
	position: absolute;
	overflow: visible;
	width: 667px;
	height: 173px;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: normal;
	font-size: 26px;
	color: rgba(185,185,185,1);
	text-transform: capitalize;
    
`

const CreateAccount=styled.div`
     padding: 12px 25px;
    // font-family: 'Nunito',sans-serif;
    // font-size: 16px;
    // font-weight: 600;
    color: #fff;
    background: #2A32F2; //#fbaf32;
    border: 2px solid #2A32F2;
    border-radius: 20px;
    transition: .5s;
    width:15%;
    left: 72px;
	top: 684px;
	position: absolute;
    font-family: Segoe UI;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    span {
         cursor:pointer;
    }
    
`
const LoginDiv= styled.div`
    padding: 12px 25px;
    color: #2a32f2;
    border: 2px solid #2A32F2;
    border-radius: 20px;
    transition: .5s;
    width:10%;
    text-align:center;
    
    left: 390px;
	top: 684px;
	position: absolute;
    
    font-family: Segoe UI;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
`
const hideMenu=()=>{

     //  return null;
}


const Header= (props) => {
                  let style1 = {
                    verticalAlign:'super'
                    };
 
                  return (
                                <Wrapper>
                                                <Nav id="navbar">
                                                    <a href="index.html"><img src={logo}/></a> 
                                                     {/* <IconLink to="/" icon="arc" height={100} /> */}
                                                     
                                                    <NavLinkWrapper>
                                                            <i className="fa fa-times" onClick={hideMenu()}></i>
                                                            <PrimaryNavigation reverse/> 
                                                            {/* <i class="fa fa-bars" onclick="showMenu()"></i> */}
                                                    </NavLinkWrapper>
                                            
                                                </Nav>

                                                <CaptionWrapper >
                                                     <div id="ID21St_Century__Personal_Learn">
		                                                 <span>21</span><span style={style1}>St</span><span> Century</span>
                                                         <span style={{fontStyle:'normal',fontWeight:'normal',fontSize:'26px'}}> </span><br/>
                                                         <span style={{fontStyle:'normal',fontWeight:'normal'}}>Personal Learning Guide</span>
	                                                 </div>
                                                </CaptionWrapper> 
                                                <Div>
                                                   <div id="Find_tutors_in_academics_compu">
		                                                    <span>Find tutors in academics, computer, music, 
                                                            <br/>language, art & more. Discover, learn and connect with quality tutors for learners in nursery, primary and secondary education levels. 
                                                            </span>
	                                                 </div>
                                                </Div>

                                                <CreateAccount>
                                                        <div id="Create_an_Account">
                                                            <span>Create an Account</span>
                                                        </div>
                                                        
                                                 </CreateAccount>
                                                
                                                 <LoginDiv>
                                                      <div id="login">
                                                            <span>Log-in</span>
                                                        </div>
                                                 </LoginDiv>
                                             
                                               
                                </Wrapper>
                    
                         )
              }

export default Header