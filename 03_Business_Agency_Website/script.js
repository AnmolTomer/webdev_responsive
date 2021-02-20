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

// Section 2 Video
const video = document.querySelector('.video')
const btn = document.querySelector('.buttons i')
const bar = document.querySelector('.video-bar')

const playPause = () => {
    // Check paused() method to see if video is paused or not.

    if (video.paused) {
        video.play()
        btn.className = 'far fa-pause-circle'
        video.style.opacity = '0.9'
    } else {
        btn.className = 'far fa-play-circle'
        video.pause()
        video.style.opacity = '0.3'
    }

    // built in methods to play video

}

// Attach event listener with click event

btn.addEventListener('click', () => {
    playPause()
})

video.addEventListener('timeupdate', () => {
    // console.log(video.currentTime, video.duration)
    const barWidth = video.currentTime / video.duration
    bar.style.width = `${barWidth*100}%`

    if (video.ended) {
        btn.className = 'far fa-play-circle'
        video.style.opacity = 0.3;
        bar.style.width = `0%`
    }
})
// Section 2 Video Ends