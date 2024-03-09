// tsk1
// const user = {
//     id: 1,
//     first_name: "Garrott",
//     last_name: "Eberdt",
//     email: "geberdt0@wp.com",
//     gender: "Male",
//     ip_address: "49.230.15.110",
//     isAdmin: true,
// };
// let {id,firstName,lastName,email,gender,ipAddress,isAdmin} = user;

// tsk2
// const animals = ["apple", "banana", "lemon", "kiwi", true];
// let [apple,banana,lemon,kiwi,isAnimal] = animals

// tsk3
// const workers = [
//     {
//         id: 1,
//         name: "Emile",
//         lastname: "Van Weedenburg",
//         email: "evanweedenburg0@technorati.com",
//     },
//     {
//         id: 2,
//         name: "Orv",
//         lastname: "Gretton",
//         email: "ogretton1@about.me",
//     },
// ];
// let [firstUser,secondUser] = workers

// tsk4
// const add = () =>{
//     console.log(2+3)
// }
// add()
// add()

// tsk5
// function runTwice(func) {
//     func()
//     func()
// }
//
// runTwice(function() {console.log('12b')});
// runTwice(add)

// tsk6
// let moveBtn = document.querySelector('#btn6')
// moveBtn.addEventListener('click',()=>{
//     moveBtn.textContent = 'Loading'                         // tsk7
//     setTimeout(()=>{
//         moveBtn.textContent = 'Finished'
//     },2000)
// })

// tsk8
// let addBtn = document.querySelector('#btn8')
// let textArea = document.querySelector('.area')
// addBtn.addEventListener('click',()=>{
//     textArea.innerHTML += `<p class="status">Added</p>`
//     let status  = document.querySelector('.status')
//     setTimeout(()=>{
//         status.textContent = ''
//     },2000)
// })

// tsk9
// setInterval(function() {
//     let messages = ["Hello, world!", "Good morning!", "Have a nice day!"];
//     let randomIndex = Math.floor(Math.random() * messages.length);
//     document.title = messages[randomIndex];
// }, 5000);

// tsk10
// const computers = [
//     {
//         title: 'MackBook Air M1',
//         price: 85000
//     },
//     {
//         title: 'Dell',
//         price: 65000
//     },
//     {
//         title: 'Asus ZenBook',
//         price: 40000
//     },
//     {
//         title: 'Acer Aspire',
//         price: 45000
//     },
// ]
//
// let comPrise = 0
// for (let i = 0; i < computers.length; i++){
//     comPrise += computers[i].price
// }
// console.log(comPrise)
//
// function getComputerSum(arr) {
//     let compPrice = 0
//     for (let i = 0; i < computers.length; i++){
//         compPrice += computers[i].price
//     }
//     return compPrice
// }
//
// console.log(getComputerSum(computers))


