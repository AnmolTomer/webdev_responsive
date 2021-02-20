// Navbar
const menu = document.querySelector('.menu')

const navbar = document.querySelector('.navbar')

// Attach event listener to the menu icon specify click event

menu.addEventListener('click', () => {
    // Arrow function that is executed when we click the icon
    navbar.classList.toggle('change')
    menu.classList.toggle('change')

})
/* Add a new class change to the navbar and using this class we will create new class in CSS which will be applied only to the navbar
On next click class change will be removed and therefore new styles will be removed as well.
We will do so using toggle method. Toggle method adds new class to the element if it doesn't have it and removes the class if the element does have it.
Use classList properties to add new class to the element, it gives us list of all the classes an element has and allows access to different methods like add, remove and toggle.
*/


// Navbar Ends