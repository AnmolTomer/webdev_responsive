# Business Agency Website

---

## 1. Project Overview

- Business Agency website with different sections as follows:

1. Landing Page: Animations with transition effects, and css. Menu icon and navbar for different sections on website, shine effect on discover now button of landing page.

2. About Us section with video having custom controls, learn how to customise the controls for HTML 5 video elements

3. Pricing Section: Has vibrant pricing cards effect of sliding will be created using js plugin called slider.js.

4. Contact Section: Will have contact details and a couple of field to get name, email etc.

5. Footer

---

## 2. Create and Customize Landing

- We will first link css, js file and import font-awesome css using cdnjs font-awesome.

- Next we build the project section by section first creating the HTML markup for each section and then using CSS to customise it.

---

## 3. Add Animations to Landing Page

- We add animations to heading and discover button.

---

## 4. Navbar and Logo

- Create a expand on clicking navbar, with hover effect and transform hamburger to arrow.

---

## 5. Make the navbar work onClick()

- Once we click the icon, the navbar should expand to the entire page and the navigation items should be displayed.

---

## 6. Create and Style About Us Section

- Work on adding div for video buttons, bar, player etc.

---

## 7. Make Custom Video Controls

- Use `video.play()`, `video.pause()` and based on duration to change the progress bar shown.

- Use `video.ended()` to reset the opacity of video and change the button to play from pause.

---

## 8. Pricing Section - Swiper.js

- Heading with 4 pricing cards of different colours, using mouse. Create effect using swiper.js.

- For swiperjs use CDN link for CSS and JS. There are 2 versions regular and minimized version. We will be using [effect coverflow](https://swiperjs.com/demos#effect-coverflow).

- Click on [source code](https://github.com/nolimits4web/Swiper/blob/master/demos/250-effect-flip.html) of effect coverflow and go to github.

- Assign `swiper-wrapper` class to `pricing-cards-wrapper`, create new div element outside swiper-wrapper, named `swiper-container`.

- To each pricing-card assign `swiper-slide`.

- Make height and width of `.pricing-card` as !important and then grab js from GitHub code and paste it in script.js.

---
