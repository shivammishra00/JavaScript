// console.log("1. Shivank")
// setTimeout (()=>{
//     console.log("2. Ram")
// },2000)



// let promise = new Promise(function(resolve,reject){
//     let goodDeveloper = true;
//     if(goodDeveloper){
//         setTimeout(()=>{
//             resolve("subscribe")
//         },1000)
//     }
//     else{
//         reject("follow")
//     }
// });
//   promise.then((res)=>{
//         console.log(res)
//   }).catch((err)=>{
//     console.log(err)
//   })
// console.log("5. hii")






// let promise = new Promise(function(resolve,reject){
//        let num = "10";
//        if(num===10){
//             resolve("shivank is live in kolar")
//        }
//        else{
//         reject("shashank is live in kolar")
//        }
// });
// promise.then((res)=>{
//     console.log(res)
//     // return res;
// }).then(()=>{
//     console.log("hiiiii")
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("hellooo")
// }) 


// fetch("https://jsonplaceholder.typicode.com/users")
//  .then((data)=>{
//     let finalData = data.json()
//     return finalData;
//  }).then((result)=>{
//     console.log(result);
//  })


let apiURL = 'https://jsonplaceholder.typicode.com/users';
async function myWork(){
    let data = await fetch(apiURL)            ////jo functin promise return kare uske pahle awit 
                                              // use kar lo

    let finalData = await data.json()
    console.log(finalData)
}
myWork()
