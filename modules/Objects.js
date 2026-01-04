let obj={
  name:"Aman",
  age:22,
  job:"student",
  Address:"Gwalior",
};
let aa="name";
obj[aa]="Karan";
console.log(obj);


//Deep object..
const user={
  name:"gagan",
  age:22,
  Address:{
    city:"Gwalior",
    state:"MP",
    location:{
      lat:23.1,
      lng:45.45
    },
  },
};
console.log(user);
console.log(user.Address.location.lat);
let{lat,lng}=user.Address.location;
console.log(lat,lng);

//loops....
let obj1={
  name:"Aman",
  age:22,
  job:"student",
  Address:"Gwalior",
  email:"gagan121@gmail.com",
};
// for(let kay in obj1){
//   console.log(kay);
// }
for(let key in obj1){
  console.log(key,obj[key]);
}

//obkect-keys..
let obj2={
  name:"Aman",
  age:22,
  job:"student",
  Address:"Gwalior",
  email:"gagan121@gmail.com",
};
console.log(Object.keys(obj2));
console.log(Object.values(obj2));
console.log(Object.entries(obj2));


//coping object..
let obj3={
  name:"Aman",
  age:22,
  job:"student",
  Address:"Gwalior",
};

console.log(obj3);
let obj4={...obj3};
console.log(obj4);


//object.assign..
let obj5=Object.assign({},obj3);
console.log(obj5);
let obj6=Object.assign({price:100},obj3);
console.log(obj6);


//deep clone..(real copy)
let obje={
  name:"Aman",
  age:22,
  job:"student",
  Address:"Gwalior",
  email:{
    email1:"gagan121@gmail.com",
    email2:"gagan123@gmail.com",
  },
};

let obj7=JSON.parse(JSON.stringify(obje));
console.log(obj7);

//optional chaning..

let obje1={
  name:"Aman",
  age:22,
  job:"student",
  Address:"Gwalior",
  emails:{
    email1:"gagan121@gmail.com",
    email2:"gagan123@gmail.com",
  },
};

let obje2=obj?.email?.email1;
console.log(obje2);


//computer properties..

let role="intern";
let obje3={
  name:"Aman",
  age:22,
  job:"developer",
  Address:"Gwalior",
  email:"gagan121@gmail.com",
  [role]:"intern",
};
console.log(obje3);
