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

async function postCallWithBody() {
    const response = await fetch(
        "https://www.toptal.com/developers/postbin/1706261117587-5522551864851",
        {
            method: "POST",
            body: {
                username: "harkirat",
                password: "123223"
            },
            headers: {
                Authorization: "Bearer 123"
            }
        }
    )
    const textualData = await response.text();
    console.log(textualData);
}

async function callAxiosWithBody() {
    const response = await axios.post(
        "https://www.example.com/todos", {
            username: "harkirat",
            password: "12345",
        },
        {
            headers: {
                Authorization: "Bear 123"
            },
        },
    );
    console.log(response.data);
}