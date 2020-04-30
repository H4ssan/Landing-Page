/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


 // Define Global Variables
 const nav = document.querySelector("#navbar__list");
 const sections = document.getElementsByTagName('section');
 
 
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/* helper function to determine whether section is in viewport or not
   https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/ --
   Used link above for help
*/
    function isSectionActive(){
    for(const section of sections){
        
        const position = section.getBoundingClientRect();
        if(
           position.top <= 150 && position.bottom >= 150
        ){
            const id = section.getAttribute("id");
            document.querySelector(`.${id}`).classList.add("active");
            section.classList.add("your-active-class");

        }else{
            const id = section.getAttribute("id");
            document.querySelector(`.${id}`).classList.remove("active");
            section.classList.remove("your-active-class");
        }
    }
        
    
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for(let i = 0; i < sections.length; i++){
    let tabs = document.createElement('li');
    tabs.innerHTML = sections[i].getAttribute('data-nav');
    nav.appendChild(tabs);
}

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', function(){
    isSectionActive();
});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


