import React from 'react'
import styled from 'styled-components'
import { size } from 'styled-theme'
import PropTypes from 'prop-types'
import {HorizontalRule} from 'components'


const Wrapper = styled.div`

   	// position: absolute;
	// width: 1920px;
	// height: 1080px;
	// background-color: rgba(255,255,255,1);
	// overflow: hidden;
	// --web-view-name: New Log In Account;
	// --web-view-id: New_Log_In_Account;
	// --web-scale-on-resize: true;
	// --web-enable-deep-linking: true;

	position: absolute;
	width: 1440px;
	height: 850px;
	background-color: rgba(255,255,255,1);
	overflow: hidden;
	--web-view-name: New Log In Account;
	--web-view-id: New_Log_In_Account;
	--web-scale-on-resize: true;
	--web-enable-deep-linking: true;


    #Rectangle_432_df {
	opacity: 0.2;
	fill: rgba(43,50,243,1);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_432_df {
	display: none;
	position: absolute;
	overflow: visible;
	width: 800px;
	height: 900px;
	left: 0px;
	top: 0px;
}
  

  #Group_196_dg {
	position: absolute;
	width: 2772.129px;
	height: 500px;//1189.411px;
	left: -789.868px;
	top: -37px;
	overflow: visible;
}

#Path_1058_dh {
	fill: rgba(43,243,136,0.2);
}
.Path_1058_dh {
	overflow: visible;
	position: absolute;
	width: 2772.129px;
	height: 900px;
	left: 0px;
	top: 0px;
	transform: matrix(1,0,0,1,0,0);
}
#Path_1059_di {
	fill: rgba(43,243,136,0.2);
}
.Path_1059_di {
	overflow: visible;
	position: absolute;
	width: 2772.129px;
	height: 900px;
	left: 0px;
	top: 0px;
	transform: matrix(1,0,0,1,0,0);
}
#Path_1060_dj {
	fill: rgba(43,243,136,1);
}
.Path_1060_dj {
	overflow: visible;
	position: absolute;
	width: 2456.678px;
	height: 900px;
	left: 285.529px;
	top: 44.68px;
	transform: matrix(1,0,0,1,0,0);
}
#Path_1061_dk {
	fill: rgba(43,50,243,1);
}
.Path_1061_dk {
	overflow: visible;
	position: absolute;
	width: 2140.115px;
	height: 900px;
	left: 602.092px;
	top: 50.189px;
	transform: matrix(1,0,0,1,0,0);
}
#Rectangle_431_dl {
	fill: rgba(255,255,255,1);
	stroke: rgba(43,50,243,1);
	stroke-width: 5px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_431_dl {
	filter: drop-shadow(10px 10px 30px rgba(0, 0, 0, 0.161));
	position: absolute;
	overflow: visible;
	width: 1200px;
	height: 600px;
	left: 140px;
	top: 115px;
}


  #new_logo_ei {
	position: absolute;
	width: 147.667px;
	height: 50px;
	left: 136.334px;
	top: 35px;
	overflow: visible;
}
`
const Header = styled.header`
 position: relative;
  top: 0;
  width: 100%;
  //z-index: 0;/*999*/
`


const EditProfileTemplate=({logo,content, ...props })=>{
  return(
        <Wrapper {...props}> 
                                    {logo}
                                    <svg className="Rectangle_432_df">
                                        <rect id="Rectangle_432_df" rx="0" ry="0" x="0" y="0" width="960" height="1080">
                                        </rect>
                                    </svg>


                                    
                                   <div id="Group_196_dg">
                                        <svg className="Path_1058_dh" viewBox="14919.344 13096.243 2772.129 1127.842">
                                            <path id="Path_1058_dh" d="M 17661.578125 13096.2431640625 C 17661.578125 13096.2431640625 17418.109375 13880.955078125 16299.00390625 13982.2099609375 C 15179.8984375 14083.45703125 14919.34375 14224.0849609375 14919.34375 14224.0849609375 L 17691.47265625 14224.0849609375 L 17661.578125 13096.2431640625 Z">
                                            </path>
                                        </svg>
                                        <svg className="Path_1059_di" viewBox="14919.344 13096.243 2772.129 1127.842">
                                            <path id="Path_1059_di" d="M 17661.578125 13096.2431640625 C 17661.578125 13096.2431640625 17418.109375 13880.955078125 16299.00390625 13982.2099609375 C 15179.8984375 14083.45703125 14919.34375 14224.0849609375 14919.34375 14224.0849609375 L 17691.47265625 14224.0849609375 L 17661.578125 13096.2431640625 Z">
                                            </path>
                                        </svg>
                                        <svg className="Path_1060_dj" viewBox="14919.344 13096.245 2456.678 1116.912">
                                            <path id="Path_1060_dj" d="M 17349.52734375 13096.2451171875 C 17349.52734375 13096.2451171875 17133.763671875 13873.3486328125 16142.00390625 13973.62109375 C 15150.24609375 14073.8896484375 14919.34375 14213.1572265625 14919.34375 14213.1572265625 L 17376.021484375 14213.1572265625 L 17349.52734375 13096.2451171875 Z">
                                            </path>
                                        </svg>
                                        <svg className="Path_1061_dk" viewBox="14919.344 13096.248 2140.115 1139.222">
                                            <path id="Path_1061_dk" d="M 17036.376953125 13096.248046875 C 17036.376953125 13096.248046875 16848.416015625 13888.8681640625 15984.451171875 13991.146484375 C 15120.49609375 14093.4150390625 14919.34375 14235.4697265625 14919.34375 14235.4697265625 L 17059.458984375 14235.4697265625 L 17036.376953125 13096.248046875 Z">
                                            </path>
                                        </svg>
                                    </div>



                                    <svg className="Rectangle_431_dl">
                                        <rect id="Rectangle_431_dl" rx="40" ry="40" x="0" y="0" width="1200" height="700">
                                        </rect>
                                    </svg>

                                    
                                    
    
                           
              
                        <Header>
                              {content}
                           
                        </Header>
                    
                 
            </Wrapper>
  )
}

EditProfileTemplate.propTypes = {
  header: PropTypes.node.isRequired
}
export default EditProfileTemplate;