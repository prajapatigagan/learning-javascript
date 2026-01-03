//BMI calculator..
 function bmi(weight,hight){
  return weight/(hight*hight);
 }
 console.log(bmi(60,1.8).toFixed(2));

 //discount calculator..
 function discountCalculator(discount){
  return function(price){
    return price*(discount/100)
  }

 }
let discounter= discountCalculator(10);
console.log(discounter(500));


//pure function to transform the value

function double(val){
  return val*2;
}
console.log(double(5));


//iife to isolate value..
(function(){
  const password="secret password";
  console.log(password);
})();

