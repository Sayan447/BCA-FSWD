// closure
// array and map filter reduce, foreach  method
// this keyword zz7 intro to DOM manipulation

// let a = 20
// function callme(a){
//     let test = function(){
//         console.log(2 * a);
//     }
//     return test;
// }

// callme(3 * a)();

// The pattern callme()() in JavaScript is called a function chaining pattern or function currying, depending on the context.








// another question
// let a = 20;

// function callme(a){
//     let test = function(){
//         let test2 = function(){
//             console.log(2 * a);
//         };
//         return test2;
//     };
//     return test;
// }

// callme(3 * a )()()



// higher order function
// let f2 = function(x1,x2){
//     console.log("hello everyone1");
//     x1(x2);
//     // f3(f4);
// }
// let f3 = function(y2){
//     console.log("hello everyone2");
//     y2();
//     // f4();
// }
// let f4 = function(){
//     console.log("hello everyone3");
// }

// let f1 = function(f2 ,f3 , f4){
//     f2(f3,f4);
// }

// inside a function , calling another function  that is called higher order function (f1) and f2 f3 , f4 is callback fucntion


// another question

// function callme(func){
//     let a = function(){
//         return 'Hello Hi'
//     }
//     func();
//     return a;
// }

// function f1(){
//     console.log('I am function');
// }

// console.log(callme(f1)());
// console.log(a);
// a is not defined


// let ,const block scope
// var context scope






// ARRAY
// array is the index collection placed in contiguous memory location
// we can store homoginious and hetrojinious

// let arr = [10 , 20 , 36 , 59]
// array bring some predefined APIs or function in js such as foreach,map,reduce,filter.

// foreach is function in js

// you can directly use forEach with an inline arrow function

// arr.forEach((ele)=>{
//     console.log(ele);
// })

// or

// arr.forEach(ele)

// function ele(i){
//     console.log(i);   
// }

// 10 20 36 59

// with arrow function

// define the callback function
// let k = (ele)=>{
//     console.log(ele);   
// }
// pass the callback function to foreach
// arr.forEach(k)



// let arr = [45,87,9,365,68]

// arr.forEach((ele,index,arr)=>console.log(ele , '---->' , index , '---->' , arr )
// );

// 45 ----> 0 ----> [ 45, 87, 9, 365, 68 ]
// 87 ----> 1 ----> [ 45, 87, 9, 365, 68 ]
// 9 ----> 2 ----> [ 45, 87, 9, 365, 68 ]
// 365 ----> 3 ----> [ 45, 87, 9, 365, 68 ]
// 68 ----> 4 ----> [ 45, 87, 9, 365, 68 ]




// MAP


// map and filter return new array
// let arr = [45,87,9,365,68]
// let g = arr.map((ele)=>{
//     return ele + 5
// })
// console.log(g);
// [ 50, 92, 14, 370, 73 ]
// if we use foreach here
// g.forEach((ele)=>{
//     console.log(ele);  
// })
// 50
// 92
// 14
// 370
// 73





// filter
let arr = [45,87,9,365,68]

let f = arr.filter((ele)=>{
    return ele > 50
})
console.log(f);
// [ 87, 365, 68 ]
