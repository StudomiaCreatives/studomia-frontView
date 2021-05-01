// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'

import { LandingPageTemplate, Header2, Content ,Footer} from 'components'

import {Course , Campus , Facility , Testimonial,ContactUs} from 'components'

const LandingPage = () => {
  return (
    <LandingPageTemplate  header={<Header2 />} content={<Content course={<Course/>} facility={<Facility/>} campus={<Campus/>} testimonial={<Testimonial/>} contactUs={<ContactUs/>} facility={<Facility/>} />} footer={<Footer />} >
    
     </LandingPageTemplate>
  )
}

export default LandingPage
