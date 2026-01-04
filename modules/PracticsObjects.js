let obj={
  name:"gagan",
  age:22,
  isEnrolled:true,
  }
  console.log(obj);

  //check the key number or boolean

  obj1={
    true:"yes",
    43:"answer"
  };
  console.log(obj1[43]);
  console.log(obj1[true]);
  

  //Access the first-value from the object

  const obj2={
    "first-name":"Aman abc", 
  }
  console.log(obj2["first-name"]);


  //given the daynamic key let key ="age,how will you access user[key]?

  let="age";
  const user={
    age:22,
  }
  console.log(user.age);
  
  //print the value of lat

  const user1={
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
  console.log(user1.Address.location.lat);


  //distrubuted the city and lat from the location object above..

  const user2={
    name:"gagan",
    age:22,
    city:"Gwalior",
      location:{
        lat:23.1,
        lng:45.45
      },
  
  };
  let {city}= user2;
  console.log(city);
  let {lat}= user2.location;
  console.log(lat);

  //use for in loop all the print of value

  const course={
    title:"javascript",
    price:"free",    
  };
  for(const key in course){
    console.log(course[key]);
  }


  //use Object.entries to print all the key value as..

const course1={
    title:"javascript",
    price:"free",    
  };
  console.log(Object.entries(course1));



  //copy the spread operator

  const Original={a:1,b:2};
    const copy={...Original};
    console.log(copy);
    
    
    //chage the real value

    const obj3={
      info:{
        score: 90,
      },
    };
    const clone={...obj3};
    const a=clone.info.score=100;
    console.log(obj3.info.score);