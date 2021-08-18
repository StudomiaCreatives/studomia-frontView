import React , {Component}  from 'react'
import styled from 'styled-components'
import {StudentRegForm,Button,ExpertRegForm,Modal} from 'components'

const Wrapper = styled.section`
   width:100%;
   transition:10s;
`
const Toggle= styled.div` 
    background-color: #ccdaf4;
    height: auto;
    max-width:  15%;
    border : 1px solid #000;
    border-radius:10px;
    text-align: center;
    margin:20px;

  
`

export default class UsersRegForm extends Component {
 
     constructor(props)
     {
          super(props);

          this.state= {
                toggle : true
          };

          this.handlerUserFormType = this.handlerUserFormType.bind(this);
         
     }

     handlerUserFormType(e)
     {
         

         this.setState( prevState=>(
             {
                 toggle : !prevState.toggle
             }
         ) )
     }

    
   
   render(){
           var show = true;
                return (
                    <Wrapper>
                               <Toggle    onClick={this.handlerUserFormType}>student/expert</Toggle>
                        

                               {

                         
                                   this.state.toggle ? <StudentRegForm/>:  <ExpertRegForm/>
                               }
                    </Wrapper>
                )
   }
}
