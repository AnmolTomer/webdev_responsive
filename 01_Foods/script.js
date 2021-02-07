// Navbar dropdown 
// Attach onClick event to menu icon

document.querySelector('.menu').addEventListener('click', () => {
    // call target class from navbar and menu using querySelectorAll method
    document.querySelectorAll('.target').forEach((item) => {
        // To add to both elements a new class using toggle method, use classList
        item.classList.toggle('change')
        // classList gives us all classes element has and allows us to access different methods in order to manipulate the classes of the element. Toggle method allows us to add class to element if it doesn't have it and remove class if the element has that class.
    })

    /* Above we add some new styles to both elements once we click the icon and then get rid of those
    styles on next click. To do so, look throught the node list returned by querySelectorAll method
    and add to each element a new class using toggle method, after that define new
    styles using this class from CSS. So in order to look for the node list, we are
    doing to use one of the array helper methods called forEach(), it takes one arg, callback function executes it on each item in node list.
    */

})


// Selecting all the icons on homepage in .section-1-icons i.change section, we have to add class change and also some interval
const icons = document.querySelectorAll('.section-1-icons i')

// querySelectorAll returns an array like object and is zero indexed and has a .length property that we will use, for now we set interval for displaying icons

// setInterval allows us to run the function over and over again with some intervals; takes 2 arguments 1st is callback function, 2nd is amount of time in ms 1s = 1000ms

// Once all the items are showed once with change effect, we get an error of Uncaught TypeError: Cannot read property 'classList' of null, as there is no nextElementSibling after the last item
// To remove this error we need to create a variable with value 1 and keep track of changing state

let tracker = 1 // let as value changes
// Once the tracker is more than the length of icons, reset it to 1, and on each function run increment it by 1, and an if statement to check
setInterval(() => {
    // First icon has class change, so we have to select this icon to remove the class change and add class to next icon, create new var
    tracker++
    const icon = document.querySelector('.section-1-icons .change') // query selector to select the element

    // To remove class change, access the classes of this icon and use the classList property to get list of all the classes an element has
    icon.classList.remove('change')

    // Display and hide other icons add change to nextElementSibling.classList.add()
    if (tracker > icons.length) {
        // Means one cycle is finished, display back the first icon
        icons[0].classList.add('change')
        tracker = 1
    } else {
        icon.nextElementSibling.classList.add('change')
    }


}, 4000)

// End of section 1 slideshow change js code