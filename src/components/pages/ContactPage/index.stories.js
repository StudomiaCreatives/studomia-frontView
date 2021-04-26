// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { ContactPage } from 'components'

storiesOf('ContactPage', module)
  .add('default', () => (
    <ContactPage />
  ))