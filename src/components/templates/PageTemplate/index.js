// https://github.com/diegohaz/arc/wiki/Atomic-Design#templates
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size } from 'styled-theme'
import wave from '../../atoms/background/wave.svg'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3.75rem;
  min-height: 100vh;
  box-sizing: border-box;
  @media screen and (max-width: 640px) {
    padding-top: 3.25rem;
  }
`

const Head = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`

const Hero = styled.section``

const Sponsor = styled.section``

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 2rem auto;
  max-width: ${size('maxWidth')};
`

const Footer = styled.footer`
  margin-top: auto;
`
const Bg = styled.div`
    background: url(${wave});
`

const PageTemplate = ({
  header, hero, sponsor, children,footer, ...props
}) => {
  return (
    <Wrapper {...props}> 
      <Head>{header}</Head>
      {/* <img alt="Logo" src={wave} /> */}
      {hero && <Hero>{hero}</Hero>}
      {sponsor && <Sponsor>{sponsor}</Sponsor>}
     <Bg> <Content>{children}</Content> 
     temi</Bg>
      <Footer>{footer}</Footer>
      
    </Wrapper>
  )
}

PageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  hero: PropTypes.node,
  sponsor: PropTypes.node,
  footer: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired,
  Bg:PropTypes.node
}

export default PageTemplate
