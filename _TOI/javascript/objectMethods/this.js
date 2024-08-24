
  
  const person1 = {
    name: 'Nahyan',
    greetRegular: function() {
      console.log(`Regular: Hello, my name is ${this.name}`);
    },
    greetArrow: () => {
      console.log(`Arrow: Hello, my name is ${this.name}`);
    }
  };
  
  person1.greetRegular(); 
  person1.greetArrow();  