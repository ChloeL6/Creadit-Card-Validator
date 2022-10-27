## Tests
1. Starting on the right and moving left, double every other digit, starting from second number.

2. If the result of the doubled digit is a double digit number, add together each digit of the double digit number.

3.sum all of the digits in the new transformed set of numbers.

4. If the resulting number ends in a zero, the card number is valid. 

5. If the number does NOT end in a zero, the card number is NOT valid. In our case, the credit card number is NOT valid.

A valid number: 4102080860435620
An invalid number: 4102080880435621
```
Describe: cardValidator();

Test1: Split numbers into array
Code: 
num = "35"
cardValidator();
Expected Output: ['3', '5']; 

Test2:  Convert strings to numbers
Code: 
num = "35"
cardValidator();
Expected Output: [3, 5]; 

Test3:  Double second number 
Code: 
num = "35"
cardValidator();
Expected Output: [3, 10]; 

Test4:  If second number is equal or greater than 10, add 1st index to 2nd index.
Code: 
num = "35"
cardValidator();
Expected Output: [3, 1]; 

Test5: Choose every other number in inputted string
Code: 
num = "4102080860435620"
cardValidator();
Expected Output: [4,2,0,4,0,7,0,7,6,0,4,6,5,3,2,0]; 

Test6: Get the sum of inputted numbers
Code: 
num = "4102080860435620"
cardValidator();
Expected Output: 50; 

Test7: If last number of sum is 0
Code: 
num = "4102080860435620"
cardValidator();
Expected Output: "valid";

Test8: If last number of sum is NOT 0
Code: 
num: "4102080880435621"
cardValidator();
Expected Output: -1;
```
