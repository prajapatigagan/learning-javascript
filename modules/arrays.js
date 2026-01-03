//create...
let arr=[1,2,3,4,5,6,7,8,9,10];
console.log(arr);

//position..
let ar=[1,2,3,4,5,6,7,8,9,10];
console.log(ar[5]);

//modified..
let ar1=[1,2,3,4,5,6,7,8,9,10];
ar1[5]=100;
console.log(ar1);


//push...
let ar2=[1,2,3,4,5,6,7,8,9,10];
ar2.push(11);
console.log(ar2);

//pop...
let ar3=[1,2,3,4,5,6,7,8,9,10];
ar3.pop(9);
console.log(ar3);

//shift...
//first value hati h
let ar4=[1,2,3,4,5,6,7,8,9,10];
ar4.shift();
console.log(ar4);

//unswift..
let ar5=[1,2,3,4,5,6,7,8,9,10];
ar5.unshift(0);
console.log(ar5);

//splice..
let ar6=[1,2,3,4,5,6,7,8,9,10];
ar6.splice(2,4);
console.log(ar6);

//slice..
let ar7=[1,2,3,4,5,6,7,8,9,10];
let array= ar7.slice(1,4);
console.log(array);

//reverse..
let ar8=[1,2,3,4,5,6,7,8,9,10];
ar8.reverse();
console.log(ar8);

//sort..
let ar9=[98,45,65,23,45,23,64,32,13,54,13,28,75];
let ab=ar9.sort(function(a,b){
  return a-b;
});
console.log(ab);

let ar10=[98,45,65,23,45,23,64,32,13,54,13,28,75];
let abc=ar10.sort(function(a,b){
  return b-a;
});
console.log(abc);


