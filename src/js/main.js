
// code from the lesson
// function playGame(userChoice) {
//     const choices = ['кудук', 'кагаз', 'кайчы'];
//     const computerChoice = choices[Math.floor(Math.random() * 3)];
//     if (userChoice === computerChoice) {
//         // return 'тендик';
//         console.log('тендик');
//     }
//
//     if (
//         (computerChoice === 'кудук' && userChoice === 'кайчы') ||
//         (computerChoice === 'кагаз' && userChoice === 'кудук') ||
//         (computerChoice === 'кайчы' && userChoice === 'кагаз')
//     ) {
//         // return 'Сиз жендиниз!';
//         console.log('Сиз жендиниз!');
//     } else {
//         // return 'Сиз утулдунуз!';
//         console.log('Сиз утулдунуз!');
//     }
// }

// // tsk1
// const basketBall = {
//     price: 2095,
// };
// console.log(basketBall);
// basketBall.price = 2095 + 500;
// console.log(basketBall);
// // tsk2
// basketBall["delivery time"] = "3 days";
// console.log(basketBall);

// // tsk3
// const product1 = {
//     name: "basketball",
//     price: 2095,
// }
// const product2 = {
//     name: "socks",
//     price: 1090,
//
// }
// function comparePrice(num1,num2) {
//     let number1 = num1.price;
//     let number2 = num2.price;
//     if (number1 > number2) {
//         return num2
//     } else if (number1 < number2) {
//         return num1
//     } else {
//         return "equal"
//     }
// }
// console.log(comparePrice(product1, product2));

// // tsk4
// const product1 = {
//     name: "basketball",
//     price: 2095,
// }
// const product2 = {
//     name: "socks",
//     price: 1090,
// }
// const product3 = {
//     name: "basketball",
//     price: 2095,
// }
//
// const isSameProduct = (pd1,pd2) => {
//     let name1 = pd1.name;
//     let price1 = pd1.price;
//     let name2 = pd2.name;
//     let price2 = pd2.price;
//     if (name1 === name2 && price1 === price2) {
//         return true
//     } else {
//         return false
//     }
//     // return name1 === name2 && price1 === price2; // экинчи варианты
// }
// console.log(isSameProduct(product1, product2));
// console.log(isSameProduct(product1, product3));

// tsk5
// console.log("Good Morning".toLowerCase())
// console.log( "TESTING".toLowerCase())

// tsk6
// console.log('hello'.repeat(2));
// console.log('test'.repeat(3));

// tsk7
// console.log(document.querySelector('button'));
// console.log(document.querySelector('button').textContent);

// tsk8
// let btn = document.querySelector('.js-btn').textContent = "click me";
// // btn.textContent = "click here";

// tsk9
// 9 task is in the index.html file

// tsk10
// 10 task is in the src/images folder

// tsk11
// // tsk11.1
// localStorage.setItem('мой номер', '0222344562'); // добавляет в локал сторедж
// console.log(localStorage.getItem('мой номер'));
// localStorage.removeItem('мой номер'); // удаляет из локал сторедж
// localStorage.setItem('name','Jennifer lopes');
// console.log(localStorage);
// localStorage.removeItem('name');
// console.log(localStorage);
// // tsk11.2
// const product = {
//     name: "basketball",
//     price: 2095,
// }
// localStorage.setItem('product', JSON.stringify(product));
// console.log(localStorage);
// localStorage.removeItem('product');
// console.log(localStorage);
//
// // tsk11.3
// const person = {
//     name: "Jennifer",
//     surName: 'Lopes',
//     id: 1001,
// }
// document.body.innerText = (JSON.stringify(person, null, 2));

// tsk12
// let score = {
//     wins: 0,
//     losses: 0,
// }
// function playGame(userChoice) {
//     let computerChoice = Math.random();
//     if (computerChoice > 0.5) {
//         computerChoice = "orel";
//     } else {
//         computerChoice = "reshka";
//     }
//     if (userChoice === computerChoice) {
//         score.wins++
//     } else {
//         score.losses++
//     }
//     console.log(score);
//     document.body.innerText = JSON.stringify(score);
//     localStorage.setItem('score', JSON.stringify(score));
//     console.log(localStorage);
// }

// tsk13
// let counter = 0;
// let text = document.getElementById('text');
// text.textContent = `Card quantity ${counter}`;
// function showResult() {
//     text.classList.toggle('text_active');
// }
// function result(value) {
//     if (value.startsWith('add')) {
//         let increment = +value.slice(3) || 1;
//         if (counter + increment <= 10) {
//             counter += increment;
//         }
//     } else if (value.startsWith('remove')) {
//         let decrement = +value.slice(6) || 1;
//         if (counter - decrement >= 0) {
//             counter -= decrement;
//         }
//     }
//     text.textContent = `Card quantity ${counter}`;
// }

