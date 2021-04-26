// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
//import {PageTemplate  ,Header, Footer }  from 'components'
import {ContactTemplate, Header, Hero, Footer,} from 'components'  ;//'../../templates/ContactTemplate'

 const ContactPage= ()=>{
 return (
   
   <ContactTemplate   
       header={<Header />}
      hero={<Hero />}
      footer={<Footer />}>
      </ContactTemplate>

  //  <PageTemplate header={<Header />} footer={<Footer />}>
  //  </PageTemplate>
      
      )
}

export default ContactPage;
