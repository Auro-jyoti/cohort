import React, {createContext, useContext, useState} from 'react';

const DataContext = createContext({
    data: "Hello from the Parent Component",
    setData: () => {},
});

const ParentComponent = () => {
    const [data, setData] = useState("Hello from the parent component");

    return (
        <DataContext.provider value={{data, setData}}>
            <div>
                <p>Parent Component</p>
                <IntermediateComponent />
            </div>
        </DataContext.provider>
    )
};

const IntermediateComponent = () => {
    return (
        <div>
            <p>IntermediateComponent</p>
            <ChildComponent />
        </div>
    );
};

const ChildComponent = () => {
    const {data, setData} = useContext(DataContext);

    return (
        <div>
            <p>Received data : {data}</p>
            <button onClick={() => setData("Updated data from the child component")}>Update Data</button>
        </div>
    )
}

const ContextApi = () => {
    return (
        <div>
            <p>Context Api</p>
            <ParentComponent /> 
        </div>
    )
}

export default ContextApi;