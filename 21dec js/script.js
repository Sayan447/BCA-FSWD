// console.log("good morning");

// var
// let and const


var a = 10

// console.log(a);

// typeof(typeof(anything)) --> string
console.log(a,typeof(a), typeof(typeof(a)));
// 10 'number' 'string'


var b = String(a)
console.log(b);
console.log(typeof(b));
// primitive data type ---> store only stack

// number
// string
// bool
// bigint
// null
// undefined
// Symbol

// non-primitive ----> store only heap(i.e ram)

// array []
// 1. Linear DS
// 2. Homogeneous / Heterogenous
// 3. Indexed Collection Element
// 4.Contiguous Memory
// object











// string literals or template literals
// ~ ->tilde
// ``-> String
// var name = "supriyo"
// console.log(`Welcome to BCA ${name}`);






// ishungry = false
// console.log(typeof(ishungry));




console.log(typeof(null));
// object

console.log(typeof(undefined));
console.log(typeof('undefined'));
// output :- undefined


console.log(0/0); 
// output : - NaN

console.log(typeof(NaN));
// output:- number


console.log(isNaN(100)) //false
console.log(isNaN("100d")) //true


