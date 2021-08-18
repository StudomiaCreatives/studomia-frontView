// https://github.com/diegohaz/arc/wiki/Atomic-Design  bgImage={<BgImage/>
import React from 'react'

import { LoginTemplate, LoginContent ,LogoImage} from 'components'


const LoginPage = () => {
  return (
    <LoginTemplate  logo={<LogoImage/>} content={<LoginContent/>}>    
    
     </LoginTemplate>
    //  footer={<Footer />}>
  )
}

export default LoginPage
