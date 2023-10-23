const sliderServices = () => {
    const servicesBlock = document.querySelector('.services');
    const servicesSlides = servicesBlock.querySelectorAll('.row')
    const sliderBlock = document.querySelector('.services-slider');
    const slides = sliderBlock.querySelectorAll('.services-item');
    const dotBlock = document.querySelector('.slider-dots-main');
    const dots = dotBlock.querySelectorAll('.dot-main');

    const slider = (numberSlide, slides) => {
        slides.forEach((slide, index) => {
            if (index === numberSlide) {
                slide.classList.add('active')
            } else {
                slide.classList.remove('active')
            };
        })
    };

    const prevDot = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    };

    const nextDot = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    };

    if (innerWidth < 576) {
        let currentSlide = 0;
        let dotActiveClass = 'dot_active';

        dotBlock.addEventListener('click', (e) => {
            prevDot(dots, currentSlide, dotActiveClass);

            if (e.target.classList.contains('dot-main')) {
                dots.forEach((dot, index) => {
                    if (e.target === dot) {
                        currentSlide = index
                    }
                })
            };

            nextDot(dots, currentSlide, dotActiveClass);
            slider(currentSlide, slides);
        });
    } else {
        let currentSlide = 0

        servicesBlock.addEventListener('click', (e) => {
            if (e.target.closest('.slider-arrow_right-services')) {
                currentSlide--
            } else if (e.target.closest('.slider-arrow_left-services')) {
                currentSlide++
            };

            if (currentSlide === servicesSlides.length) {
                currentSlide = 0
            } else if (currentSlide < 0) {
                currentSlide = servicesSlides.length - 1
            }

            slider(currentSlide, servicesSlides);
        });
    }



}

export default sliderServices