// console.log('file connected')

// Eyta dia all section and tar class name id  name pabo
// HTML collection list

// const sections  =document.getElementsByTagName('section');

 
// Node  List
const sections = document.querySelectorAll('section')
// console.log(sections);
for(const section of sections){
    console.log(section);
    section.style.backgroundColor='lightblue'
    section.style.border='3px  solid yellow'
    section.style.marginBottom='5px'
    section.style.borderRadius='10px'
    section.style.padding='20px'
}


// ClassList add css theke kono ekta class likhe eykhane add kora
// dymanic class

for (const section of sections){
    // section.classList.add('section-card')
}