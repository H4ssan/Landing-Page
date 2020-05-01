// Define Global Variables
const nav = document.querySelector("#navbar__list");
const sections = document.getElementsByTagName('section');
const header = document.getElementsByClassName("page__header")[0];




//helper function - determines whether section is in view and should be highlighted or not
function isSectionActive() {
    for (const section of sections) {

        const position = section.getBoundingClientRect();
        if (
            position.top <= 150 && position.bottom >= 150
        ) {
            const id = section.getAttribute("id");
            document.querySelector(`.${id}`).classList.add("active");
            section.classList.add("your-active-class");

        } else {
            const id = section.getAttribute("id");
            document.querySelector(`.${id}`).classList.remove("active");
            section.classList.remove("your-active-class");
        }
    }
}


//hide nav bar when user stops scrolling
//https://knowledge.udacity.com/questions/125967 - Code from this mentor was used for help in this section
let timer = null;

function isUserScrolling(){
   
    if(timer !== null){
        clearTimeout(timer);
    }
    timer = setTimeout(function(){
        header.style.display = "none";
    }, 2000);
}




/* build the nav bar
   creates <li> and <a> elements for the nav bar*/
for (let i = 0; i < sections.length; i++) {
    const tabs = document.createElement('li');
    const anchor = document.createElement('a');
  
    let tabText = sections[i].getAttribute('data-nav');
    tabs.classList.add(sections[i].getAttribute('id'));
    //when the <a> link is clicked it will lead to appropriate section
    anchor.href = `#section${i + 1}`;
    anchor.innerText = tabText;

    tabs.appendChild(anchor);
    nav.appendChild(tabs);
}

// When user scrolls this calls the isSectionActive function to determine which section is in viewport
document.addEventListener('scroll', function () {
    isSectionActive();
});


document.addEventListener('scroll', function(){
    isUserScrolling();
}, false);
//nav bar will reappear when scrolling starts again
document.addEventListener('scroll', function(){
    header.style.display = "block";
})




