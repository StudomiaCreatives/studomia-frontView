import  React from 'react';
import styled from 'styled-components';
import {font, palette } from 'styled-theme'



const Wrapper = styled.section`
    #helpstudomiacom {
	left: 58px;
	top: 4915px;
	position: absolute;
	overflow: visible;
	width: 200px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	color: rgba(49,68,108,1);
}


#Group_62 {
	position: absolute;
	width: 1440px;
	height: 80px;
	left: 0px;
	top: 4888px;
	overflow: visible;
}

   #Rectangle_111 {
	fill: rgba(255,255,255,1);
}
.Rectangle_111 {
	filter: drop-shadow(0px -3px 6px rgba(0, 0, 0, 0.161));
	position: absolute;
	overflow: visible;
	width: 1458px;
	height: 98px;
	left: 0px;
	top: 0px;
}

    #Terms_of_Use_ {
	left: 1260px;
	top: 27px;
	position: absolute;
	overflow: visible;
	width: 127px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	color: rgba(49,68,108,1);
}

   #Privacy {
	left: 1172px;
	top: 27px;
	position: absolute;
	overflow: visible;
	width: 69px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	color: rgba(49,68,108,1);
}

#Group_162 {
	position: absolute;
	width: 325.207px;
	height: 24px;
	left: 556.999px;
	top: 28px;
	overflow: visible;
}

   #ID2021_Studomia {
	left: 206.207px;
	top: 0px;
	position: absolute;
	overflow: visible;
	width: 120px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	color: rgba(49,68,108,1);
}
  #Icon_material-copyright {
	fill: rgba(49,68,108,1);
}
.Icon_material-copyright {
	overflow: visible;
	position: absolute;
	width: 18px;
	height: 18px;
	left: 169.604px;
	top: 3px;
	transform: matrix(1,0,0,1,0,0);
}
#All_Rights_Reserved {
	left: 0px;
	top: 0px;
	position: absolute;
	overflow: visible;
	width: 152px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	color: rgba(49,68,108,1);
}
`

