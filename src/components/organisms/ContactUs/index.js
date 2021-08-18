import React from 'react';
import styled from 'styled-components';
import banner2 from '../../../assets/images/banner2.jpg'


const Wrapper = styled.section`
 #Teach_with_us {
	left: 889px;
	top: 37px;
	position: absolute;
	overflow: visible;
	width: 135px;
	white-space: nowrap;
	text-align: center;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	color: rgba(43,50,243,1);
	text-transform: capitalize;
}
#TEACH_WITH_US {
	left: 124px;
	top: 4477px;
	position: absolute;
	overflow: visible;
	width: 371px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: normal;
	font-size: 48px;
	color: rgba(255,255,255,1);
}

#Rectangle_182 {
	fill: rgba(43,50,243,1);
}
.Rectangle_182 {
	position: absolute;
	overflow: visible;
	width: 1440px;
	height: 394px;
	left: 0px;
	top: 4368px;
}

#Group_149 {
	position: absolute;
	width: 261px;
	height: 83px;
	left: 1052px;
	top: 4526px;
	overflow: visible;
}

#Rectangle_119_ga {
	fill: rgba(255,255,255,1);
	stroke: rgba(255,255,255,1);
	stroke-width: 4px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_119_ga {
	position: absolute;
	overflow: visible;
	width: 261px;
	height: 83px;
	left: 0px;
	top: 0px;
}

#Learn_more {
	left: 64px;
	top: 21px;
	position: absolute;
	overflow: visible;
	width: 131px;
	white-space: nowrap;
	text-align: center;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: normal;
	font-size: 26px;
	color: rgba(81,81,81,1);
}
#Share_your_knowledge_and_skill {
	opacity: 0.4;
	left: 122px;
	top: 4556px;
	position: absolute;
	overflow: visible;
	width: 600px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: normal;
	font-size: 22px;
	color: rgba(255,255,255,1);
}

`
const Wrapper2 = styled.section`
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

                             
                             

                             <svg className="Rectangle_182">
                                <rect id="Rectangle_182" rx="0" ry="0" x="0" y="0" width="1440" height="394">
                                </rect>
                            </svg>

                            <div id="TEACH_WITH_US">
		                            <span>TEACH WITH US</span>
	                         </div>


                             <div id="Group_149">
                                <svg className="Rectangle_119_ga">
                                    <rect id="Rectangle_119_ga" rx="41.5" ry="41.5" x="0" y="0" width="261" height="83">
                                    </rect>
                                </svg>
                                <div id="Learn_more">
                                    <span>Learn more</span>
                                </div>
                            </div>


                            <div id="Share_your_knowledge_and_skill">
                                    <span>Share your knowledge and skill<br/>join us on our mission to train 10 million learners before 2030</span>
                            </div>

                        {/* <h1>Enroll for our various onLine courses <br/>Anywhere from the World</h1>
                        <Button><a href="" > CONTACT US</a></Button> */}
                     </Wrapper>
          )
}

export default ContactUs;