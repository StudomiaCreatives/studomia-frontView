import React from 'react'
import styled from 'styled-components'
import { size } from 'styled-theme'
import PropTypes from 'prop-types'
import {HorizontalRule} from 'components'
import bgLogo from '../../../assets/images/Profile_pictures_fw.png'

import CardProfile from '../../atoms/profileImageLoader'


const Wrapper = styled.div`

    #create_an_profile {
	position: absolute;
	width: 1920px;
	height: 1080px;
	background-color: rgba(255,255,255,1);
	overflow: hidden;
	--web-view-name: create an profile;
	--web-view-id: create_an_profile;
	--web-scale-on-resize: true;
	--web-enable-deep-linking: true;
    }



    #Group_204 {
	position: absolute;
	width: 234.015px;
	height: 179.999px;
	left: 450.492px;
	top: 355.001px;
	overflow: visible;
}

   #Icon_awesome-user-circle {
	opacity: 0.2;
	fill: rgba(0,0,0,1);
}
.Icon_awesome-user-circle {
	overflow: visible;
	position: absolute;
	width: 179.755px;
	height: 179.755px;
	left: 0px;
	top: 0px;
	transform: matrix(1,0,0,1,0,0);
}
#Icon_awesome-pen {
	opacity: 0.2;
	fill: rgba(0,0,0,1);
}
.Icon_awesome-pen {
	overflow: visible;
	position: absolute;
	width: 55.932px;
	height: 55.928px;
	left: 178.084px;
	top: 124.07px;
	transform: matrix(1,0,0,1,0,0);
}





    #email_group {
	position: absolute;
	width: 560px;
	height: 70px;
	left: 284px;
	top: 588px;
	overflow: visible;
}

    #Rectangle_435 {
	opacity: 0.4;
	fill: rgba(255,255,255,1);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
   }
    .Rectangle_435 {
        filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
        position: absolute;
        overflow: visible;
        width: 578px;
        height: 88px;
        left: 0px;
        top: 0px;
    }

     #Line_306 {
	fill: transparent;
	stroke: rgba(112,112,112,1);
	stroke-width: 2px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Line_306 {
	display: none;
	overflow: visible;
	position: absolute;
	width: 560px;
	height: 2px;
	left: 0.5px;
	top: 70px;
	transform: matrix(1,0,0,1,0,0);
}

    #First_Name {
	left: 41px;
	top: 22.5px;
	position: absolute;
	overflow: visible;
	width: 96px;
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
#Icon_material-mail {
	opacity: 0.2;
	fill: rgba(0,0,0,1);
}
.Icon_material-mail {
	overflow: visible;
	position: absolute;
	width: 20px;
	height: 16px;
	left: 512.25px;
	top: 27px;
	transform: matrix(1,0,0,1,0,0);
}
#John {
	opacity: 0.2;
	left: 542px;
	top: 613px;
	position: absolute;
	overflow: visible;
	width: 52px;
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



   #Group_184 {
	position: absolute;
	width: 560px;
	height: 70px;
	left: 284px;
	top: 698px;
	overflow: visible;
}
#Rectangle_440 {
	opacity: 0.4;
	fill: rgba(255,255,255,1);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_440 {
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	position: absolute;
	overflow: visible;
	width: 578px;
	height: 88px;
	left: 0px;
	top: 0px;
}
#Last_Name {
	left: 41px;
	top: 23px;
	position: absolute;
	overflow: visible;
	width: 93px;
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
#Icon_map-locksmith {
	opacity: 0.2;
	fill: rgba(0,0,0,1);
}
.Icon_map-locksmith {
	overflow: visible;
	position: absolute;
	width: 20px;
	height: 24px;
	left: 510.5px;
	top: 22.999px;
	transform: matrix(1,0,0,1,0,0);
}





#Group_198 {
	position: absolute;
	width: 560px;
	height: 70px;
	left: 284px;
	top: 808px;
	overflow: visible;
}
#Rectangle_440_ci {
	opacity: 0.4;
	fill: rgba(255,255,255,1);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_440_ci {
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	position: absolute;
	overflow: visible;
	width: 578px;
	height: 88px;
	left: 0px;
	top: 0px;
}
#Phone_Number {
	left: 41px;
	top: 23px;
	position: absolute;
	overflow: visible;
	width: 133px;
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
#Icon_map-locksmith_ck {
	opacity: 0.2;
	fill: rgba(0,0,0,1);
}
.Icon_map-locksmith_ck {
	overflow: visible;
	position: absolute;
	width: 20px;
	height: 24px;
	left: 510.5px;
	top: 22.999px;
	transform: matrix(1,0,0,1,0,0);
}



    #Group_203 {
	position: absolute;
	width: 273px;
	height: 70px;
	left: 1360px;
	top: 468px;
	overflow: visible;
}
#Rectangle_440_cm {
	opacity: 0.4;
	fill: rgba(255,255,255,1);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_440_cm {
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	position: absolute;
	overflow: visible;
	width: 291px;
	height: 88px;
	left: 0px;
	top: 0px;
}
#Account_Type {
	left: 41px;
	top: 23px;
	position: absolute;
	overflow: visible;
	width: 120px;
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
#Icon_map-locksmith_co {
	opacity: 0.2;
	fill: rgba(0,0,0,1);
}
.Icon_map-locksmith_co {
	overflow: visible;
	position: absolute;
	width: 20px;
	height: 24px;
	left: 223.5px;
	top: 22.999px;
	transform: matrix(1,0,0,1,0,0);
}


   #Group_201 {
	position: absolute;
	width: 560px;
	height: 70px;
	left: 1073px;
	top: 578px;
	overflow: visible;
}
#Rectangle_440_cq {
	opacity: 0.4;
	fill: rgba(255,255,255,1);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_440_cq {
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	position: absolute;
	overflow: visible;
	width: 578px;
	height: 88px;
	left: 0px;
	top: 0px;
}
#Gender {
	left: 41px;
	top: 23px;
	position: absolute;
	overflow: visible;
	width: 64px;
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
#Icon_map-locksmith_cs {
	opacity: 0.2;
	fill: rgba(0,0,0,1);
}
.Icon_map-locksmith_cs {
	overflow: visible;
	position: absolute;
	width: 20px;
	height: 24px;
	left: 510.5px;
	top: 22.999px;
	transform: matrix(1,0,0,1,0,0);
}

   


   #Group_202 {
	position: absolute;
	width: 560px;
	height: 70px;
	left: 1073px;
	top: 688px;
	overflow: visible;
}
#Rectangle_440_cu {
	opacity: 0.4;
	fill: rgba(255,255,255,1);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_440_cu {
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	position: absolute;
	overflow: visible;
	width: 578px;
	height: 88px;
	left: 0px;
	top: 0px;
}
#Age {
	left: 41px;
	top: 23px;
	position: absolute;
	overflow: visible;
	width: 35px;
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
#Icon_map-locksmith_cw {
	opacity: 0.2;
	fill: rgba(0,0,0,1);
}
.Icon_map-locksmith_cw {
	overflow: visible;
	position: absolute;
	width: 20px;
	height: 24px;
	left: 510.5px;
	top: 22.999px;
	transform: matrix(1,0,0,1,0,0);
}


     #Group_199 {
	position: absolute;
	width: 560px;
	height: 70px;
	left: 1073px;
	top: 358px;
	overflow: visible;
}
#Rectangle_440_cy {
	opacity: 0.4;
	fill: rgba(255,255,255,1);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_440_cy {
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	position: absolute;
	overflow: visible;
	width: 290px;
	height: 88px;
	left: 0px;
	top: 0px;
}
#Rectangle_444 {
	opacity: 0.4;
	fill: rgba(255,255,255,1);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_444 {
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	position: absolute;
	overflow: visible;
	width: 290px;
	height: 88px;
	left: 288px;
	top: 0px;
}
#Street_Address {
	left: 41px;
	top: 23px;
	position: absolute;
	overflow: visible;
	width: 128px;
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
#City {
	left: 322px;
	top: 23px;
	position: absolute;
	overflow: visible;
	width: 35px;
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
#Icon_map-locksmith_c {
	opacity: 0.2;
	fill: rgba(0,0,0,1);
}
.Icon_map-locksmith_c {
	overflow: visible;
	position: absolute;
	width: 20px;
	height: 24px;
	left: 510.5px;
	top: 22.999px;
	transform: matrix(1,0,0,1,0,0);
}

   #Group_200 {
	position: absolute;
	width: 273px;
	height: 70px;
	left: 1073px;
	top: 468px;
	overflow: visible;
}
#Rectangle_440_c {
	opacity: 0.4;
	fill: rgba(255,255,255,1);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_440_c {
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	position: absolute;
	overflow: visible;
	width: 291px;
	height: 88px;
	left: 0px;
	top: 0px;
}
#Zip_Code {
	left: 41px;
	top: 23px;
	position: absolute;
	overflow: visible;
	width: 79px;
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
#Icon_map-locksmith_da {
	opacity: 0.2;
	fill: rgba(0,0,0,1);
}
.Icon_map-locksmith_da {
	overflow: visible;
	position: absolute;
	width: 20px;
	height: 24px;
	left: 223.531px;
	top: 22.999px;
	transform: matrix(1,0,0,1,0,0);
}
#Doe {
	opacity: 0.2;
	left: 542px;
	top: 723px;
	position: absolute;
	overflow: visible;
	width: 45px;
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
#new_logo {
	position: absolute;
	width: 147.667px;
	height: 50px;
	left: 136.334px;
	top: 35px;
	overflow: visible;
}


   #Doe {
	opacity: 0.2;
	left: 542px;
	top: 723px;
	position: absolute;
	overflow: visible;
	width: 45px;
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



    #Group_197 {
	position: absolute;
	width: 560px;
	height: 80px;
	left: 1073px;
	top: 798px;
	overflow: visible;
}
#Rectangle_434 {
	filter: blur(0px);
	fill: rgba(43,243,136,1);
	stroke: rgba(112,112,112,0.302);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_434 {
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	position: absolute;
	overflow: visible;
	width: 578px;
	height: 98px;
	left: 0px;
	top: 0px;
}
#Proceed {
	left: 233px;
	top: 24px;
	position: absolute;
	overflow: visible;
	width: 95px;
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


    #Complete_your_Profile {
	left: 184px;
	top: 150px;
	position: absolute;
	overflow: visible;
	width: 440px;
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
}

.container{
	filter: drop-shadow(10px 10px 30px rgba(0, 0, 0, 0.161));
    position: absolute;
    overflow: visible;
    width: 1330px;
    height: 940px;
    left: 140px;
	border:0px solid #000;
    top: 215px;
}

#Profile_pictures_dq {
	opacity: 0.69;
	position: absolute;
	width: 719.822px;
	height: 540px;
	left: 900px;
	top: 450px;
	overflow: visible;
}

`
class EditProfileContent extends React.Component {
 
