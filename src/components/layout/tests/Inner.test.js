import React from 'react'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'

import theme from '../../../globalstyles/theme'
import { findByTest } from '../../../test/testUtils' 
import Inner from '../Inner'

const init = () => mount(
  <ThemeProvider theme={theme}>
    <Inner />
  </ThemeProvider>
)

test('Renders component without crashing', () => {
  const wrapper = init()
  const component = findByTest(wrapper, 'component-inner')
  expect(component.exists()).toBe(true)
})
