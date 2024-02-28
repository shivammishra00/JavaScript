// let keys = ()=>{
//     console.log("hii")
// }
// let delay = 3000;
// setTimeout(keys,delay)


//======================================================================================///


// let sum = () =>{
//     console.log("hello")
// }
// setTimeout(sum, 2000)


///=====================================================================================//



// //// use script tag in html page ////
// let a = setTimeout(() => {
//     console.log("i am inside the setTime out")
// }, 3000);
// let b = prompt("do yo want to run the settimeout?")   
// if("n"==b){
//     clearTimeout(a)
// }
// console.log(a)




//===========================================================================================//


// ////  program to display time every 3 seconds
// function showTime() {
//     let dateTime= new Date();   // return new date and time
//     let time = dateTime.toLocaleTimeString();   // returns the current local time
//     console.log(time)
//     setTimeout(showTime, 3000);   // display the time after 3 seconds
// }
// showTime()    // calling the function

///===================================================================//

// let count = 0
// function sum(){
//     count+=1
//     console.log(count);
//     let r = setTimeout(sum,2000)
//     clearTimeout(r)
// }
// sum()