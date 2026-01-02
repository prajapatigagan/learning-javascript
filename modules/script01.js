//operators...
//Airthmetic, comparison, logical, assignment, unary, ternary

//  +,_,*,/,%,**,++,--
// =,==,===
// >,<,>=,<=
// &&,||,!,!=,!==,!!
// ?:
// +=,-=,*=,/=,%=
let a=2;
let b=3;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
console.log(a++);
console.log(a--);

console.log(a==b);
console.log(a===b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

console.log(a&&b);
console.log(a||b);
console.log(!a);
console.log(a!=b);
console.log(a!==b);
console.log(!!a);
console.log(a?b:a);
console.log(a=="2");

console.log(a+=b);
console.log(a-=b);
console.log(a*=b);
console.log(a/=b);
console.log(a%=b);

//instanceof
//typeof

let s1="abc";
console.log(s1 instanceof String);
console.log(typeof s1);


//practice Question
let x=10;
let y=20;
if(x>5&&y<25){
  console.log("x is greater than 5 or y is less than 25");
}
else{
  console.log("x is less than 5 or y is greater than 25");
}

let admin=true;
let lockedin=false;
if(admin || lockedin){
  console.log("welcome");
}
else{
  console.log("not allowed");
}



let temp=35;
if(!(temp<30)){
  console.log("hot");
}
else{
  console.log("cold");
}


let i=0;
if(i){
  console.log("true");
}
else{
  console.log("false");
}


//turnary operator
let age=18n;
let canVote=age>=18?"yes":"no";
console.log(canVote);



let points =120;
let status=points>100?"gold": points>50?"silver": points>25?"bronze":"none";
console.log(status);



let loggedin=true;
let hastoken=false;
let access= loggedin && hastoken?"Allowed":"Denyed";
console.log(access);


let like=100;
function likes(){
  return like++;
  
}
console.log(likes());
console.log(like);

let liked=100;
function likees(){
  return ++liked;
  
}
console.log(likees());
console.log(liked);
