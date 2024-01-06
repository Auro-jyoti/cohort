import { useState } from 'react'
import React from 'react';
import './App.css'
import Todo from './components/Todo';

function App() {
  // const [count, setCount] = useState(0)
  // const [title, setTitle] = useState("My name is Goldie")

  // function updateTitle() {
  //   setTitle("My name is "+ Math.random());
  // }
  let counter = 2;
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "go to gym",
      description: "bellly",
    },
    {
      id: 2,
      title: "go to class",
      description: "test",
    },
  ]);

  function addTodo() {
    setTodos([...todos, {
      id: counter++,
      title: "test",
      description: "no desc"
    }])
  }

  return (
    <>
      <HeaderWithButton />
      <Header title="test"></Header>
      <Header title="Aurojyoti"></Header>
      <Header title="Aurojyoti"></Header>
      <Header title="Aurojyoti"></Header>

      <button onClick={addTodo}>Add a todo</button>

      <div>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
          />
        ))}
      </div>
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
