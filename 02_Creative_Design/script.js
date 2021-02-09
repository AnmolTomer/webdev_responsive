// Returns array like object with each item having index and .length() prop
document.querySelectorAll('.story-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('change')
        btn.nextElementSibling.classList.toggle('change')
    })
})
// Loop through and attach event listener of onClick() using forEach helper