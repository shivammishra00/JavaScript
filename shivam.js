
let promise = new Promise((resolve, reject) => {
  let num = "11";
  if (num === "10") {
    resolve("promise resolve")
  }
  else {
    reject("promise reject")
  }
})
promise.then((data) => {
  return data;
})
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    console.log("shivam is a good boy")
  })