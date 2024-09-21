// == 2 == OPEN / CLOSE PRICIPLE (OCP)

// Functions should be open for extension but closed for modification. 
// This means you can extend the behavior of a function without modifying its existing code.

const roles = ["user", "admin"]

function checkRole(role) {
    if (role == 'user') {
        return true
    }else{
        return false
    }
}

//if you want to add new role dont modify the existing code use another funciton for it

const addRole = (role) => {
    roles.push(role)
    console.log("new role added ", role);
}


//another example

//doesnt follow
function calculateDiscount(user) {
    if (user.type === 'student') {
      return 10;
    } else if (user.type === 'seasonal') {
      return 20;
    }
    return 0;
  }

//this follows  
const discountStrategies = {
    student: () => 10,
    seasonal: () => 20,
    default: () => 0,
  };
  
  function calculateDiscount(user) {
    const discount = discountStrategies[user.type] || discountStrategies.default;
    return discount();
  }
  
//


//class example 

//its doesnt follow 
class Discount {
    getDiscount(type){
        if(type == 'onnam'){
            return 30
        }else if (type == 'vishu'){
            return 10
        }else {
            return 0
        }
    }
}

//this can be written like this

class Discount {
    getDiscount(){
        return 0
    }
}

class Onam extends Discount{
    getDiscount(){
        return 30
    }
}
class Vishu extends Discount{
    getDiscount(){
        return 10
    }
}