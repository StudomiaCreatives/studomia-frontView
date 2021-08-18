// https://github.com/diegohaz/arc/wiki/Atomic-Design  bgImage={<BgImage/>
import React from 'react'

import { EditProfileTemplate, EditProfileContent ,LogoImage} from 'components'

const EditProfilePage = () => {
  return (
    <EditProfileTemplate  logo={<LogoImage/>} content={<EditProfileContent/>} >  
    
     </EditProfileTemplate>
  )
}

export default EditProfilePage
