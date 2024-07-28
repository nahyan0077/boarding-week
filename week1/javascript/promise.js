function abc(x) {
    const prom = new Promise((res, rej) => {
        if (x == 10) {
            res("currect")
        } else {
            rej("rejected")
        }
    })
    return prom
}

abc(10).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})

async function acc() {

    try {
        let x = await Promise.race([abc(10), abc(12)]);
        console.log(x);
    } catch (error) {
        console.error(error);
    }
}
acc()
