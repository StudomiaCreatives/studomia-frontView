import React from 'react'
import styled from 'styled-components'
import { size } from 'styled-theme'
import PropTypes from 'prop-types'
import {HorizontalRule} from 'components'
import bgLogo from '../../../assets/images/Profile_pictures_fw.png'

import LoginService from "../../../services/LoginService.js";


const Wrapper = styled.div`

#Log_into_your__Studomia_accoun {
	left: 284px;
	top: 150px;
	position: absolute;
	overflow: visible;
	width: 367px;
	white-space: nowrap;
	line-height: 60px;
	margin-top: -11px;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: normal;
	font-size: 38px;
	color: rgba(43,50,243,1);
	letter-spacing: 0.18px;
	text-transform: capitalize;
}



#Group_189 {
	position: absolute;
	width: 561px;
	height: 378px;
	left: 180px;
	top: 280px;
	overflow: visible;
}

#Group_182 {
	position: absolute;
	width: 560px;
	height: 80px;
	left: 1px;
	top: 219px;
	overflow: visible;
}
#Rectangle_434_du {
	filter: blur(0px);
	fill: rgba(43,243,136,1);
	stroke: rgba(112,112,112,0.302);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_434_du {
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	position: absolute;
	overflow: visible;
	width: 578px;
	height: 98px;
	left: 0px;
	top: 0px;
}

#Access_my_Account_ {
	left: 155px;
	top: 24px;
	position: absolute;
	overflow: visible;
	width: 230px;
	white-space: nowrap;
	line-height: 40px;
	margin-top: -8px;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	color: rgba(255,255,255,1);
	letter-spacing: 0.18px;
}
#email_group_dw {
	position: absolute;
	width: 560px;
	height: 70px;
	left: 0px;
	top: 0px;
	overflow: visible;
}

#Rectangle_435_dx {
	opacity: 0.4;
	fill: rgba(255,255,255,1);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_435_dx {
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	position: absolute;
	overflow: visible;
	width: 578px;
	height: 88px;
	left: 0px;
	top: 0px;
}
#Line_306_dy {
	fill: transparent;
	stroke: rgba(112,112,112,1);
	stroke-width: 2px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Line_306_dy {
	display: none;
	overflow: visible;
	position: absolute;
	width: 560px;
	height: 2px;
	left: 0.5px;
	top: 70px;
	transform: matrix(1,0,0,1,0,0);
}
#Email {
	left: 41px;
	top: 22.5px;
	position: absolute;
	overflow: visible;
	width: 48px;
	white-space: nowrap;
	line-height: 40px;
	margin-top: -11px;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	color: rgba(43,50,243,1);
	letter-spacing: 0.18px;
}

#Icon_material-mail_d {
	opacity: 0.2;
	fill: rgba(0,0,0,1);
}
.Icon_material-mail_d {
	overflow: visible;
	position: absolute;
	width: 20px;
	height: 16px;
	left: 512.25px;
	top: 27px;
	transform: matrix(1,0,0,1,0,0);
}
#Sign_-_up {
	left: 237px;
	top: 354px;
	position: absolute;
	overflow: visible;
	width: 82px;
	white-space: nowrap;
	--web-animation: fadein 0.3s ease-out;
	--web-action-type: page;
	--web-action-target: New_Create_An_Account.html;
	cursor: pointer;
	line-height: 60px;
	margin-top: -21px;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	color: rgba(43,50,243,1);
	letter-spacing: 0.18px;
	text-decoration: underline;
}

#Dont_have_an_account_ {
	opacity: 0.3;
	left: 168px;
	top: 319px;
	position: absolute;
	overflow: visible;
	width: 199px;
	white-space: nowrap;
	line-height: 60px;
	margin-top: -21px;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	color: rgba(43,50,243,1);
	letter-spacing: 0.18px;
}


#Johndoexyzcom {
	opacity: 0.2;
	left: 230px;
	top: 18px;
	position: absolute;
	overflow: visible;
	width: 205px;
	white-space: nowrap;
	line-height: 60px;
	margin-top: -18px;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	color: rgba(43,50,243,1);
	letter-spacing: 0.18px;
}
#Group_184_d {
	position: absolute;
	width: 560px;
	height: 70px;
	left: 0px;
	top: 110px;
	overflow: visible;
}
#Rectangle_440_d {
	opacity: 0.4;
	fill: rgba(255,255,255,1);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_440_d {
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	position: absolute;
	overflow: visible;
	width: 578px;
	height: 88px;
	left: 0px;
	top: 0px;
}
#Password {
	left: 41px;
	top: 23px;
	position: absolute;
	overflow: visible;
	width: 83px;
	white-space: nowrap;
	line-height: 40px;
	margin-top: -11px;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	color: rgba(43,50,243,1);
	letter-spacing: 0.18px;
}
#Icon_map-locksmith_d {
	opacity: 0.2;
	fill: rgba(0,0,0,1);
}
.Icon_map-locksmith_d {
	overflow: visible;
	position: absolute;
	width: 20px;
	height: 24px;
	left: 510.5px;
	top: 23px;
	transform: matrix(1,0,0,1,0,0);
}
#Johndoexyzcom_d {
	opacity: 0.2;
	left: 230px;
	top: 128px;
	position: absolute;
	overflow: visible;
	width: 205px;
	white-space: nowrap;
	line-height: 60px;
	margin-top: -18px;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	color: rgba(43,50,243,1);
	letter-spacing: 0.18px;
}



#Group_193 {
	position: absolute;
	width: 560px;
	height: 118px;
	left: 740px;
	top: 300px;
	overflow: visible;
}
#Group_190 {
	position: absolute;
	width: 260px;
	height: 70px;
	left: 300px;
	top: 48px;
	overflow: visible;
}
#Rectangle_433 {
	fill: rgba(243,169,43,1);
}
.Rectangle_433 {
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	position: absolute;
	overflow: visible;
	width: 278px;
	height: 88px;
	left: 0px;
	top: 0px;
}
#Icon_awesome-google {
	fill: rgba(255,255,255,1);
}
.Icon_awesome-google {
	overflow: visible;
	position: absolute;
	width: 34.313px;
	height: 34.875px;
	left: 108px;
	top: 17.563px;
	transform: matrix(1,0,0,1,0,0);
	z-index :1;
	cursor:pointer;
}
#Group_191 {
	position: absolute;
	width: 260px;
	height: 70px;
	left: 0px;
	top: 48px;
	overflow: visible;
}
#Rectangle_433_ef {
	fill: rgba(43,50,243,1);
}
.Rectangle_433_ef {
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	position: absolute;
	overflow: visible;
	width: 278px;
	height: 88px;
	left: 0px;
	top: 0px;
	
}
#Icon_simple-facebook {
	fill: rgba(255,255,255,1);
}
.Icon_simple-facebook {
	overflow: visible;
	position: absolute;
	width: 38px;
	height: 37.77px;
	left: 106px;
	top: 16px;
	transform: matrix(1,0,0,1,0,0);
	z-index :1;
	cursor:pointer;
}
#Sign-in_with_social {
	left: 191px;
	top: 0px;
	position: absolute;
	overflow: visible;
	width: 169px;
	white-space: nowrap;
	line-height: 60px;
	margin-top: -21px;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	color: rgba(43,50,243,1);
	letter-spacing: 0.18px;
	text-transform: capitalize;
}


#Profile_pictures_dq {
	opacity: 0.69;
	position: absolute;
	width: 719.822px;
	height: 540px;
	left: 800px;
	top: 350px;
	overflow: visible;
}

.form-control:focus{
      border:0px solid rgba(43,50,243,1)
}

button :focus {
	 border:0px solid rgba(0,0,0,1)
}
`
class LoginContent extends React.Component
{
    constructor(props){

		  super(props);

		  this.state = { 
                         email:'',
						 password:'',
					
		             }
	}

