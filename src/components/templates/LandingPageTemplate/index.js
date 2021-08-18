import React from 'react'
import styled from 'styled-components'
import { size } from 'styled-theme'
import PropTypes from 'prop-types'
import {HorizontalRule} from 'components'


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  //padding-top: 3.75rem;
  min-height: 100vh;
  box-sizing: border-box;
  @media screen and (max-width: 640px) {
    padding-top: 3.25rem;
  }

	position: absolute;
	width: 1440px;
	height: 4970px;
	background-color: rgba(255,255,255,1);
	overflow: hidden;
	--web-view-name: New Tutors page Studomia- landing Page ;
	--web-view-id: New_Tutors_page_Studomia-_landing_Page_;
	--web-scale-on-resize: true;
	--web-enable-deep-linking: true;

`
const Header = styled.header`
 position: relative;
  top: 0;
  width: 100%;
  //z-index: 0;/*999*/
`

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 2rem auto;
 // max-width: ${size('maxWidth')};
`


const Footer = styled.footer`
  margin-top: auto;
 // z-index:999;
`



const LandingPageTemplate=({header,content,footer, ...props })=>{
  return(
        <Wrapper {...props}> 
              
                        <Header>
                              {header}
                              <HorizontalRule/>
                        </Header>
                    
                        <Content>{content}</Content> 
                        
                        <Footer>{footer}</Footer>
                 
            </Wrapper>
  )
}

LandingPageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
  //content: PropTypes.any.isRequired 
}
export default LandingPageTemplate;