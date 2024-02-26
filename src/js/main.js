// // tsk1
// const car = {
//       brand: 'Toyota',
//       model: 'Camry',
//       year: 1996
// }
//
// // tsk2
// console.log(car.year);
//
// // tsk3
// car.year = 2022;
// console.log(car.year);
//
// // tsk4
// car.color = 'red';
// console.log(car);
//
// // tsk5
// delete car.model;
// console.log(car);
//
// // tsk6
// car.displayInfo = function() {
//     console.log(`Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}, Color: ${car.color}`);
// };
// car.displayInfo();
//
// // tsk7
// const person = {
//     name: 'Michael',
//     address: {
//         street: '123 Main St',
//         city: 'New York'
//     }
// };
//
// // tsk8
// const obj1 = {
//     name: 'John',
//     age: 30
// };
//
// const obj2 = {
//     name: 'John',
//     age: 30
// };
//
// console.log(obj1 === obj2); // выведет false
// // потому что объекты сравниваются по ссылке, а не по значению
// // чтобы сравнить объекты по значению, нужно сравнивать их свойства
// console.log(obj1.name === obj2.name && obj1.age === obj2.age); // выведет true
//
// // tsk9
// let newProp = 'weight';
// car[newProp] = 5000;
// console.log(car);
//
// // tsk10
//
// // first way
// // let newCar = Object.assign({}, car);
// // console.log(newCar);
// // or
// // let newCar = {...car}; // это укороченная запись Object.assign (spread operator)
//
// // second way
// //               2             1
// let newCar = JSON.parse(JSON.stringify(car)); // 1 сначала преобразуем объект в строку,1 а затем обратно в объект (происходит глубокое копирование)
// // жалпак тил менен  айтканда обьектти сындырып кайра чогултабыз
// // таким способом мы можем создать копию объекта, которая будет независима от оригинала
// // если мы изменим новый объект, то оригинал останется без изменений
// console.log(newCar);
//
//
// // tsk11
// const createStudentId = (name, age) => {
//     return {
//         name: name,
//         age: age,
//     };
// }
// console.log(createStudentId('John', 30));
//
//
// // tsk12
// let person1 = createStudentId('John', 30);
// const editStudent = (value) => {
//     value.name = 'Michael';
//     value.age = 25;
//     return value;
// }
//
// console.log(editStudent(person1));
//
// // tsk13
// function createAnimal(type, sound) {
//     return {
//         type: type,
//         sound: sound
//     };
// }
//
// // использование фабричной функции
// let dog = createAnimal('Dog', 'Gav');
// console.log(dog);
//
// let cat = createAnimal('Cat', 'Meow');
// console.log(cat);

// на заметку: я использовал почти на всех задачах переменную car, для того чтобы не было ошибок он должен быть всегда некомментированным

