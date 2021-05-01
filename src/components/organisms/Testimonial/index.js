import React from 'react'
import styled from 'styled-components'
import User1 from '../../../assets/images/User1.jpg'
import  User2 from '../../../assets/images/User2.jpg'


const Wrapper = styled.section`
     width: 80%;
     margin: auto;
     padding-top: 100px;
     text-align: center;

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
const Row =styled.section`
        margin-top:5%;
    display: flex;
    justify-content: space-between;
`
const Column =styled.section`
        flex-basis: 44%;
    border-radius: 10px;
    margin-bottom: 5%;
    text-align: left;
    background: #fff3f3;
    padding:25px;
    cursor: pointer;
    display: flex;

    img{ 
        height: 40px;
        margin-left: 5px;
        margin-right: 30px;
        border-radius: 50%; 
     }

     p{
    padding:0;
}
 h3{
     margin-top: 15px;
     text-align:left;
}

 .fa{

    color :#f44336;
}
`
const Testimonial = (props)=>
{
          return (

             <Wrapper>
                        <h1>Our Testimonials </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, sint iste. Maxime aliquam hic vel sed, veritatis incidunt, iste, quasi esse omnis iusto assumenda excepturi blanditiis quia unde enim soluta.</p>
                
                        <Row>
                            <Column>
                                <img src={User1}/>
                                <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, pariatur laborum repellat ipsum optio facere iste fugiat eius, tempore, ipsam doloribus. Reprehenderit vitae repellendus corrupti porro blanditiis. In, praesentium dolores.</p>
                                <h3>Christine Berkley</h3>
                                <i className="fa fa-star" ></i>
                                <i className="fa fa-star" ></i>
                                <i className="fa fa-star" ></i>
                                <i className="fa fa-star" ></i>
                                <i className="fa fa-star-o" ></i>
                                </div>
                            </Column>

                            <Column>
                                <img src={User2}/>
                                    <div>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, pariatur laborum repellat ipsum optio facere iste fugiat eius, tempore, ipsam doloribus. Reprehenderit vitae repellendus corrupti porro blanditiis. In, praesentium dolores.</p>
                                            <h3>David Byer</h3>
                                            <i className="fa fa-star" ></i>
                                            <i className="fa fa-star" ></i>
                                            <i className="fa fa-star" ></i>
                                            <i className="fa fa-star" ></i>
                                            <i className="fa fa-star-half-o" ></i>
                                    </div>
                            </Column>
                        </Row>
                </Wrapper>
               
          )
     
}

export default Testimonial;