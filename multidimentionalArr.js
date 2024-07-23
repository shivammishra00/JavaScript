
//=======================//  multidimensional array //========================//
                           // -------------------- //

// kisi array ke andar multiple array ko contain karna .. Multidimensional Array kahlata hai..

// Example 1. ====>>>

// declare three arrays
let student1 = ['Jack', 24];
let student2 = ['Sara', 23];
let student3 = ['Peter', 24];

// create multidimensional array......

// using student1, student2, and student3
let studentsData = [student1, student2, student3];

// print the multidimensional array
console.log(studentsData);

//== Output: [ [ 'Jack', 24 ], [ 'Sara', 23 ], [ 'Peter', 24 ] ]


//=================== Access Elements of an Array  =========================//
                    //----------------------------//
// You can access the elements of a multidimensional array using array indexes. For example,

let x = [['Jack', 24], ['Sara', 23], ['Peter', 24]];

// access the first item 
console.log(x[0]);  // [ 'Jack', 24 ]

// access the first item of the first inner array
console.log(x[0][0]);  // Jack

// access the second item of the third inner array
console.log(x[2][1]);  // 24

//==  Example 2 -->
//  -------------

let arr = [["a", "b"], ["c", "d"], ["e", "f"], ["g", "h"]];

///  array me loop access karna ....//
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}


///  array me nested loop access karna ....//
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j])
    }
}

///  forEach  loop ki madad se bhi access kar sakte the .....