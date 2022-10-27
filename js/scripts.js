// Test1: Split numbers into array
// Code: 
// num = "35"
// cardValidator();
// Expected Output: ['3', '5']; 

const num = "35";

function cardValidator(num) {
  return num.split("");
}

// Test2:  Convert strings to numbers
// Code: 
// num = "35"
// cardValidator();
// Expected Output: [3, 5]; 

const num = "35";

function cardValidator(num) {
  const numArray = num.split("");
  return numArray.map(Number);
}

function cardValidator(num) {
  const numArray = num.split("");
  return numArray.map(function(num) {
    return parseInt(num);
  });
}

// Test3:  Double second number 
// Code: 
// num = "35"
// cardValidator();
// Expected Output: [3, 10]; 

const num = "35";

function cardValidator(num) {
  const numArray = num.split("");
  let newArray = numArray.map(Number);
  newArray[1] *= 2;
  return newArray;
}

// Test4:  If second number is equal or greater than 10, add 1st index to 2nd index.
// Code: 
// num = "35"
// cardValidator();
// Expected Output: [3, 1]; 

const num = "35";

function cardValidator(num) {
  const numArray = num.split("");
  let newArray = numArray.map(Number);
  newArray[1] *= 2;

  if (newArray[1] >= 10) {
    let stringNum = newArray[1].toString();
    newArray[1] = Number(stringNum[0]) + Number(stringNum[1]);
  }
  return newArray;
} 

// Test5: Choose every other number in inputted string
// Code: 
// num = "4102080860435620"
// cardValidator();
// Expected Output: [4,2,0,4,0,7,0,7,6,0,4,6,5,3,2,0]; 

const num = "4102080860435620";

function cardValidator(num) {
  const numAr = num.split("");
  let newAr = numAr.map(Number);
  
  for (let i = 1; i < num.length ; i+=2) {
    newAr[i] *= 2;
    if (newAr[i] >= 10) {
      let stringNum = newAr[i].toString();
      newAr[i] = Number(stringNum[0]) + Number(stringNum[1]);
    }
  }
  let sumAr = newAr.reduce((previousNum, currentNum) => previousNum + currentNum);
  return sumAr;
}

// Test6: Get the sum of inputted numbers
// Code: 
// num = "4102080860435620"
// cardValidator();
// Expected Output: 50; const num = "4102080860435620";
const num = "4102080860435620";

function cardValidator(num) {
  const numAr = num.split("");
  let newAr = numAr.map(Number);
  
  for (let i = 1; i < num.length ; i+=2) {
    newAr[i] *= 2;
    if (newAr[i] >= 10) {
      let stringNum = newAr[i].toString();
      newAr[i] = Number(stringNum[0]) + Number(stringNum[1]);
    }
  }
  let sumAr = newAr.reduce((previousNum, currentNum) => previousNum + currentNum);
  return sumAr;
}
// Test7: If last number of sum is 0
// Code: 
// num = "4102080860435620"
// cardValidator();
// Expected Output: "valid";

const num = "4102080860435620";

function cardValidator(num) {
  const numAr = num.split("");
  let newAr = numAr.map(Number);
  
  for (let i = 1; i < num.length ; i+=2) {
    newAr[i] *= 2;
    if (newAr[i] >= 10) {
      let stringNum = newAr[i].toString();
      newAr[i] = Number(stringNum[0]) + Number(stringNum[1]);
    }
  }
  let sumAr = newAr.reduce((previousNum, currentNum) => previousNum + currentNum);
  if (sumAr % 10 === 0) {
    return "valid";
  }
}

// Test8: If last number of sum is NOT 0
// Code: 
// num: "4102080880435621"
// cardValidator();
// Expected Output: -1;