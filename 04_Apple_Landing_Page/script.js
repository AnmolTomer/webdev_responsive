// Slideshow
const slideshowDivs = () => {
    for(let i = 1; i <= 5; i++){
        const div = document.createElement('div');
        div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`

        i === 1 && div.classList.add('change')
        document.querySelector('.slideshow').appendChild(div)
    }
}

slideshowDivs();

const divs = document.querySelectorAll('.slideshow div');

let counter = 1;

const slideshow = () => {
    setInterval(() => {
        counter++;

        const div = document.querySelector('.slideshow .change')
        div.classList.remove('change')
        if(counter < divs.length){
            div.nextElementSibling.classList.add('change')
        }else {
            divs[0].classList.add('change')

            counter = 1;
        }
        
    },5000)
}

slideshow();
// End of Slideshow