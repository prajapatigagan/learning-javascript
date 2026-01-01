var a=8;
{
  var a=9;
  console.log("inside",a);
}
console.log("outside",a);



let b=8;//block scope,global scope
{
  let b=9;
  console.log("inside",b);
}
console.log("outside",b);

//works of datatypes arrays

let ab=[1,2,3];
let ba=ab;
ba.pop();
ab.pop();
ab.push(4);
ba.push(5);
console.log(ab);
console.log(ba);

//symbol ->unique immutable value

let s1=Symbol("a");
let s2=Symbol("a");
console.log(s1==s2);

let obj={
  uid:1,
  name:"gagan",
  age:20,
  email:"gagangmail.com",  
}
let u1=Symbol("uid");
obj[u1]="001";
console.log(obj);

//bigint ->number of large size
let h=1234567899987654n;
h=h+4n;
console.log(h);

//Daynamic typing-> js me static typing nhi hai yha pr hai daynamic typing

let f=12;
console.log(f);
f="gagan";
console.log(f);
f=true;
console.log(f);
f=[1,2,3];
console.log(f);
f=null;
console.log(f);
f=undefined;
console.log(f);


//type conversion
//number->string
let s=String(123);
console.log(s);
//string->number
let n=Number("123");
console.log(n);
//string->boolean
let p=Boolean("123");
console.log(p);

let l="gagan";
f="56"+1;
console.log(f);

//truly and falsely
let g=0;
console.log(!!g);