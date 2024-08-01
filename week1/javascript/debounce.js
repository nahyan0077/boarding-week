// function debuncer(fuc) {
//     setTimeout(() => {
//         fuc(10, 20)
//     }, 2000);
// }

// function fuc(a, b) {
//     console.log(a + b);
// }

// debuncer(fuc)


function debounce(func, dalay) {
    let time
    return function (...args) {

        if (time) {
            clearTimeout(time)
        }

        time = setTimeout(() => {
            func()
        }, dalay)
    }
}


const handleClick = () => {
    console.log('iam the man');
}

const debouncedHandleClick = debounce(handleClick, 1000);