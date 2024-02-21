// tsk1
// const showHello = () => {
//     alert('Hello World')
//     document.body.innerHTML = '<h1>Hello World</h1>'
// }
// showHello()

// tsk2
// const calculate = (num1,num2) => {
//     return num1 + num2
// }
// console.log(calculate(1,2))

// tsk3
// const calculate = (num1) => {
//     return num1 * num1
// }
// console.log(calculate(3))

// tsk4
// const showHello = () => {
//     let name = prompt('what\'s your name?');
//     alert('Hello '+name+'')
//     // alert(`Hello ${name}`)
// }
// showHello()

// tsk5
// const concatStr = (str1,str2) => {
//     return str1 + str2
// }
// console.log(concatStr('Michael ','Jackson'))

// tsk6
// const sortNum = (num) => {
//   return num % 2 === 0 ? 'even' : 'odd'
// }
// console.log(sortNum(1))

// tsk7
// const sortNum = (num1,num2) => {
//     return num1 > num2 ? num1 : num2
// }
// console.log(sortNum(5,3))


// tsk8
// const sortStr = (str) => {
//   return str.length
// }
// console.log(sortStr('hello'))

// tsk9
// const showNameAge = (n = prompt('what\'s your name?'),a = prompt('How old are you?')) => {
//     alert('Hello '+n+' you\'re '+a+'')
// }
// showNameAge()
// const showNameAge = () => {
//     let name = prompt('what\'s your name?');
//     let age = prompt('How old are you?');
//     alert('Hello '+name+' you\'re '+age+' years old')
// }
// showNameAge();

// tsk10
// const searchEn = (num) => {
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
// searchEn(prompt('Write your apartment number'));
// // searchEn(23);

// tsk11
// function calculator(num1, num2, operation) {
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
// alert(calculator(prompt('Enter first number'), prompt('Enter second number'), prompt('Enter operation')));


