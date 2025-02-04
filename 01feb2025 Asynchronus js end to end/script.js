// promise is object
// promise take argument as a exicuter function
// the arguments of the exicuter function is resolve , reject


// what does resolve do?
// 1) take the promise pending to fullfiled state
// 2) execute the .then() method


// what does reject do ?
// 1) take the promise pending to reject state
// 2) excute the .catch() method.





// api -  (https://api.postalpincode.in/pincode/{PINCODE})


// api is endpoint

// some kind of method we can use
// GET- request method , POST- ,PUT-Update method in the db , DELETE , PATCH


// let prom1 = fetch("https://api.postalpincode.in/pincode/700122")
// it return the promise[pending]
// console.log(prom1);
// because prom1 takes some time to excute and js doesn't for anyone, if we want to convert the pending state to resolve state or success, we have to use the .then() method


// prom1.then((response)=> response.json()).then(data => console.log(data));
// that return all data inside the promise
// but we want array inside this means the first object


// fetch("https://api.postalpincode.in/pincode/700122").then((response)=> response.json()).then(data => console.log(data[0]));

// fetch("https://api.postalpincode.in/pincode/700122").then((response)=> response.json()).then(data => console.log(data[0].Message));

// fetch("https://api.postalpincode.in/pincode/700122").then((response)=> response.json()).then(data => console.log(data[0].PostOffice[0]));

// fetch("https://api.postalpincode.in/pincode/700122").then((response)=> response.json()).then(data => console.log(data[0].PostOffice[1]));

// fetch("https://api.postalpincode.in/pincode/700122").then((response)=> response.json()).then(data => console.log(data[0].PostOffice[2]));

// we can do through foreach also


// fetch("https://api.postalpincode.in/pincode/700122").then((response)=> response.json()).then(data => (data[0].PostOffice.forEach(element => console.log(element.Name))));

// Anandapuri
//  Jaffarpur
//  Nonachandanpukur




// async and await

async function getData() {
    let p1 = await fetch("https://api.postalpincode.in/pincode/700122")
    let p2 = await p1.json() // also return promise
    // console.log(p2[0].PostOffice);
    // (p2[0].PostOffice) these whole thing return an array so we can use foreach here also
    let arr = p2[0].PostOffice
    arr.forEach(element => {
        console.log(element.Name+ '===>>>' + element.District);
//         Anandapuri===>>>North 24 Parganas
//         Jaffarpur===>>>North 24 Parganas
//         Nonachandanpukur===>>>North 24 Parganas
    });
}
getData()