# Apple Ecommerce Website 🛒🛒

## Project Sections

1. We start with landing page, logo, navbar with hover effects, 3D box with controllers using CSS and JS only.

2. Heading and images with hover effect for iPhone12 with 2 buttons for shop and learn more page.

3. MacBook Air Section, MacBook opens with logo and loading progress bar with Buy Now inside MacBook visible.

4. Apple Watch along with scrollable bands and dials.

5. AirPods Section, followed by footer for product icons and Copyright displayed.

---

## 01. Create and Customize Landing Page

- Create div container and inside that section-1 for Landing Page. Use fa to get apple logo and then create navbar using nav element with class navbar.

- Create banner for section-1, it will have 4 different elements, heading, paragraph, span elements and button.

- Import the fonts, we use rem as measurement for fonts in the project. By default, 1 rem equals 16 pixels, we want to convert 1 rem to 10 pixels, and for that we have to decrease the font size of HTML element i.e. 62.5% of 16px = 10px.

- Create css variables for colors as we reuse them a lot. CSS variables can have a global or local scope, but for our use case we need global variables to be accessed from the entire document. We declare variables inside `:root` and inside its scope we specify the names of variables and values, variable names start with doubly hyphen `--` size.

- Section 1 we change the width, height, bg color, align the items using flexbox and to place the items in center vertically we do align-items center as well as justify-content space-evenly to place elements in center horizontally.

- Next we change the shape of bottom of landing page using polygon space we cut-off the bottom right corner, clip-path is used and we can get it for various shapes from [this site](https://bennettfeely.com/clippy/) . Grab the code and assign it to section-1 element.

- Next we customize the logo and create Logo section in css stylesheet. To specify the position absolute for logo, we have to specify the position of logo's parent element i.e. `.section-1` as relative. We customize the icon by selecting the i element, changing color and font-size with opacity 0.8.

- Next, we write CSS for navbar. Navbar will be at top right corner, we select it and set its position to be absolute. Next we customize the navbar-link and increase font-size and space between nav-items.

- We assign display as inline-block to navbar items. Setting inline-block allows us to set width, height and margin. Then we change the color of links and create hover effect. We then define hover effect and call transition in `.navbar-link` with a duration of half second.

- Next we customize the banner. In banner we align items vertically and place them in center using flexbox. In order to avoid defining same properties again and again we are going to create a new class in common styles called .center and to it we assign flex and other alignment and justify properties. Then we assign this center class to the banner in section-1.

- Next as we want to place the items vertically in column, we have to change flex-direction in section-1-banner. After that we go on to modify section elements such as heading, span, button and others.

- We want to change button shape on hover to an arrow pointing towards left the iPhone box, to do so we will use clip-path property with specific shape values and we will apply those.

---

## 02. Create Background Images Slideshow

- Most of the slideshow functionality will be created using JS and in HTML document we will create a single div element that will represent the slideshow.

- Create 5 div elements and we will define bg-image for each div element, we could do this using HTML and CSS but this is more convenient and dynamic in JS. We use for loop to iterate and create 5 div elements inside slideshow div. We call the function in script.js.

- Then we specify CSS properties for slideshow class and then we have to specify width and height of `.slideshow div` elements. We have to place the images on top of each other and for that we do `position:absolute` and then we use background-size and bg-position as well as repeat property.

- We use z-index property to not have content behind the webpage for that we set z-index:-1. We define a new class with opacity 1 and we will add this class using js.

- In JS we select all the divs using document.querySelectorAll() and we create a new function that uses setInterval method to execute a function over and over again using a specified time period in ms.

- We remove the change div in setInterval function and using nextElementSibling.classList we add change div to it.

- To crate fade effect we specify transition to opacity with duration of 1s.
