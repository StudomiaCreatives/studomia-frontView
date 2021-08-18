// https://github.com/diegohaz/arc/wiki/Atomic-Design  bgImage={<BgImage/>
import React from 'react'

import { SignUpTemplate, SignUpContent ,LogoImage} from 'components'
//import { LoginTemplate, LoginContent ,LogoImage} from 'components'

const SignUpPage = () => {
  return (
    //     <LoginTemplate  logo={<LogoImage/>} content={<LoginContent/>} >  
    
    //  </LoginTemplate>
    <SignUpTemplate  logo={<LogoImage/>} content={<SignUpContent/>} >  
    
     </SignUpTemplate>
  )
}

export default SignUpPage
