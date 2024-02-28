let apiURL = 'https://jsonplaceholder.typicode.com/users';
async function myWork(){
    let data = await fetch(apiURL)            ////jo functin promise return kare uske pahle awit 
                                              // use kar lo

    let finalData = await data.json()
    console.log(finalData)
}
myWork()





// let apiURL = 'https://jsonplaceholder.typicode.com/users';
// async function myWork(id){
//     let data = await fetch(`${apiURL}/${id}`)     ////.. id ko params me pass kiya 
//     let finalData = await data.json()
//     console.log(finalData)
// }
// myWork(1)