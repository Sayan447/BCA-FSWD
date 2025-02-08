async function SearchPincode() {
  let pin = document.getElementById('code').value; // Get user input
  if (!pin) return alert('Please enter a pincode!');

  let response = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
  
  // console.log(response);
  // console.log(typeof(response));
  let data = await response.json();

  document.getElementById('response').style.fontWeight='bold'

console.log(data);
// console.log(data[0].Status);



  

// code for text area where we can show our result
  document.getElementById('response').innerText =
    data[0].Status === 'Success' ? data[0].PostOffice.map((ele) => `NAME:-  ${ele.Name} ===>BLOCK:- ${ele.Block}`).join(', ')
      : 'Invalid Pincode!';
}

