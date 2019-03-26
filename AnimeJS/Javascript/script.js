let conterinerWidth = document.querySelector('.container').offsetWidth;
let numOfImg = document.querySelector('.slider').childElementCount;
let activeSlide = 0;
let animationTime = 500;
document.querySelector('.slider').style.width = `${conterinerWidth*numOfImg}px`;

document.querySelector('#prev').addEventListener('click', () => {
    // <-
    if (activeSlide > 0) {
               // föregående bild
               activeSlide--

               //animering med animeJS
               anime({
                   targets: '.slider',
                   duration: animationTime,
                   translateX: -(activeSlide * conterinerWidth),
                   easing: 'easeInOutQuad'
               })
    }
})
document.querySelector('#next').addEventListener('click', () => {
    // ->
    // är jag på sista sliden?
    if (activeSlide < numOfImg - 1) {
        // näste bild
        activeSlide++

        //animering med animeJS
        anime({
            targets: '.slider',
            duration: animationTime,
            translateX: -(activeSlide * conterinerWidth),
            easing: 'easeInOutQuad'
        })

    } else {
        
        //gör nada
    }

})