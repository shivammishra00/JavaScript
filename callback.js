              //////////////////call back function///////////////////  
/// when we passes a function as an argument in an another function that is know as call back function.


// function first(){
//     console.log("hello world")
// }
                 
// function sum(a,b,callback){
//                  ////recieve
//     console.log(a+b)
//     callback()         ////---- yaha call kar rahe
   
// }

// sum(10,20,first)     ////yaha argument through pass kar rahe

////recieve hum kisi bhi name se kar sakte hai par send(pass) usi name se karege jis name se hamara function



        //  function add(){
        //     console.log("hello")
        //  }

        //  function sum (callback){
        //     console.log("hii")
        //     callback()
        //  }
        //  sum(add)
         



// let sum = (a,b)=>{
//     return a+b
// }

// function f2(){
//     console.log("this is f2 function")
//     console.log(sum(10,20))
// }
// f2(sum)



function f1 (){
    console.log("hii")
}
function f2 (){
    console.log("hello")
}
function f3 (x){
    console.log("byy")
    x()
}
f3(f1)
f3(f2)