import React from 'react'
import styled from 'styled-components'
import { size } from 'styled-theme'
import PropTypes from 'prop-types'



const Wrapper = styled.div`
`
const Content = styled.div`
  width: 100%;

`
const Footer = styled.div`
     width: 100%;
`

const UserFormTemplate=({header,content,footer, ...props })=>{
    
      return (
                     <Wrapper {...props}>
                                 
                                 <Content>{content}</Content> 
                        
                                 <Footer>{footer}</Footer>
                     </Wrapper>
             )
  
  }

UserFormTemplate.propTypes = {
//   header: PropTypes.node.isRequired,
//   footer: PropTypes.node.isRequired,
  //content: PropTypes.any.isRequired 
}
export default UserFormTemplate;