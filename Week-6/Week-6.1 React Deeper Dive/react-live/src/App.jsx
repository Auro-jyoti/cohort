import { useState } from 'react'
import React from 'react';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // const [title, setTitle] = useState("My name is Goldie")

  // function updateTitle() {
  //   setTitle("My name is "+ Math.random());
  // }

  return (
    <>
      <HeaderWithButton />
      <Header title="test"></Header>
      <Header title="Aurojyoti"></Header>
      <Header title="Aurojyoti"></Header>
      <Header title="Aurojyoti"></Header>
    </>
  );
}

function HeaderWithButton() {
  const [title, setTitle] = useState("My name is Goldie");

  function updateTitle() {
    setTitle("My name is " + Math.random());
  }
  return (
    <>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
      <Header title={title}></Header>
    </>
  );
}

// function Header({title}) {
//   return <div>
//     {title}
//   </div>
// }


const Header = React.memo(function Header({ title }) {
  return <div>{title}</div>;
});

export default App
