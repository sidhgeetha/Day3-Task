const obj1 = {
    name: "Person 1",
    age: 5,
  };
  
  const obj2 = {
    age: 5,
    name: "Person 1",
  };
  
   console.log(Object.keys(obj1))
  
  console.log(Object.keys(obj2))
  
  let key_exists = true;

if (Object.keys(obj1).length === Object.keys(obj2).length) {
  length_check = true;
}

if (length_check == true) {
  for (let key in obj1) {
    // key_exists = key in obj2 ? true : false;

    if (key in obj2) {
      key_exists = true;
    } else {
      key_exists = false;
    }

    console.log(key_exists);
    if (key_exists === false) break;
  }

  if (key_exists === true) {    
    console.log("Length and keys are Same");
  } else {
    console.log("Length is same but keys are not same");
  }
} else {
  console.log("Length is not same");
}