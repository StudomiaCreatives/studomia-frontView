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

const Course=(props)=>{
     return (

              <Wrapper>
                            <h1>Courses we Offer</h1>
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
                                </Row>
                </Wrapper>
          
     )
}

export default Course;