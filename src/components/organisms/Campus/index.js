import React from 'react';
import styled from 'styled-components';
import London from '../../../assets/images/London.png'
import  NewYork from '../../../assets/images/NewYork.png'
import  Washington from '../../../assets/images/Washington.png'


const Wrapper =styled.section`
        width: 80%;
    margin:auto;
    text-align: center;
    padding-top:50px;

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
      flex-basis: 32%;
    border-radius: 10px;
    margin-bottom:30px;
    position:relative;
    overflow:hidden;

    img{
          width:100%;
    display: block;
    }
`

const Layer=styled.section`
      background:transparent;
    height: 100%;
    width: 100%;
    position:absolute;
    top:0;
    left:0;
    transition:0.5s;

    :hover{
    background:rgba(226,0,0,0.7);
}

 h3{
    width: 100%;
    font-weight: 500;
    color:#fff;
    font-size: 26px;
    bottom: 0;
    left: 50%;
    transform:translateX(-50%);
    position:absolute;
    transition: 0.5s;
}

  :hover h3{
    bottom: 49%;
    opacity: 1;
}

`

const Campus=(props) => {

       return (
                    <Wrapper >
                                <h1>Our Global Campus</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium corrupti cumque iste, labore eaque saepe laboriosam nihil, rerum mollitia aliquid nulla pariatur dignissimos. Vel rem velit, laboriosam ducimus quos nostrum?</p>
                            
                                <Row>
                                    <Column>
                                        <img src={London}/>
                                        <Layer>
                                            <h3>London</h3>
                                        </Layer>
                                    </Column>

                                    <Column>
                                        <img src={NewYork}/>
                                        <Layer>
                                            <h3>New York</h3>
                                        </Layer>
                                     </Column>

                                     <Column>
                                            <img src={Washington}/>
                                            <Layer>
                                                <h3>WASHINGTON</h3>
                                            </Layer>
                                      </Column>
                                </Row>
   
                    </Wrapper>
                
       )
}
export default Campus;