async function SearchPincode() {
  let pin = document.getElementById('code').value; // Get user input
  if (!pin) return alert('Please enter a pincode!');

  let response = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
  let data = await response.json();

  document.getElementById('response').style.fontWeight='bold'

//   console.log(data);
  
  document.getElementById('response').value =
    data[0].Status === 'Success' ? data[0].PostOffice.map((ele) => 'NAME:-'+ ele.Name + '===>' +'BLOCK:- '+ele.Block).join(', ')
      : 'Invalid Pincode!';
}

