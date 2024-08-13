function fetchData (){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("promise resolved")
        }, 3000);
    })
}

async function getData() {
    try {
        let data = await fetchData()
        console.log(data);
        
        return data
    } catch (error) {
        return error
    }
}

getData()
