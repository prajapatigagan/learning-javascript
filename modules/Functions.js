//1...

function firstProcess(){
  console.log("first process");
}

firstProcess();


//2...
//function expression..
let ftf=function(){
  console.log("I am fine");
}
ftf();


//3...
// fat arrow function
let fta=()=>{
  console.log("I am good");
}
fta();


//4...
//perameter

function dance(name)
{
  console.log(`${name} is dancing`);
}
dance("Arun");
dance("Ravi");
dance("Vijay");

function ab(a1,a2){
  console.log(a1+a2);
}
ab(10,20);

//5...
//default parameter
function abc(a=1,b=2){
  console.log(a+b);
}
abc();


//6...
//rest parameter...

function abcd(...non){
  console.log(non);
}
abcd(1,2,3,4,5,6,7,8,9,10);
function abcd(a,b,c,...non){
  console.log(a,b,c,non);
}
abcd(1,2,3,4,5,6,7,8,9,10);


//return..

function a(g){
  return 10+g;
}


let b=a(8);
console.log(b);


//first class function...

let c=function s(){
  console.log("I am better");
}
c();

function abcde(k){
  k();
}
abcde(function(){
  console.log("I am best");
})


//high order function
function fgf(){
  return function(){
    console.log("hay I am gagan");
  }
}
fgf()();

//pure function

let t=9;
function pure(){
  console.log("hhhhyyyyee");
}
pure();

//impure function
function impure(){
  t++;
  console.log(t);
}
impure();


//closure...

function clouser(){
  let t=9;
  return function(){
    console.log(t);
  }
}
clouser()(); 

//iife..
(function(){
  console.log("I am good");
})();

//hoisting difference between diclation and expression...
klj();
function klj(){
  console.log("I am the best");
}



//question..
function ghj(val){
  val();
}
ghj(function(){
  console.log("I am good");
}
);