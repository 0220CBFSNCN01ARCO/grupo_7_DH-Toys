window.addEventListener('load', () => {
let spinner = document.querySelector('#spinner')
let contentPageOverlay = document.querySelector('.content-page-overlay')
spinner.addEventListener('click', function(e){
    contentPageOverlay.classList.toggle('hide')
})
console.log(spinner)
})