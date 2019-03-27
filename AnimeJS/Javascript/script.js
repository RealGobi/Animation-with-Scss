let conterinerWidth = document.querySelector('.container').offsetWidth;
let numOfImg = document.querySelector('.slider').childElementCount;
let activeSlide = 0;
let animationTime = 500;

//pager
for(let i = 0; i < numOfImg; i++) {
    let el = document.createElement('li');

    document.querySelector('.pager').appendChild(el);
}

let updatePager = () => {

    // pager
    document.querySelectorAll('.pager li').forEach(el => {
        el.classList.remove('active');
    });

    document.querySelector(`.pager li:nth-child(${activeSlide+1})`).classList.add('active');
}

updatePager();


let animation = () => {
        anime({
        targets: '.slider',
        duration: animationTime,
        translateX: -(activeSlide * conterinerWidth),
        easing: 'easeInOutQuad'
        });
        updatePager();
    };

    
document.querySelector('.slider').style.width = `${conterinerWidth*numOfImg}px`;

document.querySelector('#prev').addEventListener('click', () => {
    // <-
    if (activeSlide > 0) {
        // föregående bild
        activeSlide--
        //animering med animeJS
        animation();
    }
})
document.querySelector('#next').addEventListener('click', () => {
    // ->
    // är jag på sista sliden?
    if (activeSlide < numOfImg - 1) {
        // näste bild
        activeSlide++
        //animering med animeJS
        animation();
    } 
})