				constructor(props) {
								
								super(props);
								
								this.state = {
												file: '',
												imagePreviewUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
												fName:'',
												lName:'',
												phoneNumber:'',
												age:null,
												gender:'',
												zipCode:'',
												accountType:'',
												city:'',
												address:''
												//   active: 'edit'
								};
				}

				photoUpload (e) {
					e.preventDefault();
					const reader = new FileReader();
					const file = e.target.files[0];
					reader.onloadend = () => {
					this.setState({
						file: file,
						imagePreviewUrl: reader.result
					});
					}
					reader.readAsDataURL(file);
				}

				handleOnChange = (event) => {
					let nam = event.target.name;
					let val = event.target.value;
					// if (nam === "age") {
					//   if (!Number(val)) {
					//     alert("Your age must be a number");
					//   }
					// }
					this.setState({[nam]: val});
				}

				handleSubmit = (event) => {
					event.preventDefault();
					let age = this.state.age;
					if (!Number(age)) {
					alert("Your age must be a number");
					}
					//send to service to post to backend
					
					alert(this.state.zipCode);
				}

			   render(){
						return(
								<Wrapper  id="create_an_profile" > 
						
											<div id="Complete_your_Profile">
													<span>Complete your Profile.</span>
											</div>


											

											<div className="container">
											<div className="row omb_row-m-offset-3">
													
															<form className="omb_loginForm" action="" autocomplete="off" method="POST" onSubmit={(e)=>this.handleSubmit(e)}>
																	<div className="col-xs-12 col-sm-12" style={{border:'0px solid #000', width:'1300px'}}>	
																		<div className="col-lg-6 col-md-6 col-xs-6 col-sm-6"  style={{border:'0px solid #000', width:'550px'}}>	

																			<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12" style={{width:'350px',height: '200px'}}>	
																					<div id="Group_20">
																						<CardProfile  imagePreviewUrl={this.state.imagePreviewUrl} photoUpload={(e)=>this.photoUpload(e)}/>
																						{/* <svg className="Icon_awesome-user-circle" viewBox="0 0.563 179.755 179.755">
																							<path id="Icon_awesome-user-circle" d="M 89.87763214111328 0.5625001192092896 C 40.22748947143555 0.5625001192092896 0 40.78999328613281 0 90.44014739990234 C 0 140.0902709960938 40.22748947143555 180.3177642822266 89.87763214111328 180.3177642822266 C 139.5277862548828 180.3177642822266 179.7552642822266 140.0902709960938 179.7552642822266 90.44014739990234 C 179.7552642822266 40.78999328613281 139.5277862548828 0.5625001192092896 89.87763214111328 0.5625001192092896 Z M 89.87763214111328 35.35384750366211 C 107.4907455444336 35.35384750366211 121.7696914672852 49.6328010559082 121.7696914672852 67.24591064453125 C 121.7696914672852 84.85903930664062 107.4907455444336 99.13797760009766 89.87763214111328 99.13797760009766 C 72.2645263671875 99.13797760009766 57.98557281494141 84.85903930664062 57.98557281494141 67.24591064453125 C 57.98557281494141 49.6328010559082 72.2645263671875 35.35384750366211 89.87763214111328 35.35384750366211 Z M 89.87763214111328 160.0228271484375 C 68.60417938232422 160.0228271484375 49.54141998291016 150.3827209472656 36.78459930419922 135.3064727783203 C 43.59789657592773 122.4771499633789 56.9345817565918 113.6343612670898 72.48196411132812 113.6343612670898 C 73.35174560546875 113.6343612670898 74.22152709960938 113.7793426513672 75.05507659912109 114.0330200195312 C 79.76640319824219 115.5551300048828 84.69517517089844 116.5336380004883 89.87763214111328 116.5336380004883 C 95.06009674072266 116.5336380004883 100.0251159667969 115.5551300048828 104.7002029418945 114.0330200195312 C 105.5337448120117 113.7793350219727 106.4035415649414 113.6343612670898 107.2733154296875 113.6343612670898 C 122.8207168579102 113.6343612670898 136.1573791503906 122.4771728515625 142.9706878662109 135.3064727783203 C 130.2138519287109 150.3827209472656 111.1511077880859 160.0228271484375 89.87763214111328 160.0228271484375 Z">
																							</path>
																						</svg>
																						<svg className="Icon_awesome-pen" viewBox="-0.001 0.001 55.931 55.929">
																							<path id="Icon_awesome-pen" d="M 31.76009750366211 10.18500137329102 L 45.74466705322266 24.16957473754883 L 15.37776851654053 54.53647232055664 L 2.909413576126099 55.91286468505859 C 1.240267276763916 56.09747314453125 -0.169987365603447 54.68612670898438 0.01571620441973209 53.01698303222656 L 1.403031229972839 40.53989028930664 L 31.76009941101074 10.18500423431396 Z M 54.39408874511719 8.102936744689941 L 47.82782363891602 1.536678194999695 C 45.77962493896484 -0.5115228295326233 42.45771408081055 -0.5115228295326233 40.40951538085938 1.536678194999695 L 34.23214340209961 7.714051723480225 L 48.21671676635742 21.69862174987793 L 54.39409255981445 15.52124881744385 C 56.44229507446289 13.47195529937744 56.44229507446289 10.15113830566406 54.39409255981445 8.102937698364258 Z">
																							</path>
																						</svg> */}
																					</div>	
																				</div>


																				<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">	
																					<div className="input-group" style={{width: '500px'}}>
																								<span className="input-group-addon" style={{borderRadius:'20px 0px 0px 20px'}}><i className="fa fa-user fa-2x"></i></span>
																								<input type="text" className="form-control"   placeholder="First Name"  style={{borderRadius:'0px 20px 20px 0px',height:'80px',fontSize:'20px'}} name="fName" onChange={(e)=>this.handleOnChange(e) } value={this.state.fName}/>
																					</div>
																				</div>

																				<div className="col-xs-12 col-sm-12">
																						<span className="help-block" style={{height:'30px'}} ></span>
																				</div>

																				<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
																						<div className="input-group" style={{width: '500px'}}>
																									<span className="input-group-addon" style={{borderRadius:'20px 0px 0px 20px'}} ><i className="fa fa-user fa-2x"></i></span>
																									<input  type="text" className="form-control"  placeholder="Last Name" style={{borderRadius:'0px 20px 20px 0px',height:'80px',fontSize:'20px'}} name="lName" onChange={(e)=> this.handleOnChange(e)  }/>
																						</div>
																				</div>

																			<div className="col-xs-12 col-sm-12">
																				<span className="help-block" style={{height:'30px'}} ></span>
																				</div>


																				<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
																					<div className="input-group" style={{width: '500px'}}>
																								<span className="input-group-addon" style={{borderRadius:'20px 0px 0px 20px'}} ><i className="fa fa-mobile fa-2x"></i></span>
																								<input  type="text" className="form-control"  placeholder="Phone Number" style={{borderRadius:'0px 20px 20px 0px',height:'80px',fontSize:'20px'}} name="phoneNumber" onChange={(e)=> this.handleOnChange(e)  }/>
																					</div>
																				</div>

																				
																				{/* <span className="help-block" style={{height:'30px'}} ></span> */}
																			
																					
																		</div>

																		


																		<div className="col-lg-6 col-md-6 col-xs-6 col-sm-6" style={{border:'0px solid #000'}}>

																				
																						<div className="col-xs-12 col-sm-12">
																								<div className="col-xs-6 col-sm-6" style={{padding: '0px',width:'auto',marginRight:'20px'}}>
																										<div className="input-group" style={{width: '220px'}}>
																													<span className="input-group-addon" style={{borderRadius:'20px 0px 0px 20px'}}><i className="fa fa-user fa-2x"></i></span>
																													<input type="text" className="form-control"   placeholder="Age"  style={{borderRadius:'0px 20px 20px 0px',height:'80px',fontSize:'20px'}} name="age" onChange={(e)=> this.handleOnChange(e)  }/>
																										</div>
																								</div>  
																								<div className="col-xs-6 col-sm-6" style={{padding: '0px'}}> 
																										<div className="input-group" style={{width: '220px'}}>
																													<span className="input-group-addon" style={{borderRadius:'20px 0px 0px 20px'}} ><i className="fa fa-user fa-2x"></i></span>
																													<input  type="text" className="form-control"  placeholder="Gender" style={{borderRadius:'0px 20px 20px 0px',height:'80px',fontSize:'20px'}} name="gender" onChange={(e)=>this.handleOnChange(e)  }/>
																										</div>
																									</div>
																						</div>

																															
																	
																						<div className="col-xs-12 col-sm-12">
																						<span className="help-block" style={{height:'30px',width:'500px'}} ></span>
																							</div>

																				
																						<div className="col-xs-12 col-sm-12" style={{padding:'0px'}} >
																									<div className="col-xs-6 col-sm-6" style={{width:'auto'}} >
																										<div className="input-group" style={{width: '220px'}}>
																													<span className="input-group-addon" style={{borderRadius:'20px 0px 0px 20px'}}><i className="fa fa-flag fa-2x"></i></span>
																													<input type="text" className="form-control"   placeholder="Zip Code"  style={{borderRadius:'0px 20px 20px 0px',height:'80px',fontSize:'20px'}} name="zipCode" onChange={(e)=> this.handleOnChange(e)  }/>
																										</div>
																								</div>  
																								<div className="col-xs-6 col-sm-6" style={{width:'auto',paddingLeft:'0px'}}> 
																										<div className="input-group" style={{width: '220px'}}>
																													<span className="input-group-addon" style={{borderRadius:'20px 0px 0px 20px'}} ><i className="fa fa-lock fa-2x"></i></span>
																													<input  type="text" className="form-control"  placeholder="Account Type" style={{borderRadius:'0px 20px 20px 0px',height:'80px',fontSize:'20px'}} name="accountType" onChange={(e)=>this.handleOnChange(e)  }/>
																										</div>
																									</div>
																						</div>

																			
																							<div className="col-xs-12 col-sm-12">
																								<span className="help-block" style={{height:'30px',width:'500px'}} ></span>
																							</div>
																				

																							<div className="col-xs-12 col-sm-12">
																								<div className="input-group" style={{width: '460px'}}>
																															<span className="input-group-addon" style={{borderRadius:'20px 0px 0px 20px'}} ><i className="fa fa-flag fa-2x"></i></span>
																															<input  type="text" className="form-control"  placeholder="City" style={{borderRadius:'0px 20px 20px 0px',height:'80px',fontSize:'20px'}} name="city" onChange={(e)=>this.handleOnChange(e)  }/>
																								</div>
																							</div>

																								<div className="col-xs-12 col-sm-12">
																						<span className="help-block" style={{height:'30px',width:'460px'}} ></span>
																							</div>


																							<div className="col-xs-12 col-sm-12">	
																								<div className="input-group" style={{width: '460px'}}>
																															<span className="input-group-addon" style={{borderRadius:'20px 0px 0px 20px'}} ><i className="fa fa-flag fa-2x"></i></span>
																															<input  type="text" className="form-control"  placeholder="Street Address" style={{borderRadius:'0px 20px 20px 0px',height:'80px',fontSize:'20px'}} name="streetAdress" onChange={(e)=> this.handleOnChange(e)  }/>
																								</div>
																								</div>

																								<div className="col-xs-12 col-sm-12">
																								<span className="help-block" style={{height:'30px',width:'460px'}} ></span>
																								</div>
																							
																							<div className="col-xs-12 col-sm-12">
																								<button className="btn btn-lg btn-primary btn-block" type="submit" style={{borderRadius:'20px',height:'80px',backgroundColor:'rgba(43,243,136,1)',border:'0px',width:'460px'}}>create my Account</button>
																						</div>
																		</div> 
																	

																	</div>
																		
																					
															</form>
																

																

																				
																				
																				
																				
														</div>
													</div>


											
										

										{/*


						
											<div id="email_group">
													<svg class="Rectangle_435">
														<rect id="Rectangle_435" rx="20" ry="20" x="0" y="0" width="560" height="70">
														</rect>
													</svg>
													<svg class="Line_306" viewBox="0 0 560 2">
														<path id="Line_306" d="M 0 0 L 560 0">
														</path>
													</svg>
													<div id="First_Name">
														<span>First Name</span>
													</div>
													<svg class="Icon_material-mail" viewBox="3 6 20 16">
														<path id="Icon_material-mail" d="M 21 6 L 5 6 C 3.900000095367432 6 3.010000228881836 6.900000095367432 3.010000228881836 8 L 3 20 C 3 21.10000038146973 3.900000095367432 22 5 22 L 21 22 C 22.10000038146973 22 23 21.10000038146973 23 20 L 23 8 C 23 6.900000095367432 22.10000038146973 6 21 6 Z M 21 10 L 13 15 L 5 10 L 5 8 L 13 13 L 21 8 L 21 10 Z">
														</path>
													</svg>
												</div>
												<div id="John">
													<span>John</span>
											</div>





											<div id="Group_184">
													<svg class="Rectangle_440">
														<rect id="Rectangle_440" rx="20" ry="20" x="0" y="0" width="560" height="70">
														</rect>
													</svg>
													<div id="Last_Name">
														<span>Last Name</span>
													</div>
													<svg class="Icon_map-locksmith" viewBox="3.6 0.72 20 24">
														<path id="Icon_map-locksmith" d="M 22.68000221252441 10.72000122070312 L 21.60000419616699 10.72000122070312 L 21.60000419616699 6.404000282287598 C 21.60000419616699 3.565000534057617 18.75200271606445 0.7200000286102295 15.91300201416016 0.7200000286102295 L 11.17250061035156 0.7200000286102295 C 8.335000038146973 0.7200000286102295 5.600000381469727 3.565000534057617 5.600000381469727 6.404000282287598 L 5.600000381469727 10.72000122070312 L 4.40500020980835 10.72000122070312 C 4.066500186920166 10.72000122070312 3.599999904632568 11.25100135803223 3.599999904632568 11.5500020980835 L 3.599999904632568 24.27900123596191 C 3.599999904632568 24.5780029296875 4.066500186920166 24.72000122070312 4.40500020980835 24.72000122070312 L 22.68000221252441 24.72000122070312 C 23.01950263977051 24.72000122070312 23.60000228881836 24.5780029296875 23.60000228881836 24.27900123596191 L 23.60000228881836 11.5500020980835 C 23.60000228881836 11.25100231170654 23.01950073242188 10.72000217437744 22.68000221252441 10.72000217437744 Z M 15.95650196075439 22.72000312805176 L 11.13100051879883 22.72000312805176 L 12.14350128173828 17.73650360107422 C 11.53150081634521 17.30300331115723 11.13100051879883 16.48600387573242 11.13100051879883 15.68400382995605 C 11.13100051879883 14.36250305175781 12.211501121521 13.23700332641602 13.54350090026855 13.23700332641602 C 14.87550067901611 13.23700332641602 15.95650196075439 14.28150367736816 15.95650196075439 15.60200309753418 C 15.95650196075439 16.40450286865234 15.55600166320801 17.31650161743164 14.94500160217285 17.75050163269043 L 15.95650196075439 22.72000312805176 Z M 18.10000228881836 10.72000122070312 L 9.100000381469727 10.72000122070312 L 9.100000381469727 6.404000282287598 C 9.100000381469727 5.115000247955322 9.946500778198242 4.220000267028809 11.22050094604492 4.220000267028809 L 15.8650016784668 4.220000267028809 C 17.13900375366211 4.220000267028809 18.10000228881836 5.115000247955322 18.10000228881836 6.404000282287598 L 18.10000228881836 10.72000122070312 Z">
														</path>
													</svg>
											</div>



											<div id="Group_198">
													<svg class="Rectangle_440_ci">
														<rect id="Rectangle_440_ci" rx="20" ry="20" x="0" y="0" width="560" height="70">
														</rect>
													</svg>
													<div id="Phone_Number">
														<span>Phone Number</span>
													</div>
													<svg class="Icon_map-locksmith_ck" viewBox="3.6 0.72 20 24">
														<path id="Icon_map-locksmith_ck" d="M 22.68000221252441 10.72000122070312 L 21.60000419616699 10.72000122070312 L 21.60000419616699 6.404000282287598 C 21.60000419616699 3.565000534057617 18.75200271606445 0.7200000286102295 15.91300201416016 0.7200000286102295 L 11.17250061035156 0.7200000286102295 C 8.335000038146973 0.7200000286102295 5.600000381469727 3.565000534057617 5.600000381469727 6.404000282287598 L 5.600000381469727 10.72000122070312 L 4.40500020980835 10.72000122070312 C 4.066500186920166 10.72000122070312 3.599999904632568 11.25100135803223 3.599999904632568 11.5500020980835 L 3.599999904632568 24.27900123596191 C 3.599999904632568 24.5780029296875 4.066500186920166 24.72000122070312 4.40500020980835 24.72000122070312 L 22.68000221252441 24.72000122070312 C 23.01950263977051 24.72000122070312 23.60000228881836 24.5780029296875 23.60000228881836 24.27900123596191 L 23.60000228881836 11.5500020980835 C 23.60000228881836 11.25100231170654 23.01950073242188 10.72000217437744 22.68000221252441 10.72000217437744 Z M 15.95650196075439 22.72000312805176 L 11.13100051879883 22.72000312805176 L 12.14350128173828 17.73650360107422 C 11.53150081634521 17.30300331115723 11.13100051879883 16.48600387573242 11.13100051879883 15.68400382995605 C 11.13100051879883 14.36250305175781 12.211501121521 13.23700332641602 13.54350090026855 13.23700332641602 C 14.87550067901611 13.23700332641602 15.95650196075439 14.28150367736816 15.95650196075439 15.60200309753418 C 15.95650196075439 16.40450286865234 15.55600166320801 17.31650161743164 14.94500160217285 17.75050163269043 L 15.95650196075439 22.72000312805176 Z M 18.10000228881836 10.72000122070312 L 9.100000381469727 10.72000122070312 L 9.100000381469727 6.404000282287598 C 9.100000381469727 5.115000247955322 9.946500778198242 4.220000267028809 11.22050094604492 4.220000267028809 L 15.8650016784668 4.220000267028809 C 17.13900375366211 4.220000267028809 18.10000228881836 5.115000247955322 18.10000228881836 6.404000282287598 L 18.10000228881836 10.72000122070312 Z">
														</path>
													</svg>
												</div>



													<div id="Group_203">
														<svg class="Rectangle_440_cm">
															<rect id="Rectangle_440_cm" rx="20" ry="20" x="0" y="0" width="273" height="70">
															</rect>
														</svg>
														<div id="Account_Type">
															<span>Account Type</span>
														</div>
														<svg class="Icon_map-locksmith_co" viewBox="3.6 0.72 20 24">
															<path id="Icon_map-locksmith_co" d="M 22.68000221252441 10.72000122070312 L 21.60000419616699 10.72000122070312 L 21.60000419616699 6.404000282287598 C 21.60000419616699 3.565000534057617 18.75200271606445 0.7200000286102295 15.91300201416016 0.7200000286102295 L 11.17250061035156 0.7200000286102295 C 8.335000038146973 0.7200000286102295 5.600000381469727 3.565000534057617 5.600000381469727 6.404000282287598 L 5.600000381469727 10.72000122070312 L 4.40500020980835 10.72000122070312 C 4.066500186920166 10.72000122070312 3.599999904632568 11.25100135803223 3.599999904632568 11.5500020980835 L 3.599999904632568 24.27900123596191 C 3.599999904632568 24.5780029296875 4.066500186920166 24.72000122070312 4.40500020980835 24.72000122070312 L 22.68000221252441 24.72000122070312 C 23.01950263977051 24.72000122070312 23.60000228881836 24.5780029296875 23.60000228881836 24.27900123596191 L 23.60000228881836 11.5500020980835 C 23.60000228881836 11.25100231170654 23.01950073242188 10.72000217437744 22.68000221252441 10.72000217437744 Z M 15.95650196075439 22.72000312805176 L 11.13100051879883 22.72000312805176 L 12.14350128173828 17.73650360107422 C 11.53150081634521 17.30300331115723 11.13100051879883 16.48600387573242 11.13100051879883 15.68400382995605 C 11.13100051879883 14.36250305175781 12.211501121521 13.23700332641602 13.54350090026855 13.23700332641602 C 14.87550067901611 13.23700332641602 15.95650196075439 14.28150367736816 15.95650196075439 15.60200309753418 C 15.95650196075439 16.40450286865234 15.55600166320801 17.31650161743164 14.94500160217285 17.75050163269043 L 15.95650196075439 22.72000312805176 Z M 18.10000228881836 10.72000122070312 L 9.100000381469727 10.72000122070312 L 9.100000381469727 6.404000282287598 C 9.100000381469727 5.115000247955322 9.946500778198242 4.220000267028809 11.22050094604492 4.220000267028809 L 15.8650016784668 4.220000267028809 C 17.13900375366211 4.220000267028809 18.10000228881836 5.115000247955322 18.10000228881836 6.404000282287598 L 18.10000228881836 10.72000122070312 Z">
															</path>
														</svg>
													</div>



													<div id="Group_201">
														<svg class="Rectangle_440_cq">
															<rect id="Rectangle_440_cq" rx="20" ry="20" x="0" y="0" width="560" height="70">
															</rect>
														</svg>
														<div id="Gender">
															<span>Gender</span>
														</div>
														<svg class="Icon_map-locksmith_cs" viewBox="3.6 0.72 20 24">
															<path id="Icon_map-locksmith_cs" d="M 22.68000221252441 10.72000122070312 L 21.60000419616699 10.72000122070312 L 21.60000419616699 6.404000282287598 C 21.60000419616699 3.565000534057617 18.75200271606445 0.7200000286102295 15.91300201416016 0.7200000286102295 L 11.17250061035156 0.7200000286102295 C 8.335000038146973 0.7200000286102295 5.600000381469727 3.565000534057617 5.600000381469727 6.404000282287598 L 5.600000381469727 10.72000122070312 L 4.40500020980835 10.72000122070312 C 4.066500186920166 10.72000122070312 3.599999904632568 11.25100135803223 3.599999904632568 11.5500020980835 L 3.599999904632568 24.27900123596191 C 3.599999904632568 24.5780029296875 4.066500186920166 24.72000122070312 4.40500020980835 24.72000122070312 L 22.68000221252441 24.72000122070312 C 23.01950263977051 24.72000122070312 23.60000228881836 24.5780029296875 23.60000228881836 24.27900123596191 L 23.60000228881836 11.5500020980835 C 23.60000228881836 11.25100231170654 23.01950073242188 10.72000217437744 22.68000221252441 10.72000217437744 Z M 15.95650196075439 22.72000312805176 L 11.13100051879883 22.72000312805176 L 12.14350128173828 17.73650360107422 C 11.53150081634521 17.30300331115723 11.13100051879883 16.48600387573242 11.13100051879883 15.68400382995605 C 11.13100051879883 14.36250305175781 12.211501121521 13.23700332641602 13.54350090026855 13.23700332641602 C 14.87550067901611 13.23700332641602 15.95650196075439 14.28150367736816 15.95650196075439 15.60200309753418 C 15.95650196075439 16.40450286865234 15.55600166320801 17.31650161743164 14.94500160217285 17.75050163269043 L 15.95650196075439 22.72000312805176 Z M 18.10000228881836 10.72000122070312 L 9.100000381469727 10.72000122070312 L 9.100000381469727 6.404000282287598 C 9.100000381469727 5.115000247955322 9.946500778198242 4.220000267028809 11.22050094604492 4.220000267028809 L 15.8650016784668 4.220000267028809 C 17.13900375366211 4.220000267028809 18.10000228881836 5.115000247955322 18.10000228881836 6.404000282287598 L 18.10000228881836 10.72000122070312 Z">
															</path>
														</svg>
													</div>


													<div id="Group_202">
														<svg class="Rectangle_440_cu">
															<rect id="Rectangle_440_cu" rx="20" ry="20" x="0" y="0" width="560" height="70">
															</rect>
														</svg>
														<div id="Age">
															<span>Age</span>
														</div>
														<svg class="Icon_map-locksmith_cw" viewBox="3.6 0.72 20 24">
															<path id="Icon_map-locksmith_cw" d="M 22.68000221252441 10.72000122070312 L 21.60000419616699 10.72000122070312 L 21.60000419616699 6.404000282287598 C 21.60000419616699 3.565000534057617 18.75200271606445 0.7200000286102295 15.91300201416016 0.7200000286102295 L 11.17250061035156 0.7200000286102295 C 8.335000038146973 0.7200000286102295 5.600000381469727 3.565000534057617 5.600000381469727 6.404000282287598 L 5.600000381469727 10.72000122070312 L 4.40500020980835 10.72000122070312 C 4.066500186920166 10.72000122070312 3.599999904632568 11.25100135803223 3.599999904632568 11.5500020980835 L 3.599999904632568 24.27900123596191 C 3.599999904632568 24.5780029296875 4.066500186920166 24.72000122070312 4.40500020980835 24.72000122070312 L 22.68000221252441 24.72000122070312 C 23.01950263977051 24.72000122070312 23.60000228881836 24.5780029296875 23.60000228881836 24.27900123596191 L 23.60000228881836 11.5500020980835 C 23.60000228881836 11.25100231170654 23.01950073242188 10.72000217437744 22.68000221252441 10.72000217437744 Z M 15.95650196075439 22.72000312805176 L 11.13100051879883 22.72000312805176 L 12.14350128173828 17.73650360107422 C 11.53150081634521 17.30300331115723 11.13100051879883 16.48600387573242 11.13100051879883 15.68400382995605 C 11.13100051879883 14.36250305175781 12.211501121521 13.23700332641602 13.54350090026855 13.23700332641602 C 14.87550067901611 13.23700332641602 15.95650196075439 14.28150367736816 15.95650196075439 15.60200309753418 C 15.95650196075439 16.40450286865234 15.55600166320801 17.31650161743164 14.94500160217285 17.75050163269043 L 15.95650196075439 22.72000312805176 Z M 18.10000228881836 10.72000122070312 L 9.100000381469727 10.72000122070312 L 9.100000381469727 6.404000282287598 C 9.100000381469727 5.115000247955322 9.946500778198242 4.220000267028809 11.22050094604492 4.220000267028809 L 15.8650016784668 4.220000267028809 C 17.13900375366211 4.220000267028809 18.10000228881836 5.115000247955322 18.10000228881836 6.404000282287598 L 18.10000228881836 10.72000122070312 Z">
															</path>
														</svg>
													</div>




													<div id="Group_199">
														<svg class="Rectangle_440_cy">
															<rect id="Rectangle_440_cy" rx="20" ry="20" x="0" y="0" width="272" height="70">
															</rect>
														</svg>
														<svg class="Rectangle_444">
															<rect id="Rectangle_444" rx="20" ry="20" x="0" y="0" width="272" height="70">
															</rect>
														</svg>
														<div id="Street_Address">
															<span>Street Address</span>
														</div>
														<div id="City">
															<span>City</span>
														</div>
														<svg class="Icon_map-locksmith_c" viewBox="3.6 0.72 20 24">
															<path id="Icon_map-locksmith_c" d="M 22.68000221252441 10.72000122070312 L 21.60000419616699 10.72000122070312 L 21.60000419616699 6.404000282287598 C 21.60000419616699 3.565000534057617 18.75200271606445 0.7200000286102295 15.91300201416016 0.7200000286102295 L 11.17250061035156 0.7200000286102295 C 8.335000038146973 0.7200000286102295 5.600000381469727 3.565000534057617 5.600000381469727 6.404000282287598 L 5.600000381469727 10.72000122070312 L 4.40500020980835 10.72000122070312 C 4.066500186920166 10.72000122070312 3.599999904632568 11.25100135803223 3.599999904632568 11.5500020980835 L 3.599999904632568 24.27900123596191 C 3.599999904632568 24.5780029296875 4.066500186920166 24.72000122070312 4.40500020980835 24.72000122070312 L 22.68000221252441 24.72000122070312 C 23.01950263977051 24.72000122070312 23.60000228881836 24.5780029296875 23.60000228881836 24.27900123596191 L 23.60000228881836 11.5500020980835 C 23.60000228881836 11.25100231170654 23.01950073242188 10.72000217437744 22.68000221252441 10.72000217437744 Z M 15.95650196075439 22.72000312805176 L 11.13100051879883 22.72000312805176 L 12.14350128173828 17.73650360107422 C 11.53150081634521 17.30300331115723 11.13100051879883 16.48600387573242 11.13100051879883 15.68400382995605 C 11.13100051879883 14.36250305175781 12.211501121521 13.23700332641602 13.54350090026855 13.23700332641602 C 14.87550067901611 13.23700332641602 15.95650196075439 14.28150367736816 15.95650196075439 15.60200309753418 C 15.95650196075439 16.40450286865234 15.55600166320801 17.31650161743164 14.94500160217285 17.75050163269043 L 15.95650196075439 22.72000312805176 Z M 18.10000228881836 10.72000122070312 L 9.100000381469727 10.72000122070312 L 9.100000381469727 6.404000282287598 C 9.100000381469727 5.115000247955322 9.946500778198242 4.220000267028809 11.22050094604492 4.220000267028809 L 15.8650016784668 4.220000267028809 C 17.13900375366211 4.220000267028809 18.10000228881836 5.115000247955322 18.10000228881836 6.404000282287598 L 18.10000228881836 10.72000122070312 Z">
															</path>
														</svg>
													</div>


											

													<div id="Group_200">
														<svg class="Rectangle_440_c">
															<rect id="Rectangle_440_c" rx="20" ry="20" x="0" y="0" width="273" height="70">
															</rect>
														</svg>
														<div id="Zip_Code">
															<span>Zip Code</span>
														</div>
														<svg class="Icon_map-locksmith_da" viewBox="3.6 0.72 20 24">
															<path id="Icon_map-locksmith_da" d="M 22.68000221252441 10.72000122070312 L 21.60000419616699 10.72000122070312 L 21.60000419616699 6.404000282287598 C 21.60000419616699 3.565000534057617 18.75200271606445 0.7200000286102295 15.91300201416016 0.7200000286102295 L 11.17250061035156 0.7200000286102295 C 8.335000038146973 0.7200000286102295 5.600000381469727 3.565000534057617 5.600000381469727 6.404000282287598 L 5.600000381469727 10.72000122070312 L 4.40500020980835 10.72000122070312 C 4.066500186920166 10.72000122070312 3.599999904632568 11.25100135803223 3.599999904632568 11.5500020980835 L 3.599999904632568 24.27900123596191 C 3.599999904632568 24.5780029296875 4.066500186920166 24.72000122070312 4.40500020980835 24.72000122070312 L 22.68000221252441 24.72000122070312 C 23.01950263977051 24.72000122070312 23.60000228881836 24.5780029296875 23.60000228881836 24.27900123596191 L 23.60000228881836 11.5500020980835 C 23.60000228881836 11.25100231170654 23.01950073242188 10.72000217437744 22.68000221252441 10.72000217437744 Z M 15.95650196075439 22.72000312805176 L 11.13100051879883 22.72000312805176 L 12.14350128173828 17.73650360107422 C 11.53150081634521 17.30300331115723 11.13100051879883 16.48600387573242 11.13100051879883 15.68400382995605 C 11.13100051879883 14.36250305175781 12.211501121521 13.23700332641602 13.54350090026855 13.23700332641602 C 14.87550067901611 13.23700332641602 15.95650196075439 14.28150367736816 15.95650196075439 15.60200309753418 C 15.95650196075439 16.40450286865234 15.55600166320801 17.31650161743164 14.94500160217285 17.75050163269043 L 15.95650196075439 22.72000312805176 Z M 18.10000228881836 10.72000122070312 L 9.100000381469727 10.72000122070312 L 9.100000381469727 6.404000282287598 C 9.100000381469727 5.115000247955322 9.946500778198242 4.220000267028809 11.22050094604492 4.220000267028809 L 15.8650016784668 4.220000267028809 C 17.13900375366211 4.220000267028809 18.10000228881836 5.115000247955322 18.10000228881836 6.404000282287598 L 18.10000228881836 10.72000122070312 Z">
															</path>
														</svg>
													</div>


													<div id="Doe">
														<span>Doe</span>
													</div>



													<div id="Group_197">
															<svg class="Rectangle_434">
																<rect id="Rectangle_434" rx="20" ry="20" x="0" y="0" width="560" height="80">
																</rect>
															</svg>
															<div id="Proceed">
																<span>Proceed</span>
															</div>
														</div> */}

														
										
                                              <img id="Profile_pictures_dq" src={bgLogo} />
								</Wrapper>
						)
			   }

}

EditProfileContent.propTypes = {
  //header: PropTypes.node.isRequired
}
export default EditProfileContent;