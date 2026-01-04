// question 1..
let fruits=["apple","banana","mango"];
fruits[1];
console.log(fruits[1]);


//2..
let fruits1=["apple","banana"];
fruits1.push("mango");
fruits1.unshift("painapple");
console.log(fruits1);

//3..
let fruits2=["apple","banana"];
fruits2.pop(1);
fruits2.push("Kivi");
console.log(fruits2);

//4 remove the last element
let A=[1,2,3,4,5];
A.pop();
console.log(A);

//5 add element
let colours=["green","yellow"];
colours.splice(1,0,"red","blue");
console.log(colours);

//6 Extract 3 mid element
let B=[1,2,3,4,5];
let newarr= B.slice(1,4);
console.log(newarr);

//7 sort arr names.
//type first
let Name=["ramu","shyam","gagan","karan","aman"];
Name.sort();
console.log(Name);

//assanding order
let Name1=Name.sort(function(a,b){
  return a.localeCompare(b);
})
console.log(Name1);

//desanding order..
let Name2=Name.sort(function(a,b){
 return b.localeCompare(a);
})
console.log(Name2);

//use .map squre of each element
let C=[1,2,3,4,5];
let d=C.map(function(val){
  return val*val;
})
console.log(d);

//use .filter greater then 3
let E=[1,2,3,4,5];
let F=E.filter(function(val){
  return val>3;
})
console.log(F);


//.reduce sum of all element
let G=[1,2,3,4,5];
let H=G.reduce(function(a,b){
  return a+b;
})
console.log(H);

//.some check any student blow 35.
let I=[34,45,56,76,12,23];
let J=I.some(function(val){
  return val<35;
})
console.log(J);

//check any number even
let K=[34,45,56,76,12,23];
let p=K.every(function(val){
  return val%2===0;
})
console.log(p);