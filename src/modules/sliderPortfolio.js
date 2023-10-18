const sliderPortfolio = () => {
    const portfolio = document.getElementById('portfolio')
    const sliderBlockDesktop = portfolio.querySelector('.portfolio-slider');
    const sliderBlockMobile = portfolio.querySelector('.portfolio-slider-mobile');
    const currentSlideText = portfolio.querySelector('.slider-counter-content__current')
    const totalSlideText = portfolio.querySelector('.slider-counter-content__total')

    let currentSlides = [0, 1, 2]
    let currentSlide = 0

    const sliderDesktop = (numbersSlides) => {
        for (let i = 0; i < sliderBlockDesktop.children.length; i++) {
            if (i === numbersSlides[0] || i === numbersSlides[1] || i === numbersSlides[2]) {
                sliderBlockDesktop.children[i].style.display = ''
            } else {
                sliderBlockDesktop.children[i].style.display = 'none'
            };
        };
    }

    const sliderMobile = (numberSlide) => {
        for (let i = 0; i < sliderBlockMobile.children.length; i++) {
            if (i === numberSlide) {
                sliderBlockMobile.children[i].style.display = 'block'
            } else {
                sliderBlockMobile.children[i].style.display = 'none'
            };

            currentSlideText.innerHTML = numberSlide + 1;
        }
    };

    if (innerWidth < 576) {
        portfolio.querySelectorAll('.slider-arrow-tablet-mobile').forEach(item => {
            item.style.zIndex = '999'
        });

        totalSlideText.innerHTML = sliderBlockMobile.children.length;
        sliderMobile(currentSlide);
    } else {
        sliderDesktop(currentSlides);
    };

    portfolio.addEventListener('click', (e) => {
        if (e.target.closest('.slider-arrow-tablet-mobile_right')) {
            portfolio.querySelector('.slider-arrow-tablet-mobile_left').style.display = 'block';

            if (+currentSlideText.innerHTML === sliderBlockMobile.children.length) {
                currentSlide = sliderBlockMobile.children.length - 1;
            } else if (+currentSlideText.innerHTML === sliderBlockMobile.children.length - 1) {
                currentSlide = +currentSlideText.innerHTML;
                portfolio.querySelector('.slider-arrow-tablet-mobile_right').style.display = 'none';
            } else {
                currentSlide = +currentSlideText.innerHTML
            };

            sliderMobile(currentSlide);

        } else if (e.target.closest('.slider-arrow-tablet-mobile_left')) {
            portfolio.querySelector('.slider-arrow-tablet-mobile_right').style.display = 'block';

            if (+currentSlideText.innerHTML - 2 < 0) {
                currentSlide = 0;
            } else if (+currentSlideText.innerHTML - 2 === 0) {
                currentSlide = +currentSlideText.innerHTML - 2;
                portfolio.querySelector('.slider-arrow-tablet-mobile_left').style.display = 'none';
            } else {
                currentSlide = +currentSlideText.innerHTML - 2
            };

            sliderMobile(currentSlide);
        } else if (e.target.closest('.slider-arrow_right-portfolio')) {
            portfolio.querySelector('.slider-arrow_left-portfolio').style.display = 'flex';

            if (currentSlides[2] === sliderBlockDesktop.children.length - 2) {
                currentSlides = currentSlides.map(item => item + 1);
                portfolio.querySelector('.slider-arrow_right-portfolio').style.display = 'none';
            } else {
                currentSlides = currentSlides.map(item => item + 1)
            };

            sliderDesktop(currentSlides);
        } else if (e.target.closest('.slider-arrow_left-portfolio')) {
            portfolio.querySelector('.slider-arrow_right-portfolio').style.display = 'flex'

            if (currentSlides[0] === 1) {
                currentSlides = currentSlides.map(item => item - 1);
                portfolio.querySelector('.slider-arrow_left-portfolio').style.display = 'none';
            } else {
                currentSlides = currentSlides.map(item => item - 1)
            };

            sliderDesktop(currentSlides);
        }

    })
}

export default sliderPortfolio