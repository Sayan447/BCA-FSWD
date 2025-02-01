// let str = "  Bengal  Coding Academy    "
// console.log(str.trim());



let str = "Bengal Coding Academy"
// charAt()----------
console.log(str.charAt(0));
console.log(str.charAt(str.length-1))
console.log(str.charAt(str.length))

// concat()-----

// let a = "hello"
// let b = "world"

// console.log(a + b);
// let c = a.concat(b)
// console.log(c);


// indexof()
// console.log(a.indexOf('l'));
// console.log(a.lastIndexOf('l'));


// Array[]
// 1. Linear DS
// 2. Homogeneous / Heterogenous
// 3. Indexed Collection Element
// 4.Contiguous Memory
let arr = [10 , 30 , 50 , 'hello world' , [1 , 2 , 3] , false , true]

console.log(arr[4]);
console.log(arr[4][1]);


let arr1 = [[1,2,3],[4,5,6],[7,8,9]]
console.log(arr1[1][1]);
console.log(arr1[2][2]);




// object --> is a user defined data type
let a = {
    name: 'BCA',
    age : 2,
    courses : ['FSWD','placement' , 'data science'],
    location : 'Kolkata',
    isvirtual: true,
    // training : function task(){
    //     console.log('I am teaching js');
        
    // }
};

console.log(a.age);
console.log(a.name);
console.log(a.courses[1]);

