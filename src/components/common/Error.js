import React from 'react'

import Section from '../layout/Section'
import MessageContainer from './styles/MessageContainer'

const Error = (props) => {
  const { error, noStyle } = props

  let errorMessage
  if(typeof error === 'string') {
    if(error.includes('Rate Limit Exceeded')) {
      errorMessage = 
        `Looks like we've hit our max API calls (50 per hour)... Try later`
    }
    
    if(error.includes('401')) {
      errorMessage = 
        `Hmmm... Unsplash says we're unauthorized, check the token / access credentials`
    }
  }
  
  if(noStyle) 
    return <span data-test='unstyled-error'>Oops: {errorMessage || error.message || error}</span>

  return (
    <Section>
      <MessageContainer {...props}>
        <span data-test='styled-error'>Oops: {errorMessage || error.message || error} 🤷‍♂️</span>
      </MessageContainer>
    </Section>
  )
}

export default Error