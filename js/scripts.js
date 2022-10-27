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