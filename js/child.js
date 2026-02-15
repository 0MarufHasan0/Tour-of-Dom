// Create element and set innerText or innerHTML

const newPlayerAdd = document.createElement('li')
newPlayerAdd.innerText= 'New born baby Messi';

// find  the  parent  Where  you will add the child

const playersList = document.getElementById('player-list');

// append the child to the  parent : orthat notun child ta k add koro
playersList.appendChild(newPlayerAdd) ;