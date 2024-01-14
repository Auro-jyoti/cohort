/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState } from "react";
const ChildComponent = (props) => {
  return (
    <div>
      <p>Received props: {props.data}</p>
    </div>
  );
};

// eslint-disable-next-line no-unused-vars
const IntermediateComponent = (props) => {
  return (
    <div>
      <p>IntermediateComponent</p>
      <ChildComponent data={props.data} />
    </div>
  );
};

const ParentComponent = () => {
  const [data, setData] = useState("Hewllo from the parent component");

  return (
    <div>
        <p>Parent Component</p>
        <IntermediateComponent data={data} />
    </div>
  )
};

export const PropDrilling = () => {
    return (
        <div>
            <p>App Component</p>
            <ParentComponent />
        </div>
    )
}
