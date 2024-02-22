// tsk1
// function showHello() {                                                             //declaration function
//     // alert('Hello World')
//     document.body.innerHTML = '<h1>Hello World</h1>'
// }
// showHello()
//
// const showHello = function () {                                                   //expression function
//     document.body.innerHTML = '<h1>Hello World</h1>'
//     // alert('Hello World')
// };
//
// const showHello = () => {                                                          //arrow function
//     // alert('Hello World')
//     document.body.innerHTML = '<h1>Hello World</h1>'
// }
// showHello()

// tsk2
// function calculateFunc(num1,num2) {                                                        //declaration function
//     return num1 + num2
// }
//
// const calculateFunc = function (num1,num2) {                                               //expression function
//     return num1 + num2
// };
//
// const calculateFunc = (num1,num2) => {                                                      //arrow function
//     return num1 + num2
// }
// console.log(calculateFunc(1,2))

// tsk3
// function calculateFunc(num) {                                                        //declaration function
//     return num * num
// }
//
// const calculateFunc = function (num) {                                               //expression function
//     return num * num
// };
//
// const calculateFunc = (num) => {                                                      //arrow function
//     return num * num
// }
// console.log(calculateFunc(3))

// tsk4
// function showHello() {                                                             //declaration function
//     let name = prompt('what\'s your name?');
//     alert('Hello '+name+'')
//     // alert(`Hello ${name}`)
// }
// showHello()
//
// const showHello = function () {                                                   //expression function
//     let name = prompt('what\'s your name?');
//     alert('Hello '+name+'')
//     // alert(`Hello ${name}`)
// };
//
// const showHello = () => {                                                          //arrow function
//     let name = prompt('what\'s your name?');
//     alert('Hello '+name+'')
//     // alert(`Hello ${name}`)
// }
// showHello()

// tsk5
// function concatStr(str1,str2) {                                                             //declaration function
//     return str1 + str2
// }
//
// const concatStr = function (str1,str2) {                                                   //expression function
//     return str1 + str2
// };
//
// const concatStr = (str1,str2) => {                                                          //arrow function
//     return str1 + str2
// }
// console.log(concatStr('Michael ','Jackson'))

// tsk6
// function sortNum(num) {                                                             //declaration function
//   return num % 2 === 0 ? 'even' : 'odd'
// }
//
// const sortNum = function (num) {                                                   //expression function
//   return num % 2 === 0 ? 'even' : 'odd'
// };
//
// const sortNum = (num) => {                                                          //arrow function
//   return num % 2 === 0 ? 'even' : 'odd'
// }
// console.log(sortNum(1))

// tsk7
// function sortNum(num1,num2) {                                                             //declaration function
//     return num1 > num2 ? num1 : num2
// }
//
// const sortNum = function (num1,num2) {                                                   //expression function
//     return num1 > num2 ? num1 : num2
// };
//
// const sortNum = (num1,num2) => {                                                          //arrow function
//     return num1 > num2 ? num1 : num2
// }
// console.log(sortNum(5,3))

// tsk8
// function sortStr(str) {                                                             //declaration function
//   return str.length
// }
//
// const sortStr = function (str) {                                                   //expression function
//   return str.length
// };
//
// const sortStr = (str) => {                                                          //arrow function
//   return str.length
// }
// console.log(sortStr('hello'));

// tsk9
// function showNameAge() {                                                             //declaration function
//     let name = prompt('what\'s your name?');
//     let age = prompt('How old are you?');
//     alert('Hello '+name+' you\'re '+age+' years old')
// }
//
// const showNameAge = function () {                                                   //expression function
//     let name = prompt('what\'s your name?');
//     let age = prompt('How old are you?');
//     alert('Hello '+name+' you\'re '+age+' years old')
// };
//
// const showNameAge = () => {                                                          //arrow function
//     let name = prompt('what\'s your name?');
//     let age = prompt('How old are you?');
//     alert('Hello '+name+' you\'re '+age+' years old')
// }
// showNameAge();
// // second variant
// // const showNameAge = (n = prompt('what\'s your name?'),a = prompt('How old are you?')) => {
// //     alert('Hello '+n+' you\'re '+a+'')
// // }
// showNameAge();

// tsk10
// function searchEn(num) {                                                             //declaration function
//     if (num <= 20 && num >= 1){
//         alert('your entrance is first')
//     } else if (num <= 48 && num >= 21){
//         alert('your entrance is second')
//     } else if (num <= 90 && num >= 49){
//         alert('your entrance is third')
//     } else {
//         alert('The apartment number is incorrect')
//     }
// }
//
// const searchEn = function (num) {                                                   //expression function
//     if (num <= 20 && num >= 1){
//         alert('your entrance is first')
//     } else if (num <= 48 && num >= 21){
//         alert('your entrance is second')
//     } else if (num <= 90 && num >= 49){
//         alert('your entrance is third')
//     } else {
//         alert('The apartment number is incorrect')
//     }
// };
//
// const searchEn = (num) => {                                                          //arrow function
//     if (num <= 20 && num >= 1){
//         alert('your entrance is first')
//     } else if (num <= 48 && num >= 21){
//         alert('your entrance is second')
//     } else if (num <= 90 && num >= 49){
//         alert('your entrance is third')
//     } else {
//         alert('The apartment number is incorrect')
//     }
// };
// searchEn(prompt('Write your apartment number'));
// // searchEn(23);

// tsk11
// function calculator(num1, num2, operation) {                                                             //declaration function
//     switch(operation) {
//         case '+':
//             return +num1 + +num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/':
//             if(num2 !== 0) {
//                 return num1 / num2;
//             } else {
//                 return 'Error: Division by zero is not allowed';
//             }
//         default:
//             return 'Error: Operation not supported';
//     }
// }
//
// const calculator = function (num1, num2, operation) {                                                   //expression function
//     switch(operation) {
//         case '+':
//             return +num1 + +num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/':
//             if(num2 !== 0) {
//                 return num1 / num2;
//             } else {
//                 return 'Error: Division by zero is not allowed';
//             }
//         default:
//             return 'Error: Operation not supported';
//     }
// };
//
// const calculator = (num1, num2, operation) => {                                                          //arrow function
//     switch(operation) {
//         case '+':
//             return +num1 + +num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/':
//             if(num2 !== 0) {
//                 return num1 / num2;
//             } else {
//                 return 'Error: Division by zero is not allowed';
//             }
//         default:
//             return 'Error: Operation not supported';
//     }
// };
// alert(calculator(prompt('Enter first number'), prompt('Enter second number'), prompt('Enter operation')));


