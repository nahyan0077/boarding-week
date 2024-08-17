function factoryFUnc(name, age) {
    return {
        name,
        age,
        greet: function () {
            console.log(name + " ---> " + age);
        }
    }
}

console.log(factoryFUnc("nahyan",24));
