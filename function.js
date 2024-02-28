 //Regular function/function declration / functional statement
    // We are declaring the function using "function" keyword and then write the function name
     

// function prink (a,b){
//     var sum = a+b
//     console.log(sum)
// }
// prink(10,20)


// function prink (a,b){
//     var sum = a*b
//     console.log(sum);
// }
// prink(10,20);


//2nd type / functional expression/ anonymous function

// => when we pass a function into a variable that is know as functional expression
// anonymous function not have name

//when a assign a function in a variable 


// let prink = function (){
//     console.log("hello")
// }


// let sum = function (a,b){
//     console.log(a+b)
// }
// sum(10,20)
// prink()



// 3rd type 

// arrow function,
// its also called anonymous function because it is also not have a name.

// it is shown by =>


// let print =() =>{
//     console.log("arrow function")
// }


// let printSum = (a,b) =>{
//     console.log(a*b)
// }

// print();
// printSum(10,10)
// print();
// printSum(10,10)
// print();
// printSum(10,10)



// 4th type immediate invoked function expression (IIFE)


// (function(){
//     console.log("it is a IIFE")
// }) ()






//1st function declaration / function statement

// function moon(){
//     console.log("hello");
// }
// moon();

//2nd function expression / anonymous function

// let shivam= function(a,b){
//     console.log(a*b);
// }
// shivam(2,3);

//3rd arrow function

// let shivam = ()=>{
//     console.log("hello");
// }
// shivam();

//4th IIFE function /immediate invocked function expression

// (function(){
//     console.log("hello")
// })();



// function moon(){
//     console.log("hello friend");
// }


// function shivam(a,b  ){
//     moon();
//     console.log(a+b);
   
// }
// shivam(20,30,moon);






         // function sum(){
         //    var a = 5;
         //    var b = 10;
         //   let sum = a+b;
         //   return sum;
         // }
         // let r = sum()
         // console.log(r)




////// 1 min tk function chale har 2 min me code ko run kare //////

let currentTime = new Date().getTime();
console.log('Start Time:' , currentTime)
let count = 0
let updatedTime;
let r = setInterval(function sum(){
    updatedTime = new Date().getTime()
    if(updatedTime - currentTime <= 60000){
        console.log(count++)
    }
    else{
        console.log('Stop TIme: ', updatedTime)
        clearInterval(r)
    }
}, 2000)
