
//tsk1
// for (let i = 0; i <= 100; i++){
//     console.log(i)
// }

//tsk2
// for (let i = 0; i <= 100; i++){
//     if (i % 2 === 0){
//         console.log(i)
//     }
// }
// for (let i = 0; i <= 100; i += 2){
//     console.log(i)
// }

//tsk3
// let sum = 0;
// for (let i = 0; i <= 100; i += 2) {
//     sum += i;
// }
// console.log(sum);

//tsk4
// const numbers = [10, 20, 30];

// tsk5
// const getLastValue = (arr) => {
//     return arr[arr.length - 1];
// }
// console.log(getLastValue([1,20,22,24,5]));
// console.log(getLastValue(['hello','hello','good']));

// tsk6
// for (let i = 5; i >= 0; i--) {
//     console.log(i);
// }

// tsk7
// let i = 0;
// while (i <= 100) {
//     console.log(i);
//     i++;
// }

// tsk8
// let i = 0
// while (i <= 100){
//     if (i % 2 === 0){
//         console.log(i)
//     }
//     i++
// }

// tsk9
// let arr = [1,2,3]
// let newArr = []
// for (let i = 0; i < arr.length; i++){
//     newArr = [...newArr, arr[i] + 1]
// }
// console.log(newArr)

// tsk10
// const addNum = (arr,num) => {
//     for (let i = 0; i < arr.length; i++){
//         arr[i] += num
//     }
//     return arr
// }
// console.log(addNum([1,2,3], 2));
// console.log(addNum([1,2,3], 3));
// console.log(addNum([-2,-1,0 ,99], 2 ));

// tsk11
// const arrStr = ['hello','world','search' ,'good'];
// // const arrStr = ['not' ,'found'];
// for (let i = 0; i < arrStr.length; i++){
//     if (arrStr[i].includes('search')){
//         console.log(arrStr.indexOf('search'))
//     }else {
//         console.log('not found')
//     }
// }
//
// const findWord = (arr, word) => {
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i].includes(word)){
//             return arr.indexOf(word)
//         }
//     }
//     return -1
// }
// console.log(findWord(['hello','world','search' ,'good'], 'search'));
// console.log(findWord(['not' ,'found'], 'search'));

// tsk12
// const countPositive = (arr) => {
//     let result = 0
//     for (let i= 0; i < arr.length; i++){
//         if (arr[i] > 0){
//             result++
//         }
//     }
//     return result
// }
// console.log(countPositive([1,-3,5]))
// console.log(countPositive([-2,3,-5,7,10]))

// tsk13
// const removeEgg = (arr,str) => {
//     let result = []
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] === str){
//             continue
//         }else {
//             result = [...result, arr[i]]
//         }
//     }
//     return result
// }
// console.log(removeEgg(['egg','apple','egg','ham'],'egg'))

// tsk14
// const findIndex = (arr,word) => {
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i].includes(word)){
//             return arr.indexOf(word)
//         }
//     }
//     return -1
// }
// console.log(findIndex(['green','red','blue','red'], 'red'))
// console.log(findIndex(['green','red','blue','red'], 'yellow'))

// tsk15
// const addArr = (arr1,arr2) => {
//     let result = 0
//     for (let i = 0; i < arr1.length; i++){
//         result = [arr1[0] + arr2[0], arr1[1] + arr2[1], arr1[2] + arr2[2]]
//     }
//     return result
// }
// console.log(addArr([1,1,2], [1,1,3]))
// console.log(addArr([1,2,3] , [4,5,6]))

// tsk16
// const minMax = (nums) => {
//     let result = 0
//         result = {
//             min: Math.min(...nums),
//             max: Math.max(...nums)
//         }
//     return result
// }
// console.log(minMax([1,-3,5]) )
// console.log(minMax([-2,3,-5,7,10]))

// tsk17
// const countWords = (arr) => {
//     let result = {};
//     for (let i = 0; i < arr.length; i++){
//         if (result[arr[i]]) {
//             result[arr[i]]++;
//         } else {
//             result[arr[i]] = 1;
//         }
//     }
//     return result;
// }
// console.log(countWords(['apple','grape','apple','apple']));