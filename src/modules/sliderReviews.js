const sliderReviews = () => {
    const sliderBlock = document.getElementById('reviews');
    const slides = sliderBlock.querySelectorAll('.reviews-slider__slide');
    const dotBlock = sliderBlock.querySelector('.slider-dots-reviews');
    const dots = sliderBlock.querySelectorAll('.dot-reviews');

    let currentSlide = 0;
    let dotActiveClass = 'dot_active';

    const slider = (numberSlide) => {
        slides.forEach((slide, index) => {
            if (index === numberSlide) {
                slide.style.display = 'flex'
            } else {
                slide.style.display = 'none'
            };
        })
    };

    const prevDot = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    };

    const nextDot = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    };

    dotBlock.style.display = 'flex';

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();

        prevDot(dots, currentSlide, dotActiveClass);

        if (e.target.closest('.slider-arrow_right')) {
            currentSlide++
        } else if (e.target.closest('.slider-arrow_left')) {
            currentSlide--
        } else if (e.target.classList.contains('dot-reviews')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index
                }
            })
        };

        if (currentSlide >= slides.length) {
            currentSlide = 0
        };

        if (currentSlide < 0) {
            currentSlide = slides.length - 1
        };

        nextDot(dots, currentSlide, dotActiveClass);
        slider(currentSlide);
    });

}

export default sliderReviews