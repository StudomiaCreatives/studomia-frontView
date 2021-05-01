import  React from 'react';
import styled from 'styled-components';
import {font, palette } from 'styled-theme'


const Wrapper = styled.section`
         width:96%;
    text-align:center;
    padding:30px ;
    min-height:50vh;
    background-position:center;
    background-size: cover;
    font-family:${font('quote')};
    border-radius: 50px 50px 0px 0px;

  background-color: ${palette('footer', 1, true)};
  padding: 2rem;

    h4{
    color:#fff;
    margin-bottom:25px;
    margin-top:20px;
    font-weight:600px
     }
     p{
         color:#fff;
     } 
     li{ color:#fff; }
`
const Icons=styled.div`

   .fa {
    color:#f44336;
    margin:0 13px;
    cursor:pointer;
    padding:18px 0;
 }
`
const Section=styled.section`
     display:flex;
   //  flex-direction:
     justify-content:center; //space-between;
     ul{
         list-style:none
     }
     li{
         margin:20px
     }
`
const Span=styled.div`
     color:#fff;//f44336
     display:inline;
`

const Footer=(props)=>{
    return (
               <Wrapper>
                        <h4>About Us</h4>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Non perferendis labore, quas ad ipsum corporis odio quam 
                            <br/> praesentium accusantium ex quo iste. At nesciunt aliquam deserunt
                                voluptates iure. Autem, iure.
                            </p> */}
                         <Section>
                            <ul>
                                 <li>
                                      Lorem ipsum dolor sit
                                 </li>
                                 <li>
                                       consectetur adipisicing elit. 
                                 </li>
                                 <li>
                                      Lorem amet consectetur
                                 </li>
                            </ul>
                            <ul>
                                 <li>
                                      Lorem ipsum dolor sit
                                </li>

                                 <li>
                                       consectetur adipisicing elit. 
                                 </li>
                                 <li>
                                      Lorem amet consectetur
                                 </li>
                            </ul>
                            <ul>
                                 <li>
                                      Lorem ipsum dolor sit
                                </li>
                                 <li>
                                       consectetur adipisicing elit. 
                                 </li>
                                 <li>
                                      Lorem amet consectetur
                                 </li>
                            </ul>
                            </Section>
                            <Icons>
                                <i className="fa fa-facebook" ></i>
                                <i className="fa fa-twitter" ></i>
                                <i className="fa fa-instagram" ></i>
                                <i className="fa fa-linkedin" ></i>
                                
                            </Icons>
                            
                            {/*  Made with <i className="fa fa-heart-o"></i> Studomia   */}
                            <p><Span >  <i className="fa fa-copyright" ></i>2021 Copyright: studomia</Span></p>
                             
               </Wrapper>
    )
}
export default Footer;