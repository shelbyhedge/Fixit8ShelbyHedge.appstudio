/*
Create a function named Calculate 
that takes 2 parameters , 
adds them together, and 
returns the answer to the program where it is 
stored in a variable named 'summedNumbers'. 
In the main program, get two numbers from the user, 
then call the function with the two numbers. 
Output this to the console:

The sum of X and Y is Z.     
(where X  and Y come from the user, 
and Z is the sum  from the function). 
*/
var X = Number(prompt("enter a number to represent X"))
var Y  = Number(prompt("enter a number to represent Y"))
function Calculate(X, Y) {
  return X + Y;
}


