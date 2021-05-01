import React from 'react';
import styled from 'styled-components';

import Library from '../../../assets/images/library.png'
import  Cafeteria from '../../../assets/images/cafeteria.png'
import  Basketball from '../../../assets/images/basketball.png'


const Wrapper = styled.section`
      width: 80%;
    margin:auto;
    text-align: center;
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
const Row = styled.section`
      margin-top:5%;
    display: flex;
    justify-content: space-between;
`

const Column = styled.section`
        flex-basis:31%;
    border-radius: 10px;
    margin-bottom: 5%;
    text-align: left;

    img{
    width: 100%;
    border-radius:10px;
}
 p{
    padding:0;
}

 h3{
    margin-top:16px;
    margin-bottom: 15px;
    text-align:left;
}
`


const Facility = (props) => {

         return (

                      <Wrapper>
                                <h1>Our facilities</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, sint iste. Maxime aliquam hic vel sed, veritatis incidunt, iste, quasi esse omnis iusto assumenda excepturi blanditiis quia unde enim soluta.</p>
                        
                                <Row>
                                        <Column>
                                            <img src={Library}/>
                                                <h3>World class library</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, pariatur laborum repellat ipsum optio facere iste fugiat eius, tempore, ipsam doloribus. Reprehenderit vitae repellendus corrupti porro blanditiis. In, praesentium dolores.</p>
                                        </Column>
                                
                                        <Column>
                                                <img src={Basketball}/>       
                                                <h3>Largest Play Ground</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, pariatur laborum repellat ipsum optio facere iste fugiat eius, tempore, ipsam doloribus. Reprehenderit vitae repellendus corrupti porro blanditiis. In, praesentium dolores.</p>
                                        </Column>

                                        <Column>
                                                <img src={Cafeteria}/>
                                                <h3>Tasty and Healthy</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, pariatur laborum repellat ipsum optio facere iste fugiat eius, tempore, ipsam doloribus. Reprehenderit vitae repellendus corrupti porro blanditiis. In, praesentium dolores.</p>
                                        </Column>
                                    </Row>
                      </Wrapper>


         )
}

export default Facility;