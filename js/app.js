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
 const nav = document.getElementsByTagName('nav');
 const sections = document.getElementsByTagName('section');
 
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
for(let i = 0; i < sections.length; i++){
    let tabs = document.createElement('li');
    tabs.innerHTML = sections[i].getAttribute('data-nav');
    nav.appendChild(tabs);
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


