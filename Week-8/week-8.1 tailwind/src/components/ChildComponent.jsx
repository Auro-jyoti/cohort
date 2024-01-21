import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>
       Rendering From child component {console.log("child",props)}
    </div>
  )
}

export default ChildComponent;