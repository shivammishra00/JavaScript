//////======== object create karne ke tarike ======///////////

// (1) object Literal 
let person = {
    name: "shiavm",
    city: "satna"
}

///  cunstructor banana hai /////
//2. Using Function Constructor  //
// jab function ya object apni self property access karte hai to this key word ka use karte hai ...
// ye ek sancha ban gaya 

// function Person(){
//     this.name = "mukesh"
//     this.city = "sagar"

function Person(a, b) {
    this.name = a
    this.city = b
}

// sabse pahle ek function create karke ek sacha create kar liya fir jis naam ka function constructoer hai same naame  ka use karke multiple object create kar liya. ab uske argument se multiple value send karege to same tarike ke object create hoge ...  

/// ab ek object create karna hai function Person ke jaisa banna chahiye to iska behavier function constructor jaisa rahega .. 

// pahle ek function constructer create kiye fir uske jaise dher sare new key word ka use object create kar diya ..

let p1 = new Person("mukesh", "sagar")  // argument se value pass kar rahe ..
let p2 = new Person("munna", "satna")
console.log(p1)
console.log(p2)




////////////////////======= (3) Class cunstructor  ============//////////////////
// function ki jagah class likh diya , curely bracket laga diya uske ander constructor likh diya

//  cunstructor is method it calls automatically when ever object is created 
class Person1 {
    constructor(a, b) {
        this.name = a
        this.city = b
    }
}

let p3 = new Person1("shivank", "sagar")
let p4 = new Person1("shashank", "satna")
console.log(p3)
console.log(p4)



///////////////////////=== (4) Using Object() Constructor ========///////////////////
// object ek redy med 
let p7 = new Object({ name: "raj", city: "bhopal" })
console.log(p7)


//////////// =========(5)  Using String () object constructor ======//////////////////

let p8 = new String("Dheerendre")
console.log(p8)

//////////////////// Promise constructor ///////////////////////////

let p9 = new Promise((resolve, reject) => {
    resolve("hello")
})
p9.then((result) => {
    return result
})
    .then((x) => console.log(x))

//////////////////// object baad me property add karna //////////////////////
// object me proerty add , modified , and delete kar sakte hai ...//
let p10 = {
    name: "vijay",
}
console.log('Original prop', p10)
p10.car = "BMW"
console.log("After adding property", p10)
p10.city = "Bhopal"
console.log("Modified", p10)
delete p10.car
console.log("After Delete car", p10)
