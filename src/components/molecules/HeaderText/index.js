import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
        width:90%;
        color:#6C2FBE;
        position:absolute;
        top: 50%;
        left:50%;
        transform: translate(-50%,-50%);
        text-align: center;

        p{
            margin:10px 0 40px;
            font-size: 14px;
            color:#000;
         }

        h1{
            font-size:62px
            ;
        }
`
const Btn=styled.div`
        display: inline-block;  
        color:#fff;
        border: 1px solid #fff;
        padding:12px 34px;
        font-size: 13px;
        //background:transparent;
        background-color:#f44336;
        position:relative;
        cursor: pointer;

        a{
            text-decoration: none;
        }
        :hover{
        border:1p solid #f44336;
        transition:1s;
        background:#f44336;
        }
`

const HeaderText=()=>{
     return ( 

                           <Wrapper>
                                    <h1>World's Biggest university 'STUDOMIA'</h1>
                                    <p>
                                            Studomia learning Apps serves as a connecting bridge between practical learners and skilled expert practitioners.
                                            <br/> We connect learners to certified and vetted experts to facilitating both in-person and virtual learning.
                                        </p>
                                    <Btn><a href="" >Visit us to know more </a></Btn>
                            </Wrapper>
     )
}
export default HeaderText;