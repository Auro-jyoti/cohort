function main() {
    fetch("https://sum-server.100xdevs.com/todos").then(async (response) => {
        const json = await response.json(); 
        console.log(json.todos.length);
        await response.text();
    })
}

async function mainTwo() {
    const response = await fetch("https://sum-server.100xdevs.com/todos");
    const json = await response.json(); 
    console.log(json.todos.length);
}

main();
mainTwo();