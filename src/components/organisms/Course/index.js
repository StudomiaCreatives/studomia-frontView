import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    width:80%;
    margin:auto;
    text-align:center;
    padding-top:100px;

    h1{
    font-size: 36px;
    font-weight: 600;
    }
p{
    color:#777;
    font-size: 14px;
    font-weight: 300;
    line-height: 22px;
    padding:10px;
}
`

const Row =styled.div`
      margin-top:5%;
    display: flex;
    justify-content: space-between;
`

const Column=styled.div`
      flex-basis: 31%;
    background: #fff3f3;
    border-radius: 10px;
    margin-bottom:5%;
    padding:20px 12px;
    box-sizing: border-box;
    transition:0.5s;

    :hover{
    box-shadow:0 0 20px 0px rgba(0,0,0,0.2);
    }

    h3{
    text-align: center; 
    margin:10px 0;
    }
`

const FindOutMore=styled.div`
   #Find_out_more {
	left: 59px;
	top: 816px;
	position: absolute;
	overflow: visible;
	width: 125px;
	white-space: nowrap;
	text-align: center;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	color: rgba(43,50,243,1);
	text-transform: capitalize;
}
  #Polygon_1 {
        fill: rgba(43,50,243,1);
        stroke: rgba(112,112,112,1);
        stroke-width: 1px;
        stroke-linejoin: miter;
        stroke-linecap: butt;
        stroke-miterlimit: 4;
        shape-rendering: auto;
}
.Polygon_1 {
	overflow: visible;
	position: absolute;
	width: 17px;
	height: 15px;
	transform: matrix(1,0,0,1,199,822) rotate(180deg);
	transform-origin: center;
	left: 0px;
	top: 0px;
}
`
const FindOutMoreImage=styled.div`
    #Path_1039 {
	     fill: rgba(43,243,136,0.2);
     }
    .Path_1039 {
        overflow: visible;
        position: absolute;
        width: 2038.042px;
        height: 428.086px;
        left: -559px;
        top: 620.102px;
        transform: matrix(1,0,0,1,0,0);
    }
    #Path_1046 {
        fill: rgba(43,243,136,0.2);
    }
    .Path_1046 {
        overflow: visible;
        position: absolute;
        width: 2038.042px;
        height: 428.086px;
        left: -559px;
        top: 620.102px;
        transform: matrix(1,0,0,1,0,0);
    }
    #Path_1038 {
        fill: rgba(43,243,136,1);
    }
    .Path_1038 {
        overflow: visible;
        position: absolute;
        width: 1806.126px;
        height: 420.05px;
        left: -349.083px;
        top: 652.95px;
        transform: matrix(1,0,0,1,0,0);
    }
    #Path_1040 {
        fill: rgba(43,50,243,1);
    }
    .Path_1040 {
        overflow: visible;
        position: absolute;
        width: 1573.392px;
        height: 436.451px;
        left: -116.348px;
        top: 657px;
        transform: matrix(1,0,0,1,0,0);
    }
`





const Course=(props)=>{
     return (

              <Wrapper>
                            {/* <h1>Courses we Offer</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eveniet delectus quidem facilis dolorem ut architecto ea possimus doloribus fugiat inventore, eligendi eos modi velit dolor, quasi blanditiis animi a!</p>
                        
                                <Row>
                                    <Column>
                                        <h3>Intermediate</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis laborum neque debitis aspernatur natus et illum sed nobis quos, eaque veritatis vel similique odio aut in, iste accusantium, consectetur maxime.</p>
                                    </Column>
                                    <Column>
                                        <h3>Degree</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis laborum neque debitis aspernatur natus et illum sed nobis quos, eaque veritatis vel similique odio aut in, iste accusantium, consectetur maxime.</p>
                                    </Column>
                                    <Column>
                                        <h3>Post Graduation</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis laborum neque debitis aspernatur natus et illum sed nobis quos, eaque veritatis vel similique odio aut in, iste accusantium, consectetur maxime.</p>
                                    </Column>
                                </Row> */}


                                <FindOutMore>
                                       <div id="Find_out_more">
                                            <span>Find out more</span>
                                        </div>
                                        <svg className="Polygon_1" viewBox="0 0 17 15">
                                            <path id="Polygon_1" d="M 8.499999046325684 0 L 17 15 L 0 15 Z">
                                            </path>
                                        </svg>
                            
                               </FindOutMore>
                           
                               <FindOutMoreImage>              
                                   <svg className="Path_1039" viewBox="14919.343 13096.245 2038.042 428.086">
                                        <path id="Path_1039" d="M 16935.408203125 13096.2451171875 C 16935.408203125 13096.2451171875 16756.41015625 13394.091796875 15933.6552734375 13432.5234375 C 15110.9013671875 13470.953125 14919.3427734375 13524.3310546875 14919.3427734375 13524.3310546875 L 16957.384765625 13524.3310546875 L 16935.408203125 13096.2451171875 Z">
                                        </path>
                                   </svg>
                                    <svg className="Path_1046" viewBox="14919.343 13096.245 2038.042 428.086">
                                        <path id="Path_1046" d="M 16935.408203125 13096.2451171875 C 16935.408203125 13096.2451171875 16756.41015625 13394.091796875 15933.6552734375 13432.5234375 C 15110.9013671875 13470.953125 14919.3427734375 13524.3310546875 14919.3427734375 13524.3310546875 L 16957.384765625 13524.3310546875 L 16935.408203125 13096.2451171875 Z">
                                        </path>
                                    </svg>
                                    <svg className="Path_1038" viewBox="14919.343 13096.244 1806.126 420.05">
                                        <path id="Path_1038" d="M 16705.9921875 13096.244140625 C 16705.9921875 13096.244140625 16547.36328125 13388.4990234375 15818.2314453125 13426.208984375 C 15089.1025390625 13463.9189453125 14919.3427734375 13516.2939453125 14919.3427734375 13516.2939453125 L 16725.46875 13516.2939453125 L 16705.9921875 13096.244140625 Z">
                                        </path>
                                    </svg>
                                    <svg className="Path_1040" viewBox="14919.343 13096.247 1573.392 436.451">
                                        <path id="Path_1040" d="M 16475.765625 13096.2470703125 C 16475.765625 13096.2470703125 16337.5771484375 13399.9111328125 15702.40234375 13439.095703125 C 15067.2275390625 13478.27734375 14919.3427734375 13532.6982421875 14919.3427734375 13532.6982421875 L 16492.734375 13532.6982421875 L 16475.765625 13096.2470703125 Z">
                                        </path>
                                    </svg>
                                    </FindOutMoreImage>
                </Wrapper>
          
     )
}

export default Course;