// Q1
const sum = function (a, b) {
  
  return a+b;
};

//Q2

const average = function (a, b) {
  // TODO: Your code here
  let avg = (a + b) / 2;
  return avg;
};

//Q3 
const findFactorial = function (num) {
  // YOUR CODE HERE
  let sum;
  for (i = num; i>=0; i--) {
    sum = num * i;
    return sum;
  }
};

//Q4
const round = function (number) {
  // TODO: Your code here

  return Math.round(number);
};

// Q5

const toThePowerOf = function (base, exponent) {
  // TODO: Your code here
  return Math.pow(base, exponent);
};

// Q6 
const randomNumber = function () {
  // TODO: Your code here

  return Math.random();
};

//Q7 
const oneOrZero = function () {
  // TODO: Your code here
  return Math.floor(Math.random() * 1);


};

//Q8 
const randomRange = function (number) {
  // TODO: Your code here
  return Math.random() * number;
};

//Q9 
const includeOf = function (string, character) {
  // TODO: Your code here
  // without built-in function
  for (i = 0; i < string.length; i++) {
    if (string[i] == character) {
      return true;
    } else {
      return false;
    }
  }
};

// with a built-in function
const includeOf = function (string, character) {
  // TODO: Your code here

  return string.includes(character);
}






// ARRAYS exersices :

// Q1

const addToArray = function (array, string) {
  // TODO: Your code here
  array.push(string);
  return array;
};

//Q2 
const convertToString = function (array) {
  // TODO: Your code here
  return array.join(' ');
};

//Q3 
const updateOrCreate = function (array, value, index) {
  // TODO: Your code here

  if (index == null) {
    return console.log("there is no Ubdated in this box");
  } else {
    array.splice(index, 1, value);
    return array;
  }
};
//Q4 
const onlyString = function (array) {
  // TODO: Your code here
  let onlyStringArray = [];
  for (i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      onlyStringArray.push(array[i]);
    }
  }
  console.log(onlyStringArray);
};

//Q5 
const users = [
  ["Jane", "123456"],
  ["admin", "abc123"],
];

const login = function (username, password) {
  // TODO: Your code here
  for (i = 0; i < users.length; i++) {
    if (username === users[i][0] && password === users[i][1]) {
      console.log("login succefully");
      return;
    }
  }

  console.log("login failed! please try again ");
  return;
};

//Q6 

const maximumNumber = function (numbers) {
  // TODO: Your code here
    return  Math.max.apply(null, numbers);
  
}

//Q7 
  const reversString = function (string) {
    // TODO: Your code here
let reversedStr= string.split(' ');
reversedStr.reverse();
return reversedStr.join('');
  };

