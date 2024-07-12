////////////function  constructor ///////
function Person(a, b) {
    this.name = a
    this.city = b
}

let p1 = new Person("mukesh", "sagar")  // argument se value pass kar rahe ..
let p2 = new Person("munna", "satna")
console.log(p1)
console.log(p2)
p1.car="BMW"
console.log(p1)
Person.prototype.car = "TATA"
console.log(p1.__proto__.car)
console.log(p2.__proto__.car)


////////////  class cunstructor    ////////////
//class have the two member  -- datamembet dusra member 
///  name me mohit store kiya to data member

////parrent class hai 
class Human{
    constructor(c){
        this.name = c
    }
    sum(){
        console.log("This is sum function")
    }
}

class Child extends Human{
   constructor(name){
    console.log("This is child constructor")
    super(name)              //// parrent class
   }
}
let p3 = new Human("jaggu")
console.log(p3)
p3.sum()

let p4 = new Child("Rohit")
console.log(p4)
p4.sum()