const Wrapper2 = styled.section`
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
                              
        	<div id="Group_62">
                   
                    <svg className="Rectangle_111">
                        <rect id="Rectangle_111" rx="0" ry="0" x="0" y="0" width="1440" height="80">
                        </rect>
                    </svg>
                    
                    
                    <div id="Terms_of_Use_">
                        <span>Terms of Use </span>
                    </div>
                    
                    
                    <div id="Privacy">
                        <span>Privacy</span>
                    </div>
                    
                   
                    <div id="Group_162">
                        <div id="ID2021_Studomia">
                            <span>2021 Studomia</span>
                        </div>
                        <svg className="Icon_material-copyright" viewBox="3 3 18 18">
                            <path id="Icon_material-copyright" d="M 10.27200317382812 10.9739990234375 C 10.3170051574707 10.67699813842773 10.41600036621094 10.41600036621094 10.5420036315918 10.19099807739258 C 10.66800308227539 9.96600341796875 10.84799957275391 9.777000427246094 11.07300567626953 9.632999420166016 C 11.28900527954102 9.498001098632812 11.55900573730469 9.435001373291016 11.89200210571289 9.425998687744141 C 12.09900283813477 9.435001373291016 12.28800201416016 9.471000671386719 12.45900344848633 9.543003082275391 C 12.63900375366211 9.624000549316406 12.80100631713867 9.732002258300781 12.92700576782227 9.867000579833984 C 13.05300521850586 10.00199890136719 13.15200424194336 10.16400146484375 13.23300552368164 10.34400177001953 C 13.31399917602539 10.52399826049805 13.35000228881836 10.72200012207031 13.35900497436523 10.92000198364258 L 14.97000503540039 10.92000198364258 C 14.95200729370117 10.49700164794922 14.87099838256836 10.11000061035156 14.7180061340332 9.758998870849609 C 14.56499862670898 9.407997131347656 14.35800552368164 9.102001190185547 14.0880012512207 8.850002288818359 C 13.8180046081543 8.598003387451172 13.49399948120117 8.399997711181641 13.11600112915039 8.256000518798828 C 12.73800277709961 8.11199951171875 12.32400512695312 8.048999786376953 11.86499786376953 8.048999786376953 C 11.28000259399414 8.048999786376953 10.76700210571289 8.147998809814453 10.33500289916992 8.354999542236328 C 9.902999877929688 8.562000274658203 9.542999267578125 8.831996917724609 9.255001068115234 9.182998657226562 C 8.967002868652344 9.53399658203125 8.751003265380859 9.938999176025391 8.615997314453125 10.40699768066406 C 8.480998992919922 10.875 8.400001525878906 11.36100006103516 8.400001525878906 11.88299942016602 L 8.400001525878906 12.12599945068359 C 8.400001525878906 12.64799880981445 8.472000122070312 13.13400268554688 8.607002258300781 13.60199737548828 C 8.74200439453125 14.06999969482422 8.958003997802734 14.47499847412109 9.246002197265625 14.81700134277344 C 9.534000396728516 15.15899658203125 9.894001007080078 15.43800354003906 10.32600402832031 15.63600158691406 C 10.75800323486328 15.83399963378906 11.27100372314453 15.94200134277344 11.85600280761719 15.94200134277344 C 12.27900314331055 15.94200134277344 12.67500686645508 15.87000274658203 13.04400253295898 15.73500061035156 C 13.41300582885742 15.60000610351562 13.73700332641602 15.41100311279297 14.01601028442383 15.16799926757812 C 14.29500198364258 14.92500305175781 14.5200080871582 14.64600372314453 14.68200302124023 14.32199859619141 C 14.8440055847168 13.99800109863281 14.9430046081543 13.65599822998047 14.95200729370117 13.28700256347656 L 13.34100723266602 13.28700256347656 C 13.33200454711914 13.47600555419922 13.28700637817383 13.64700317382812 13.20600509643555 13.80900573730469 C 13.12500381469727 13.97100067138672 13.01700973510742 14.10600280761719 12.88200378417969 14.22299957275391 C 12.74700546264648 14.34000396728516 12.5940055847168 14.43000793457031 12.41400146484375 14.49300384521484 C 12.24300384521484 14.55599975585938 12.06300354003906 14.57400512695312 11.87400436401367 14.5830078125 C 11.54999923706055 14.57400512695312 11.28000259399414 14.51100158691406 11.07300567626953 14.37600708007812 C 10.84800338745117 14.23200225830078 10.66800308227539 14.04299926757812 10.5420036315918 13.81800842285156 C 10.4160041809082 13.59300231933594 10.3170051574707 13.32300567626953 10.27200317382812 13.0260009765625 C 10.22700500488281 12.72900390625 10.20000457763672 12.42300415039062 10.20000457763672 12.12600326538086 L 10.20000457763672 11.88300323486328 C 10.20000457763672 11.56800079345703 10.22700500488281 11.27099990844727 10.27200317382812 10.97400283813477 Z M 12.00000381469727 3 C 7.032001495361328 3 3.000003814697266 7.031997680664062 3.000003814697266 12 C 3.000003814697266 16.96800231933594 7.032001495361328 21 12.00000381469727 21 C 16.9680061340332 21 21.00000381469727 16.96800231933594 21.00000381469727 12 C 21.00000381469727 7.031997680664062 16.9680061340332 3 12.00000381469727 3 Z M 12.00000381469727 19.20000457763672 C 8.031002044677734 19.20000457763672 4.799999237060547 15.968994140625 4.799999237060547 12 C 4.799999237060547 8.030998229980469 8.031002044677734 4.799999237060547 12.00000381469727 4.799999237060547 C 15.9690055847168 4.799999237060547 19.20000839233398 8.030998229980469 19.20000839233398 12 C 19.20000839233398 15.968994140625 15.9690055847168 19.20000457763672 12.00000381469727 19.20000457763672 Z">
                            </path>
                        </svg>
                        <div id="All_Rights_Reserved">
                            <span>All Rights Reserved</span>
                        </div>
                   </div>

         	</div>


                <div id="helpstudomiacom">
                <span>help@studomia.com</span>
            </div>






                     {/*   <h4>About Us</h4>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Non perferendis labore, quas ad ipsum corporis odio quam 
                            <br/> praesentium accusantium ex quo iste. At nesciunt aliquam deserunt
                                voluptates iure. Autem, iure.
                            </p> 
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
                            
                            {/*  Made with <i className="fa fa-heart-o"></i> Studomia   *  /}
                            <p><Span >  <i className="fa fa-copyright" ></i>2021 Copyright: studomia</Span></p>
                             */}
               </Wrapper>
    )
}
export default Footer;