/*
  We will use this file to add the Code that you will learn in JS-Core Class 1
  Update this file, then run it from the console using the command:

  node class-exercises.js
*/

console.log('Hello World. I just started learning JavaScript!');
console.log('My name is Islam Dudaev');
console.log('I like coding..');
console.log(28);

/*
console.log(typeof 'Hello world!');
console.log(typeof 6);
console.log(typeof false);
*/


//var city = 'Glasgow';
//console.log(city);


/*
var courseName = 'Code Your Future';
var courseDuration = 6;
var isHard = false;

console.log(typeof courseName);
console.log(typeof courseDuration);
console.log(typeof isHard);
*/



/*
var isHappy = true;

if (isHappy === true) {
  // if I am happy, print "Hello world!"
  console.log('Hello world!');
} else {
  // if I am sad, print a frowny face
  console.log(':(');
}
*/




/*
var number = 6;

if (number % 2 === 0) {
  // the number is even
  console.log('even');
} else {
  // the number is odd
  console.log('odd');
}
*/



/*
var number = 3;

if (number > 0 && number%2 === 0) {
  console.log('positive even');
} else if(number > 0 && number%2 === 1) {
  console.log('positive odd');
} else if(number < 0 && number%2 === 0){
  console.log('negative even');
} else {
  console.log('negative odd');
}
*/



// ---------- Loops ------------ //

/*
for (var i=1; i <= 100; i++) {
  if(i % 2 === 0){
    console.log(i);
  }
}
*/

// divisible by 5 - way 1
/*
for (var i=1; i <= 100; i++) {
  if(i % 5 === 0){
    console.log(i);
  }
}
*/

// divisible by 5 - way 2
/*
for (var i=0; i <= 100; i=i+5) {
    console.log(i);
}
*/




/*
var sum = 0;
for (var i=1; i<=100; i++){
  sum = sum + i; // or sum += i
}
console.log(sum);
*/



/*
function multiply (x, y){
  return x * y;
}
console.log(multiply(3, 4));
*/



/*
function sumBetween(a, b){
  var sum = 0;
  for (var i = a; i <= b; i++){
    sum += i;
  }
  return sum;
}
console.log(sumBetween(1, 100));
*/

