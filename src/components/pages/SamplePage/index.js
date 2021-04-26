import React from 'react'
import FeatureList from '../../organisms/FeatureList'
import Hero from '../../organisms/Hero'
import Slider from '../../molecules/Slider'

import Modal  from '../../molecules/Modal';
import Blockquote from '../../molecules/Blockquote';
import 
{
       PageTemplate, Header, Footer, Paragraph, Heading,
} 
from 'components'

const SamplePage = () => {
  return (
    
      /*       Sample page       */
    
    <PageTemplate header={<Header />} footer={<Footer />}>
        
          <Heading>Irure mollit aute tempor incididunt eiusmod fugiat tempor aute ex sit aute est proident est.</Heading>
         
          <Paragraph>
            Do cillum nulla consectetur excepteur aliquip adipisicing ipsum. Consectetur voluptate cillum cillum fugiat adipisicing eiusmod incididunt ut voluptate do aliquip ad irure occaecat cupidatat quis. Laborum laborum id quis officia anim quis in anim eu et aliquip sunt do excepteur. Consectetur ullamco sint do do nostrud tempor labore laboris sit fugiat veniam reprehenderit.
          </Paragraph>

          {/* atoms available*/}           
              {/* <Spinner spin></Spinner> */}

          {/* molecules available*/}
                <Blockquote>sfmnk </Blockquote>
                
                <Modal tile="alli">dgdf</Modal>
                
                <Slider></Slider>

          {/* organisms available*/}
                <Hero/>
                
                <FeatureList/>

          {/* templates available*/}

        
    </PageTemplate>
  )
}

export default SamplePage
