const sliderFormula = () => {
    const formulaBlock = document.querySelector('.formula-slider-wrap')
    const sliderBlock = formulaBlock.querySelector('.formula-slider')
    const slides = sliderBlock.querySelectorAll('.formula-item')

    sliderBlock.style.display = 'flex';

    if (innerWidth > 864) {
        let currentSlides = [slides.length - 1, 0, 1]

        const slider = (numbersSlides) => {
            sliderBlock.innerHTML = '';

            numbersSlides.forEach(item => {
                sliderBlock.insertAdjacentElement('beforeend', slides[item])
            });
        };

        formulaBlock.querySelectorAll('.slider-arrow').forEach(item => item.style.top = '70%');

        formulaBlock.addEventListener('click', (e) => {
            if (e.target.closest('.slider-arrow_right-formula')) {
                currentSlides = currentSlides.map(item => item - 1);
            } else if (e.target.closest('.slider-arrow_left-formula')) {
                currentSlides = currentSlides.map(item => item + 1);
            };

            for (let i = 0; i < currentSlides.length; i++) {
                if (currentSlides[i] === slides.length) {
                    currentSlides[i] = 0
                } else if (currentSlides[i] < 0) {
                    currentSlides[i] = slides.length - 1
                }
            };

            slider(currentSlides);
        });

        slider(currentSlides)
    } else {
        let currentSlide = 0

        const slider = (numberSlide) => {
            for (let i = 0; i < slides.length; i++) {
                if (i === numberSlide) {
                    slides[i].style.display = 'flex'
                    slides[i].style.justifyContent = 'start';
                } else {
                    slides[i].style.display = 'none'
                };
            }
        };

        formulaBlock.addEventListener('click', (e) => {
            if (e.target.closest('.slider-arrow_right-formula')) {
                currentSlide--
            } else if (e.target.closest('.slider-arrow_left-formula')) {
                currentSlide++
            };

            if (currentSlide === slides.length) {
                currentSlide = 0
            } else if (currentSlide < 0) {
                currentSlide = slides.length - 1
            }

            slider(currentSlide);
        });

        slider(currentSlide)
    }

}

export default sliderFormula