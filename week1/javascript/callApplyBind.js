let obj1 = {
    name: "nahyan",
    age: 24,
    present: function (text, salary) {
        console.log(`${this.name} is present ------>${text}  , ${salary}`);
    },
}
let obj2 = {
    name: "ajmal",
    age: 21
}


obj1.present("sd", "sdf")

obj1.present.call(obj2, 23, 56)
obj1.present.apply(obj2, [23, 56])

let x = obj1.present.bind(obj2, 34, 567)
x();

function fullName(lastName) {

    console.log(this.name + " " + lastName);
}

fullName.call(obj1, "mp")