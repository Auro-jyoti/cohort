import React from 'react'
import ChildComponent from './ChildComponent'

// eslint-disable-next-line react/prop-types
const ParentComponent = ({props}) => {

  return (
    <div>
        <ChildComponent  userData={props} />
    </div>
  )
}

export default ParentComponent