import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'

import {HomePage, SamplePage, NotFoundPage ,ContactPage} from 'components'

// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    // font-family: 'Montserrat', sans-serif;
     font-family: 'Poppins', sans-serif;
  }
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/sample-page" component={SamplePage} />
       <Route path="/contact" component={ContactPage} /> 
        <Route component={NotFoundPage} />
        
      </Switch>
    </ThemeProvider>
  )
}

export default App
