import axios from "axios";

async function main() {
    const response = await fetch("https://sum-server.100xdevs.com/todos");
    const json = await response.json();
    console.log(json.todos.length);
}

// axios version of the same code : 
// much more cleaner code

// get request 
async function main() {
    const response = await axios.get("https://sum-server.100xdevs.com/todos");
    console.log(response.data.todos.length);
}


async function postCall() {
  const response = await fetch("https://sum-server.100xdevs.com/todos", {
    method: "POST",
  });
  const json = await response.json(); 
  console.log(json.todos.length);
}

async function axiosPostCall() {
    const response = await axios.delete("https://sum-server.100xdevs.com/todos");
    console.log(response.data.todos.length);
}