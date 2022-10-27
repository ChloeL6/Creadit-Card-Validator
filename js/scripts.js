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