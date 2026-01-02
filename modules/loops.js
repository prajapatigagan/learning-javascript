//loops....
//do while loop
let i=0;
do{
  console.log(i);
  i++;
}
while(i<10);


//while loop
let j=0;
while(j<10){
  console.log(j);
  j++;
}

//for loop
for(let k=0;k<10;k++){
  console.log(k);
}

//break
for(let r=0;r<50;r++){
  if(r===45)
    break;
  console.log(r);
}

//continue
for(let s=0;s<50;s++){
  if(s===45)
    continue;
  console.log(s);
}


//Questions...

for(let t=0;t<=10;t++){

  console.log(t*5);
}

//even number

for(let u=0;u<=10;u++)
{
    if(u%2==0)
      console.log(u);
   
}

//odd number
for(let u=0;u<=10;u++)
{
    if(u%2==1)
      console.log(u);
}

//sum of even number
let sum=0;
for(let v=0;v<=10;v++)
{
    if(v%2==0)
      sum+=v;
   
}
console.log(sum);


//even odd are both
for(let w=0;w<=10;w++){
  if(w%2==0){
    console.log("even",w);
  }
  else{
    console.log("odd",w);
  }
}

//use for break for some numbers
let count=0
for(let g=0;g<102;g++){
  if(g%2==1){
    count++;
    console.log(g);
  }
  if(count==5){
    break;
  }
}



//prectic
for (let num = 1; num <= 100; num++) {
  let isPrime = true;

  if (num < 2) {
    isPrime = false;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime) {
    console.log(num + " Prime");
  } else if (num % 2 === 0) {
    console.log(num + " Even");
  } else {
    console.log(num + " Odd");
  }
}
