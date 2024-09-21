// === 4. Interface Segregatioin Principle (ISP) ===


// not following ISP
//Here class is forcing to implement interfaces that don't use
class workers {
    work() {}
    eat() {}
    sleap() {}
}

//follwing ISP

class Work {
    work() {}
} 

class Eat {
    eat() {}
}

class Sleep {
    sleep() {}
}

class Workers implements Work, Eat,Sleep {
    work() {}
    eat() {}
    sleep() {}
} 