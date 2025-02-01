// nodejs is runtime environment
// nodejs use v8 engine
// another environment is  BUN same as node


// let a = 20
// function callme(){
//     let a = 30
//     console.log(a,b);
// }
// // scope chainging in js
// let b = 90
// callme()



// two types of hoisting: 1)fully hoisting is for functions
                        //2) partial hoisting is for let , const , var


// partial hoisting:- Variable  which are decleared with let,const keywords will be intialized with 'undefined' value during creation phase
// fully hoisting:-  Variable  which are decleared with function keyword will be  initialised with it's actual  value during the creation phase itself



// function callme(){
//     let a = 1;
//     let x = function(){
//         console.log(2 * a);
//     }
//     x();
// }
// let a = 78
// callme()
// output:- 2



// let obj1 = {
//     name: "BCA",
//     age:'3',
//     location: 'WB'
// }
// let obj2 = obj1
// obj2.location = 'india'
// console.log(obj1.location , obj2.location);







// function sum(a,b){
//     let c = a + b;
//     return c;
// }
// let result = sum(3 , 4)
// console.log(result);
// or************
// console.log(sum(10,20));

// we want this anonymus function 
// let sum = function(a,b){
//     // let c = a + b
//     return a + b
// }

// console.log(sum(20,30));


// convert it arrow function

// let sum = (a,b) =>{
//     return a + b
// }

// or***********

let sum = (a,b) =>  a+b;
console.log(sum(2,7));
