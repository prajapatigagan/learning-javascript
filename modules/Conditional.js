//conditinal statement Questions

function getgrade(score){
  if(score>=90 && score<=100)return "A";
  else if(score>=80 && score<=89)return "B";
  else if(score>=70 && score<=79)return "C";
  else if(score>=60 && score<=69)return "D";
  else if(score>=33 && score<=59) return "E";
  else if(score>=0 && score<=32) return "F";
  else{
    return invelidmarks;
  }
}
console.log(getgrade(32));



//rock paper scissor

function game(user,computer){
  if(user===computer) return "draw";
  if(user==="rock" && computer==="scissor") return "user";
  if(user==="paper" && computer==="rock") return "user";
  if(user==="scissor" && computer==="paper") return "user";
  else return "computer";
}
console.log(game("rock","paper"));


//switch case 
let r=4;
switch(r){
 case 1:
    console.log("one");
  break;
  case 2:
    console.log("two");
  break;
  case 3:
    console.log("three");
    break;
    case 4:
      console.log("four");
      break;
      default:
        console.log("invalid");
}