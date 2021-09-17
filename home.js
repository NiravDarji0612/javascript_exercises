console.log('hello');
// alert('js testing')

// variable
var b = 'smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber);

// var age = prompt('what is your age?');
// document.getElementById('someText').innerHTML= age;

var num1 = 10;
num1++;
num1--;
console.log(num1);

// Functions
// function fun(){
//     alert('this is a function')
// }

// fun();

function greetings(){
    var name = prompt('what is your name ?');
    var result = 'Hello' + name;
    console.log(result);
}
greetings();

var num = 0;
  while(num < 100){
    num += 1;
    console.log(num);
  }

let fruit = 'banana\napple';
console.log(fruit);

// array
let fruits = ['banana', 'apple', 'orange', 'pineapples'];
fruits = new Array('banana', 'apple', 'orange', 'pineapples');

alert(fruits[1]);