                                      ////loop////
///=> Java script loops are use to execute block of code repeatdly
///=> There are three type of loop
///=> (1) for loop  (2) while loop  (3) do while loop

/////////     (1) for loop    //////////////

// for(initilization, condition, increment/decrement){
//     console.log("shivam")
// }


/////////     (2) while loop     //////////////

// initilization
// while(condition){
//     console.log("shivam")
//     increment/decrement
// }



/////////     (3) do while loop     //////////////

// initilization
// do{
//     console.log("shivam")
//     increment/decrement
// }while(condition)



//  for (let i = 1; i < 6; i++){
//     console.log("hello")
//  }



//  for (let i = 1; i < 10; i++){
//     console.log(i)
//  }


// for (let i = 5; i < 11; i++){
//     console.log(i)
//  }


//odd number

//  for (let i = 1; i < 11; i=i+2){
//     console.log(i)
//  }


//even number

//  for (let i = 2; i < 11; i=i+2){
//     console.log(i)
//  }


//step 2 odd number

// let i=1;
// for( ; i<11; ){
//    console.log(i);
//    i=i+2;
// }



//step 2 even number

// let i=2          ///initialisation
// for (;i<11;){
//    console.log(i)
//    i=i+2        ///incrementation
// }



// let j=3;             ///initialisation
// while (j<16) {
//    console.log(j)
//    j=j+3             ///incrementation
// }




// let i=1;           ///initialisation
// do{
//    console.log(i);
//    i=i+2;          ///incrementation
// } while (i<1);





// let i=0;
// let arr=[15,5,16,3,14];
// do{
//    console.log(arr[i]);
//    i=i+1;
   
// }while (i<5);  




// let j=0;
// let arr2=[15,5,16,3,14,25,35,56];
// do
// {
//    if(arr2[j]%5===0)
//    console.log(arr2[j]);
//    j++;

// }while (j<arr2.length);


////////==========================================================================//////////////

let arr3 = [2,4,6,7,8,9];
for (ele of arr3){   
    console.log(ele)     /// for of loop /// print element one by one
}                        

for(ind in arr3){
    console.log(ind)     /// for in loop // print indwx one by one
}