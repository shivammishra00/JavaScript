fetch("https://jsonplaceholder.typicode.com/users")
 .then((data)=>{
     let newData = data.json
     return newData
 })