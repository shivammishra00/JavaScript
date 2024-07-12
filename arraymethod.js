                ///////////          Array Method         ////////////

//// => Array method is use to perform operation in array      

///////        (1) toString() method  .........//////
//// => tostring return  as it is same value it dose not change the original array...

// let array = ["ajay","rohit","mohit","shubham","manoj"];
// let newArr = array.toString();     ////...parenthesis lahga hi mtlb ki ye ek method hai
// console.log(newArr)              //// O/p=> ajay,rohit,mohit,shubham,manoj


//////////         (2) join() method     /////////////

  

////////            (1) push() method         ///////////

////  push method ka use karke last me new element ko add kiya ja sakta hai....

// let array = ["ajay","rohit","mohit","shubham","manoj"];
// array.push






////////////         (17) map()  method         //////////

// let arr = [4,5,2,8];
// let newArr = arr.map(function(itm,ind){
                ////// map method accept 1 cb and cb accept 2 parameter(itm, ind)
//    console.log(ind, itm)    
//    //  return itm+2
// })
// // console.log(newArr)
// // console.log(arr)


//////           EX 2 (array of object memap access karna)      ////////// 

// let originalArr = [{name:"A", age: 20},{name: "B", age: 32}]
// let newArr = originalArr.map(function(itm,ind){
//    console.log(itm.name, itm.age)
// })
// // console.log(originalArr) 
// // console.log(newArr)



//////========================   Math methods()  ================//////

//  --------------  Math.max --------------// 
// Array में सबसे बड़ी संख्या खोजने के लिए Math.max() का उपयोग
let numbers = [10, 5, 8, 12, 3];
let maxNumber = Math.max(...numbers);  // Spread operator का उपयोग करके array को arguments में बदलें
console.log("Maximum number:", maxNumber);  // Output: Maximum number: 12


//------------------- Math.min  -----------------------------//
// Array में सबसे छोटी संख्या खोजने के लिए Math.min() का उपयोग
let minNumber = Math.min(...numbers);
console.log("Minimum number:", minNumber);  // Output: Minimum number: 3



//-------------------   Math.sqrt  -----------------------------//
// Array में प्रत्येक संख्या का square root निकालने के लिए Math.sqrt() का उपयोग
let number2 = [4, 9, 16, 25];
let sqrtNumbers = number2.map(Math.sqrt);
console.log("Square roots:", sqrtNumbers);  // Output: Square roots: [2, 3, 4, 5]



let number3 = [4.7, 9.1, 16.4, 25.6];


//-------------------  Math.round  -----------------------------//
// Round method का उपयोग
let roundedNumbers = number3.map(Math.round);
console.log("Rounded numbers:", roundedNumbers);  // Output: Rounded numbers: [5, 9, 16, 26]


//-------------------   Math.ceil  -----------------------------//
// Ceil method का उपयोग
let ceilNumbers = number3.map(Math.ceil);
console.log("Ceiling numbers:", ceilNumbers);  // Output: Ceiling numbers: [5, 10, 17, 26]


//------------------- Math.floor  -----------------------------//
// Floor method का उपयोग
let floorNumbers = number3.map(Math.floor);
console.log("Floor numbers:", floorNumbers);  // Output: Floor numbers: [4, 9, 16, 25]




