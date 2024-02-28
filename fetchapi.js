
fetch('https://jsonplaceholder.typicode.com/users')  ///...fake api url
 .then((data)=>{     ////..ye method hai jo ki promise return karta hai
  let newData = data.json()  ///..data ko json formet me convert karta hai
  return newData
 }).then((result)=>{
     console.log(result)
 })
 
