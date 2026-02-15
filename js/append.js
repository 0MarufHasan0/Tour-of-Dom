// 1.parent Node 

const mainContainer = document.getElementById('main-container');

// Create Chilld Node

const placesSection = document.createElement('section')


// Create h1

const h1 = document.createElement('h1')

h1.innerText='places I want to visit';
// ekhane section er modhe h1 child add korsi

placesSection.appendChild(h1)  ;

// create ul

const ul =document.createElement('ul');


const li1 = document.createElement('li')
li1.innerText='Bandorban'

// Eyta ul  er modhe li dhukaisi

ul.appendChild(li1);


const li2 = document.createElement('li')
li2.innerText='sundorban'

ul.appendChild(li2);


placesSection.appendChild(ul);
// Append  placeSection to  the maincontainer
mainContainer.append(placesSection)



// Eesier to creare  HTML

const bookSection = document.createElement('section')

bookSection.innerHTML = `
<h1> Books  I need to read </h1>
<ul>

<li>Physic</li>
<li>Chemistry</li>
<li>Math</li>
<li>Zoology</li>

</ul>

`

mainContainer.appendChild(bookSection);