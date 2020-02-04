import React from 'react'

import HeartIcon from './styles/HeartIcon'

const Heart = (props) => (
  <HeartIcon
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24"
    {...props}
  >
    <path 
      d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"
      fill="none"
      stroke="white"
      strokeWidth="1.2" 
    />
  </HeartIcon>
)

export default Heart