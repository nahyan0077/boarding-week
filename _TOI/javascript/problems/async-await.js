


async function myAsyncFunction() {
    return "Hello!";
}

myAsyncFunction().then(result => {
    console.log(result); // "Hello!"
});

function timer() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("timer");
        }, 3000);
    });
}

async function logger() {
    let x = await timer();
    console.log(x, "timer prints"); 
}

logger();

