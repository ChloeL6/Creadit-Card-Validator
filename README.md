## Tests
1. Starting on the right and moving left, double every other digit, starting from second number.

2. If the result of the doubled digit is a double digit number, add together each digit of the double digit number.

3.sum all of the digits in the new transformed set of numbers.

4. If the resulting number ends in a zero, the card number is valid. 

5. If the number does NOT end in a zero, the card number is NOT valid. In our case, the credit card number is NOT valid.

A valid number: 4102080860435620
An invalid number: 4102 0808 8043 5621
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
num = "3589"
cardValidator();
Expected Output: [3, 1, ]; 
```
