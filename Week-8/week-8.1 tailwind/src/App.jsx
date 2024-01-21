import { useState } from 'react'
import './App.css';
import ParentComponent from './components/ParentComponent';

function App() {
  const user = {
    name: "jagruti",
    lastName: "hota",
  }
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <ParentComponent userData={user}/>
    </>
  );
}

export default App
