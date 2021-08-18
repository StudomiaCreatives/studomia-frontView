import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Link ,Tooltip} from 'components'

const Nav = styled.nav`
  display: flex;
  justify-content:flex-end;
  list-style: none;
  > :not(:first-child) {
    margin-left: 1rem;
  }
    
  a {
    font-weight: bold;
    color: #2A32F2; /*${palette('grayscale', 5)}; */  /*2 */
    font-size: 1.25rem;
    &.active {
      color: ${palette('grayscale', 5)}; /*0 */
    }
    font-family: Segoe UI;
    font-style: normal;
    text-transform: capitalize;
    margin-left:50px;
  
  }

  
  // li ::after{
  //       content:'';
  //       width: 0%;
  //       height: 2px;
  //       background:#000;/*#f44336;*/
  //       display:block;
  //       margin:auto;
  //       transition:0.5s;
  //   }
  //   li:hover ::after{
  //       width:100%;
  //   }  

    li span {
          border:0px solid #000;
          border-radius: 20px;
          padding: 10px;
          background-color:#2A32F2;
          color:#fff;
         // margin-left:20px;
         
    }

`

const PrimaryNavigation = (props) => {
  return (
    <Nav {...props}>
      <li><Tooltip position='bottom' align='end' data-title="home visit 😄" reverse><Link href="/" exact activeClassName="active">Home</Link></Tooltip></li>
      <li><Link to="/about" activeClassName="active">Teach-with-Us</Link></li>
      <li><Link to="/course" activeClassName="active">Login</Link></li>
      <li><Link to="/blog" activeClassName="active"><span>Get Started</span></Link></li>
      {//<li><Link to="/register" activeClassName="active">Register</Link></li>
      }

    </Nav>
  )
}

PrimaryNavigation.propTypes = {
  reverse: PropTypes.bool,
}

export default PrimaryNavigation
