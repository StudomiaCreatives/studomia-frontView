// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'

import { LandingPageTemplate, Header, Content ,Footer} from 'components'

const HomePage = () => {
  return (
    <LandingPageTemplate  header={<Header />} content={<Content/>} footer={<Footer />} >
    
     </LandingPageTemplate>
  )
}

export default HomePage
