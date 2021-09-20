console.log('hello');
// alert('js testing')

// variable
var b = 'smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber);

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

// function greetings(){
//    var name = prompt('what is your name ?');
//     var result = 'Hello' + name;
//     console.log(result);
// }
// greetings();

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

console.log(fruits[2]);

fruits[0] = 'pear';
console.log(fruits);

for(let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}

// array common methods
console.log('to string', fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits.pop(), fruits); // removes last item
console.log(fruits.push('blackberries'), fruits);
fruits[fruits.length]

// objects in javascript

let student = {
    first:'rafeh',
    last: 'Qazi',
    age:25,
    height:170, 
    studentInfo: function(){
      return this.first + '\n' + this.last;
    }
};

// console.log(student.first);
// console.log(student.last);

student.age++;
console.log(student.age);

console.log(student.studentInfo());

switch(6){
  case 0:
    text = 'weekend';
    break;
  case 5:
    text = 'weekend';
  case 6:
    text = 'weekend';
  default:
    text = 'weekday';
}
console.log(text);