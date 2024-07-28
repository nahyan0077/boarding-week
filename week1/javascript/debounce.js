function debuncer (fuc) {
    setTimeout(() => {
        fuc(10,20)
    }, 2000);
}

function fuc (a,b) {
    console.log(a + b);
}

debuncer(fuc)