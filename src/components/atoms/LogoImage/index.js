import React from 'react'

import logo from '../../../assets/images/new_logo_f.png'

let style1 = {      
	position: 'absolute',
	width: '147.667px',
	height: '50px',
	left: '136.334px',
	top: '35px',
	overflow: 'visible'

                    };

const LogoImage = props => <img alt="Logo" {...props} src={logo} style={style1}/>

export default LogoImage
