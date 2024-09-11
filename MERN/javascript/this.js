function myName() {
    console.log(this);
}

// myName()

const obj = {
    print: function (){
        console.log(this);
        
    },
    print1: () => {
        console.log(this);
    }
}

obj.print()
obj.print1()

let bind = myName.bind(obj)
bind()

