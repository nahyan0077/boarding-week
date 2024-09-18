function debounce(func, delay) {
    let timer;
    return function () {
        clearTimeout(timer)
        timer = setTimeout(func, delay);
    }
}

const debFunc = () => {
    console.log("hello deb");
    
}

const closure = debounce(debFunc, 3000)

closure()
closure()
closure()
closure()
