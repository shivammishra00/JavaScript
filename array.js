// export let city=["bhopal","rewa","satna","narmadapuram"];
// console.log(city);
// console.log(city[2])


// //array distructring
// let [a,b,c,d]=city;
// console.log(b);



//array method
//city.push("jabalpur");
//console.log(city);


//city.pop();
//console.log(city);


//city.unshift("nagod");
//console.log(city);


//city.shift();
//console.log(city);


// let Students=[
//     {name:"Alice",score: 85},
//     {name:"Bob",score: 92},
//     {name:"Charlie",score: 78},
//     {name:"David",score: 95},
//     {name:"Dhavan",score: 75}
//     ];
//     let total =Students[0].score+ Students[1].score + Students[2].score+ Students[3].score+Students[4].score;
//     console.log(total);
//     console.log(total/5);



// //interview question
// let five = 8;
// let two = 2;
// let total = five + (five>6 ?  ++two:  --two);
// console.log(total)




//for remove alternet (using filter & call back)
// const arr= [1,3,6,7,8,9,4]   //outpot [1,6,8]  
// const remove = [3,7,9,4]
// const a = arr.filter((element)=>!remove.includes(element))
// console.log(a)



////     delete method //
// let book = ["math", "english", "science", "hindi", "sanskrit"];
// delete book[2]



// var arr = ["a", "b" ,"c", "d", "e"]
//  delete arr[1]
// console.log(arr)



//////    slice method
// let arr1=[1,2,3,4,5,6]
// let x = arr1.slice(0,4)



////   splice method   //////
// arr1.splice(index, how many remove, how many add itmet1,2,4..)
// arr1.splice(1, 4, "shivank")
// console.log(arr1)





////array of array
// let person = [["A","B"], ["X","Y"]]
// console.log(person.length)


////array of object, array and function
// const newData = [
//     {'task1': 'exercise'},
//     [1, 2 ,3],
//     function hello() { console.log('hello')}
// ];
// console.log(newData[2])


// let arr = ["math", "english", "hindi", "history"];
// arr.short()
// console.log(arr)


//=========================================================================================//


////--------  filter method
//// element ko filter karne ke liye filter method ka use karte hai , condition dekar element ko find karte.....

// let a= [5,3,9,10,11,15,17,21]
// let x = a.filter((element)=>{
//    return element>5
// })  //// 5 se jo jo jyada hoga vo print ho jayega
// console.log(x)


// let a= [5,3,9,10,11,15,17,21]
// let x = a.filter(element=>element%3===0)
// console.log(x)


//========================================================================================//


   ///////      map method      //////////
// let arr = [4,5,2,8];
// let newArr = arr.map(function(itm,ind){
//    console.log(ind, itm)    
//    //  return itm+2
// })
// // console.log(newArr)
// // console.log(arr)


         //////EX 2 => 
// let originalArr = [{name:"A", age: 20},{name: "B", age: 32}]
// let newArr = originalArr.map(function(itm,ind){
//    console.log(itm.name, itm.age)
// })
// // console.log(originalArr) 
// // console.log(newArr)


//=====================================================================================//


////rest operator
function fn(...data){
  console.log(data)
}
fn(1,2,3,4,5)
 
     
// let y = [1,2,3,4,5,6,7,8,9]   
// let [i,j,k,...q]= y    ///distructring a,b,c,d ki numbring se hi karege(...  rest operater hai)
// console.log(q)


//...........................................................................................//

//spred operator
// let data1 = [1,2,3,4,5,6]
// function fn(...data){
//     console.log(data)
//   }
//   fn(...data1)

//============================================================================================//



//       /////////    indexOf() method          ////////////
///--- indexOf() method se araye me kisi bhi element ka index find kar sakte hai.....

// const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// const index1 = fruits.indexOf('cherry'); // index1 will be 2
// const index2 = fruits.indexOf('grape');  // index2 will be -1
// console.log(index1)


//=======================================================================================//


// ////////     find()  method     ////////
//// find method keval ek element ko find karta or filter method multiapal value ko find karta hai........... 

// const numbers = [1, 5, 8, 10, 13, 18];
// const result = numbers.find(function (element) {
//   return element > 5;
// });
// console.log(result); // result will be 13


//===========================================================================================//


////////--------- reduse method   
///- reduse method argument me, call back or intialValue accept karta hai....
//--- intialValue means other koi value(0,1,2,3..) add karni ho ...
//-- callback accept 2 parameter which first one accumulator(previouse) and second one current
///- accumulator first value ko read karta hai and current => last value read karta hai...
//-- or first value initial Value bhi ho sakti hai........

////let newArr =  array.reduce(callback, initialValue);

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, cur) => {
//    // return acc
//    // return cur;
//    return acc+cur;
// },0);
// console.log(sum); // Output: 15


///////==========================================================================]