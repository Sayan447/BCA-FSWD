let prom1 = fetch("https://api.postalpincode.in/pincode/700124")
// console.log(prom1);
// promise is pending
// fetch return promise


prom1.then( responce => responce.json()).then(data => console.log(data));



