//Example=1

let age=15;
if(age>=18){
  console.log("eligible for vote");
}
else{
  console.log("not eligible for vote");
}


//Example=2

age=27;
if(age>=18){
  console.log("eligible for vote");
}
else{
  console.log("not eligible for vote");
}


//Example=3


let per=30;;
if(per>=33){
    console.log("pass");
}
else{
  console.log("fail");
}



//Example=4

let hindi=40;
let english=60;
let math=90;
let science=89;

let sum=hindi+english+math+science;
per=sum/4;

if(per<33){
  console.log("fail");
}

else
if(per<45){
  console.log("third division");
}

else
if(per<60){
  console.log("second division");
}

else{
    console.log("first divisi");
}
    


//Example=5


age=15;
hasVoterCard="no";

if(age>=14 && hasVoterCard == "yes"){
    console.log("you can vote");
}

else
if(age>=14 && hasVoterCard == "no"){
    console.log("get your voter id card");
}

else{
  console.log("you cannot vote");
}