	handleSubmit(e){
                   event.preventDefault();					
					// if (!Number(age)) {
					// alert("Your age must be a number");
					// }
					//send to service to post to backend
					
					// Create a linked variable / instance of the class
					//StudentService MyClass = new StudentService();

					// Check if class works
					const data = {
										username: this.state.email,
										password: this.state.password
								 };

					// alert(data.username);

					// alert(data.password);

					LoginService.login(data)
					                    .then(
						
												response => {
													console.log(response.data);
												    window.location.href = "http://localhost:3003/profile";
												}
					                       )
										.catch(error => {
							                     console.log(error);
							             });
					
					
	}

	handleChange(event){
          let nam = event.target.name;
		   let val = event.target.value;

		   

		   this.setState({[nam]: val});
	}

 	render(){

          return(
              <Wrapper > 

                        <div id="Log_into_your__Studomia_accoun">
                            <span>Log into your <br/>Studomia account.</span>
                        </div>



                        <div id="Group_189" className="container">


						                  	<div className="row omb_row-m-offset-3">
														<div className="col-xs-12 col-sm-12">
															<form className="omb_loginForm" action="" autocomplete="off" method="POST" width="500px" onSubmit={(e)=>this.handleSubmit(e)}>
																<div className="input-group" style={{width: '500px'}}>
																	<span className="input-group-addon" style={{borderRadius:'20px 0px 0px 20px'}}><i className="fa fa-user fa-2x"></i></span>
																	<input type="text" className="form-control"   placeholder="email address"  style={{borderRadius:'0px 20px 20px 0px',height:'80px',fontSize:'20px'}} name="email" onChange={(e)=>this.handleChange(e)}/>
																</div>
																<span className="help-block" style={{height:'30px',width:'500px'}} ></span>

																<div className="input-group" style={{width: '500px'}}>
																	<span className="input-group-addon" style={{borderRadius:'20px 0px 0px 20px'}} ><i className="fa fa-lock fa-2x"></i></span>
																	<input  type="password" className="form-control"  placeholder="Password" style={{borderRadius:'0px 20px 20px 0px',height:'80px',fontSize:'20px'}} name="password" onChange={(e)=>this.handleChange(e)}/>
																</div>

											                    <span className="help-block" style={{height:'30px',width:'500px'}} ></span>

																<button className="btn btn-lg btn-primary btn-block" type="submit" style={{borderRadius:'20px',height:'80px',backgroundColor:'rgba(43,243,136,1)',border:'0px',width:'500px'}}>Access my Account</button>
															</form>
														</div>
											 </div>

                                              {/* the remember me feature */}
											 {/* <div class="row omb_row-sm-offset-3">
														<div class="col-xs-12 col-sm-3">
															<label class="checkbox">
																<input type="checkbox" value="remember-me">Remember Me
															</label>
														</div>
														<div class="col-xs-12 col-sm-3">
															<p class="omb_forgotPwd">
																<a href="#">Forgot password?</a>
															</p>
														</div>
											  </div> */}
																															
										{/* 
										<div id="Group_182">
                                            <svg class="Rectangle_434_du">
                                                <rect id="Rectangle_434_du" rx="20" ry="20" x="0" y="0" width="560" height="80">
                                                </rect>
                                            </svg>
                                            <div id="Access_my_Account_">
                                                <span>Access my Account </span>
                                            </div>
                                        </div>

                                        
										<div id="email_group_dw">
                                            <svg class="Rectangle_435_dx">
                                                <rect id="Rectangle_435_dx" rx="20" ry="20" x="0" y="0" width="560" height="70">
                                                </rect>
                                            </svg>
                                            <svg class="Line_306_dy" viewBox="0 0 560 2">
                                                <path id="Line_306_dy" d="M 0 0 L 560 0">
                                                </path>
                                            </svg>
                                            <div id="Email">
                                                <span>Email</span>
                                            </div>
                                            <svg class="Icon_material-mail_d" viewBox="3 6 20 16">
                                                <path id="Icon_material-mail_d" d="M 21 6 L 5 6 C 3.900000095367432 6 3.010000228881836 6.900000095367432 3.010000228881836 8 L 3 20 C 3 21.10000038146973 3.900000095367432 22 5 22 L 21 22 C 22.10000038146973 22 23 21.10000038146973 23 20 L 23 8 C 23 6.900000095367432 22.10000038146973 6 21 6 Z M 21 10 L 13 15 L 5 10 L 5 8 L 13 13 L 21 8 L 21 10 Z">
                                                </path>
                                            </svg>
                                        </div>



                                        <div onclick="application.goToTargetView(event)" id="Sign_-_up">
                                            <span>Sign - up</span>
                                        </div>
                                        <div id="Dont_have_an_account_">
                                            <span>Don't have an account ?</span>
                                        </div>
                                        <div id="Johndoexyzcom">
                                            <span>Johndoe@xyz.com</span>
                                        </div>
                                        <div id="Group_184_d">
                                            <svg class="Rectangle_440_d">
                                                <rect id="Rectangle_440_d" rx="20" ry="20" x="0" y="0" width="560" height="70">
                                                </rect>
                                            </svg>
                                            <div id="Password">
                                                <span>Password</span>
                                            </div>
                                            <svg class="Icon_map-locksmith_d" viewBox="3.6 0.72 20 24">
                                                <path id="Icon_map-locksmith_d" d="M 22.68000221252441 10.72000122070312 L 21.60000419616699 10.72000122070312 L 21.60000419616699 6.404000282287598 C 21.60000419616699 3.565000534057617 18.75200271606445 0.7200000286102295 15.91300201416016 0.7200000286102295 L 11.17250061035156 0.7200000286102295 C 8.335000038146973 0.7200000286102295 5.600000381469727 3.565000534057617 5.600000381469727 6.404000282287598 L 5.600000381469727 10.72000122070312 L 4.40500020980835 10.72000122070312 C 4.066500186920166 10.72000122070312 3.599999904632568 11.25100135803223 3.599999904632568 11.5500020980835 L 3.599999904632568 24.27900123596191 C 3.599999904632568 24.5780029296875 4.066500186920166 24.72000122070312 4.40500020980835 24.72000122070312 L 22.68000221252441 24.72000122070312 C 23.01950263977051 24.72000122070312 23.60000228881836 24.5780029296875 23.60000228881836 24.27900123596191 L 23.60000228881836 11.5500020980835 C 23.60000228881836 11.25100231170654 23.01950073242188 10.72000217437744 22.68000221252441 10.72000217437744 Z M 15.95650196075439 22.72000312805176 L 11.13100051879883 22.72000312805176 L 12.14350128173828 17.73650360107422 C 11.53150081634521 17.30300331115723 11.13100051879883 16.48600387573242 11.13100051879883 15.68400382995605 C 11.13100051879883 14.36250305175781 12.211501121521 13.23700332641602 13.54350090026855 13.23700332641602 C 14.87550067901611 13.23700332641602 15.95650196075439 14.28150367736816 15.95650196075439 15.60200309753418 C 15.95650196075439 16.40450286865234 15.55600166320801 17.31650161743164 14.94500160217285 17.75050163269043 L 15.95650196075439 22.72000312805176 Z M 18.10000228881836 10.72000122070312 L 9.100000381469727 10.72000122070312 L 9.100000381469727 6.404000282287598 C 9.100000381469727 5.115000247955322 9.946500778198242 4.220000267028809 11.22050094604492 4.220000267028809 L 15.8650016784668 4.220000267028809 C 17.13900375366211 4.220000267028809 18.10000228881836 5.115000247955322 18.10000228881836 6.404000282287598 L 18.10000228881836 10.72000122070312 Z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div id="Johndoexyzcom_d">
                                            <span>Johndoe@xyz.com</span>
                                        </div> */}
                        </div>


                             



                                <div id="Group_193">
                                        <div id="Group_190">
                                            {/* <svg class="Rectangle_433">
                                                <rect id="Rectangle_433" rx="20" ry="20" x="0" y="0" width="260" height="70">
                                                </rect>
                                            </svg> */}
											
											<a href="http://localhost:8080/oauth2/authorize/google" className="btn btn-lg btn-primary btn-block Rectangle_433" style={{borderRadius:'20px',height:'70px',backgroundColor:'rgba(243,169,43,1)',border:'0px',width:'260px',cursor:'pointer',zIndex :'1'}}>
													<i className="fa fa-google-plus fa-2x"  style={{paddingTop:'10px'}}></i>
											</a>
											{/* <button className="btn btn-lg btn-primary btn-block Rectangle_433" type="button" style={{borderRadius:'20px',height:'70px',backgroundColor:'rgba(243,169,43,1)',border:'0px',width:'260px',cursor:'pointer',zIndex :'1'}}></button>
                                            <svg className="Icon_awesome-google" viewBox="0 0.563 34.313 34.875">
                                                <path id="Icon_awesome-google" d="M 34.3125 18.40781211853027 C 34.3125 28.35703086853027 27.49921798706055 35.4375 17.4375 35.4375 C 7.790625095367432 35.4375 0 27.64687538146973 0 18 C 0 8.353124618530273 7.790625095367432 0.5625 17.4375 0.5625 C 22.13437461853027 0.5625 26.0859375 2.28515625 29.13046836853027 5.125781059265137 L 24.38437461853027 9.689062118530273 C 18.17578125 3.698437452316284 6.630468845367432 8.198437690734863 6.630468845367432 18 C 6.630468845367432 24.08203125 11.48906326293945 29.01093673706055 17.4375 29.01093673706055 C 24.34218788146973 29.01093673706055 26.9296875 24.06093597412109 27.33749961853027 21.49452972412109 L 17.4375 21.49452972412109 L 17.4375 15.49687385559082 L 34.03828048706055 15.49687385559082 C 34.20000076293945 16.38984298706055 34.3125 17.24765586853027 34.3125 18.40781211853027 Z">
                                                </path>
                                            </svg> */}
                                        </div>
										{/* <button className="btn btn-lg btn-primary btn-block Rectangle_433" type="button" style={{borderRadius:'20px',height:'70px',backgroundColor:'rgba(243,169,43,1)',border:'0px',width:'260px',cursor:'pointer'}}></button> */}
                                        <div id="Group_191">
                                            {/* <svg class="Rectangle_433_ef">
                                                <rect id="Rectangle_433_ef" rx="20" ry="20" x="0" y="0" width="260" height="70">
                                                </rect>
                                            </svg> */}
												<a href="http://localhost:8080/oauth2/authorize/facebook" className="btn btn-lg btn-primary btn-block Rectangle_433_ef" style={{borderRadius:'20px',height:'70px',backgroundColor:'rgba(43,50,243,1)',border:'0px',width:'260px',cursor:'pointer',zIndex :'1'}}>
													<i className="fa fa-facebook fa-2x" style={{paddingTop:'10px'}}></i>
												</a>
											{/* <button className="btn btn-lg btn-primary btn-block Rectangle_433_ef" type="submit" style={{borderRadius:'20px',height:'70px',backgroundColor:'rgba(43,50,243,1)',border:'0px',width:'260px',cursor:'pointer',zIndex :'1'}}></button> */}
                                            {/* <svg className="Icon_simple-facebook" viewBox="0 0 38 37.769">
                                                <path id="Icon_simple-facebook" d="M 38 19.00007820129395 C 38 8.506593704223633 29.49350166320801 0 19.00007820129395 0 C 8.506593704223633 0 0 8.506593704223633 0 19.00007820129395 C 0 28.48357200622559 6.948042392730713 36.3438606262207 16.03125381469727 37.76929092407227 L 16.03125381469727 24.49230766296387 L 11.20705604553223 24.49230766296387 L 11.20705604553223 19.00007820129395 L 16.03125381469727 19.00007820129395 L 16.03125381469727 14.81409549713135 C 16.03125381469727 10.05220794677734 18.86786079406738 7.421893119812012 23.20780372619629 7.421893119812012 C 25.28656959533691 7.421893119812012 27.46097373962402 7.792976379394531 27.46097373962402 7.792976379394531 L 27.46097373962402 12.46877193450928 L 25.0652027130127 12.46877193450928 C 22.70489692687988 12.46877193450928 21.96874809265137 13.93337535858154 21.96874809265137 15.43593597412109 L 21.96874809265137 19.00007820129395 L 27.23834037780762 19.00007820129395 L 26.39594078063965 24.49230766296387 L 21.96874809265137 24.49230766296387 L 21.96874809265137 37.76929092407227 C 31.05209922790527 36.3438606262207 38 28.48357200622559 38 19.00007820129395 Z">
                                                </path>
                                            </svg> */}
                                        </div>
                                        <div id="Sign-in_with_social">
                                            <span>Sign-in with social</span>
                                        </div>
	                            </div>

                                <img id="Profile_pictures_dq" src={bgLogo} />
        </Wrapper>
       )
}

}

LoginContent.propTypes = {
  header: PropTypes.node.isRequired
}
export default LoginContent;