// setTimeout(() => {
//     console.log('good mornign');
    
// }, 4000);


// setInterval(() => {
//     console.log('BCA');
// }, 2000);





// function callMe(b){
//     let a = 20;
//     let func = () =>{
//         console.log(a+b);
//     }
//     b++;
//     a++;
//     func()
// }

// let a = 3;
// callMe(a+2)

// output:- 27


// function callMe(b){
//     let a = 20;

//     let func = () =>{
//         console.log(a+b);
//     }

//     setTimeout(func,3000);
//     b++;
//     a++;
// }

// let a = 3;
// callMe(a+2)
// output:- after 3 second 27



// function callMe(b){
//     let a = 20;

//     let func = () =>{
//         console.log(a+b);
//     }

    
//     b++;
//     setTimeout(func,3000);
//     a++;
// }

// let a = 3;
// callMe(a+2)

// output:- is same 27











// function callMe(b){
//     let a = 20;


//     let func = () =>{
//         console.log('3');
//         console.log(a+b);
//     }

    
//     console.log('1');
//     b++;
//     console.log('2');
//     setTimeout(func,3000);
//     console.log('4');
//     a++;
// }

// let a = 3;
// callMe(a+2)






// console.log('0');
// setTimeout(() => {
//     console.log('1');
// }, 0);
// console.log('2');
// //  0  2  1







// console.log('0');
// queueMicrotask(()=>{
//     console.log('1');
// })
// console.log('2');
// 0  2  1








// console.log('0');

// setTimeout(()=>{
//     console.log('4');
// },0);

// queueMicrotask(()=>{
//     console.log('1');
// });
// console.log('2');

// microtask queue ar priority beshi














// Promise is class in js
// class is cleection of variable and function

// class Prom{


    // constructor(fname , lname){
    //     this.fname= fname;
    //     this.lname = lname
    // }
//     constructor(f1 , f2){
//         f1();
//         f2();
//     }
    
//     f1 = () =>{
        
//     }
//     f2 = () =>{

//     }
// }

let p1 = new Promise((resolve , reject)=>{
    // reject();
    setTimeout(() => {
        resolve()
    }, 4000);
})
console.log(p1);

function successcallback(){    
    console.log('success');
    
}
function errorcallback(){    
    console.log('error');
}
function errorcallback(){    
    console.log('errorrrrrrrr');
}
function errorcallback(){    
    console.log('error111111');
}

let prom1=p1.then(successcallback)
let errorProm1=p1.catch(errorcallback)

// .then() and .catch() 