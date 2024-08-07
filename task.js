// let array=[1,2,3,4,"5",6,"7","d"];
// // array[4]=5;
// // array[6]=7;
// array.pop()
// f = String(array)
//  console.log(f)


////===========================================================================////


let str = "I am from Bhopal India";
// Output1 => "aidnI lapohB morf ma I"
// Output2 => "I ma morf lapohB aidnI"
let Output1 = '';
console.log(str)
for(let i = str.length-1; i>=0; i--){
    Output1 += str[i]
}
console.log(Output1)       ////// reverse string...



let strArr = str.split(' ');
console.log(strArr)           //////  array me store karna with quote...

let result2 = '';
let newArr = [];
for(ele of strArr){
//  console.log(ele)
 for(let i = ele.length-1; i>=0; i--){
    result2 += ele[i]
 }
//  console.log(result2)
 newArr.push(result2)
 result2 = '';
}
console.log(newArr)
console.log(newArr.join(' '))


///////======================================================================//////////


// let input = 15;
// if(input % 3 ==0)
// console.log("x")

// if(input % 5 ==0)
// console.log("y")


/////////=================================================================////////////////



// var arr = [
//     "ram", "shyam",
//     {
//     letter: [
//         "a","b", "c","d",
//         {
//         name:"shivam",
//         address: "satna"
//     }
//  ]
// },
//  "mohan", 
// ];
// console.log(arr[2].letter[4].address)


/////////========================================================///////////////////
//////----Writer a program to remove duplicate elements from an array list-----///////

// function filterDuplicates(arr) {
//     return [...new Set(arr)];
//   }
//   const originalArray = [1, 2, 3, 4, 2, 3, 5, 6,6,6];
//   const uniqueArray = filterDuplicates(originalArray);
//   console.log(uniqueArray);
//   // Output: [1, 2, 3, 4, 5, 6]


//////==================================================================================///////

// const arr = [1, 2, 2, 3, 4, 4]
// const duplicateremove = [...new Set(arr)];
// console.log(duplicateremove)

//////====================================================================================//////

// let arr = 'hello';
// let newarr = arr.split('').reverse().join(' ');
// console.log(newarr)

/////////==============================================================================//////// 

// const reversedWords = 'Hello World'.split(' ').reverse().join(' ');
// console.log(reversedWords);

//////==================================================================================//////

// let arr = 'i am shivam'
// let newarr = '';
// for(let i=arr.length-1; i>=0; i--){
//     newarr += arr[i]
// }
// console.log(newarr)   //// reverse string...

// let s = arr.split(' ')
// console.log(s)  //////  array me store karna with quote...

// let arr1 = '';
// let arr2 = [];
// for(ele of s){
//     for(let i=ele.length-1; i>=0; i--){
//         arr1 += ele[i]
//     }
//     arr2.push(arr1)
//     arr1 = '';
// }
// console.log(arr2.join(' '))

//////=================================================================================///////


