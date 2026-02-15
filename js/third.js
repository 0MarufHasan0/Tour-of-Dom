console.log('third  file')
// get  the parent 
const thirdList =document.getElementById('third-list')

// create the echild

const li = document.createElement('li')
li.innerText='Brand new item'

// append

thirdList.appendChild(li);
