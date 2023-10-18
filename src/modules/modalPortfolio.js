const modalPortfolio = () => {
    const modal = document.querySelector('.popup-portfolio')
    const sliderBlock = modal.querySelector('.popup-portfolio-slider')
    const textBlock = modal.querySelectorAll('.popup-portfolio-text')
    const currentSlideText = modal.querySelector('.slider-counter-content__current')
    const totalSlideText = modal.querySelector('.slider-counter-content__total')

    let imageBlock
    let images
    let currentSlide = 0

    const slider = (numberSlide) => {
        for (let i = 0; i < sliderBlock.children.length; i++) {
            if (i === numberSlide) {
                sliderBlock.children[i].style.display = 'block'
                textBlock[i].style.display = 'block'
            } else {
                sliderBlock.children[i].style.display = 'none'
                textBlock[i].style.display = ''
            };

            currentSlideText.innerHTML = numberSlide + 1;
        }
    };

    if (innerWidth >= 576) {
        imageBlock = document.querySelector('.portfolio-slider');
    } else {
        imageBlock = document.querySelector('.portfolio-slider-mobile');
    };

    images = imageBlock.querySelectorAll('.portfolio-slider__slide-frame');

    images.forEach((image, indexImage) => {
        image.addEventListener('click', () => {
            modal.style.visibility = 'visible';
            sliderBlock.style.display = 'flex';
            totalSlideText.innerHTML = sliderBlock.children.length;

            slider(indexImage);
        })
    })

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-dialog') || e.target.closest('.close')) {
            modal.style.visibility = '';
        };

        if (e.target.closest('.popup-arrow_right')) {
            currentSlide = +currentSlideText.innerHTML === sliderBlock.children.length ? 0 : +currentSlideText.innerHTML
            slider(currentSlide);
        } else if (e.target.closest('.popup-arrow_left')) {
            currentSlide = +currentSlideText.innerHTML - 2 < 0 ? sliderBlock.children.length - 1 : +currentSlideText.innerHTML - 2
            slider(currentSlide);
        }
    })
}

export default modalPortfolio