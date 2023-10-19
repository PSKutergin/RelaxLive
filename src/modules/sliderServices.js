const sliderServices = () => {
    if (innerWidth < 576) {
        const sliderBlock = document.querySelector('.services-slider');
        const slides = sliderBlock.querySelectorAll('.services-item')
        const dotBlock = document.createElement('div')

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

        sliderBlock.style.display = 'flex';
        sliderBlock.style.justifyContent = 'center';

        dotBlock.className = "slider-dots slider-dots-main"
        dotBlock.style.display = 'flex'
        dotBlock.style.position = 'absolut'
        dotBlock.style.top = '200px'

        for (let i = 0; i < sliderBlock.children.length; i++) {
            if (i === 0) {
                dotBlock.insertAdjacentHTML('beforeend',
                    `
                    <div class="dot dot-main switch dot_active">
                        <div class="dot__inner"></div>
                    </div>
                    `)
            } else {
                dotBlock.insertAdjacentHTML('beforeend',
                    `
                    <div class="dot dot-main switch">
                        <div class="dot__inner"></div>
                    </div>
                    `)
            };
        }

        sliderBlock.insertAdjacentElement('afterend', dotBlock)

        const dots = dotBlock.querySelectorAll('.dot-main')
        console.log(dots);

        dotBlock.addEventListener('click', (e) => {
            // e.preventDefault();

            prevDot(dots, currentSlide, dotActiveClass);

            if (e.target.classList.contains('dot-main')) {
                dots.forEach((dot, index) => {
                    if (e.target === dot) {
                        currentSlide = index
                    }
                })
            };

            nextDot(dots, currentSlide, dotActiveClass);
            slider(currentSlide);
        });

        slider(currentSlide);
    }



}

export default sliderServices