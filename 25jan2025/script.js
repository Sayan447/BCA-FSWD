// how to get the refernce of any object
// 1) getElementById(), => 1 ref
// 2) getElementsByClass(),
// 3) getElementsByTagName(),
// 4) querySelector()


let h1 = document.getElementById('container-h1')
h1.style.backgroundColor = "red"





let container = document.getElementsByClassName('container')[0]
// this 0 is for we have multiple div at same time, so we want the first one
// function changeColor(){
//     h1.style.backgroundColor = 'blue'
//     h1.style.color = 'white'
// }

// we can also create any heading tag in this js
let containerh2  = document.createElement('h2')
containerh2.innerText = 'Learn Coding'
containerh2.className = 'container-h2'
container.appendChild(containerh2)
containerh2.style.backgroundColor='salmon'
containerh2.style.cursor='pointer'


// we want to create a alert function
// function alertMe(){
//     h1.style.backgroundColor = 'brown'
//     h1.style.color = 'green'
//     alert("Check the message boss!")
// }




// let state = true
// function alertMe(){
//     state = !state

//     if(state){
//         h1.style.backgroundColor = 'brown'
//         h1.style.color = 'green'
//     }
//     else{
//         h1.style.backgroundColor = 'gold'
//         h1.style.color = 'green'
//     }
// }




function ChangeColorToPink(){
    document.getElementById('box-1').style.backgroundColor = 'pink'
}
function ChangeColorToOrange(){
    document.getElementById('box-2').style.backgroundColor = 'orange'
}
function ChangeColorToGreen(){
    document.getElementById('box-3').style.backgroundColor = 'green'
}
function ChangeColorToBlue(){
    document.getElementById('box-4').style.backgroundColor = 'blue'
}
function ChangeColorToRed(){
    document.getElementById('box-5').style.backgroundColor = 'red'
}
function ChangeColorToViolet(){
    document.getElementById('box-6').style.backgroundColor = 'violet'
}





// js is single thread and synchronus. cannot use multithreaded