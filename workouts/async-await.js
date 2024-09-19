

async function fetchData() {
    const [error, response] = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    if (error) {
        console.log(error);
        return
    }
    
    const [e, data] = await response.json()
    if (e) {
        console.log(e);
        return
    }
    return data
}

fetchData()