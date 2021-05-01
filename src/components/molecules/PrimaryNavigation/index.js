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
    font-weight: 300;
    color: ${palette('grayscale', 5)};/*2 */
    font-size: 1.25rem;
    &.active {
      color: ${palette('grayscale', 5)}; /*0 */
    }
  }

  li ::after{
        content:'';
        width: 0%;
        height: 2px;
        background:#f44336;
        display:block;
        margin:auto;
        transition:0.5s;
    }
    li:hover ::after{
        width:100%;
    }  

`

const PrimaryNavigation = (props) => {
  return (
    <Nav {...props}>
      <li><Tooltip position='bottom' align='end' data-title="home visit 😄" reverse><Link href="/" exact activeClassName="active">Home</Link></Tooltip></li>
      <li><Link to="/about" activeClassName="active">About</Link></li>
      <li><Link to="/course" activeClassName="active">Course</Link></li>
      <li><Link to="/blog" activeClassName="active">Blog</Link></li>

    </Nav>
  )
}

PrimaryNavigation.propTypes = {
  reverse: PropTypes.bool,
}

export default PrimaryNavigation
