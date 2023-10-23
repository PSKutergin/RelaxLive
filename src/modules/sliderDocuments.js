const sliderDocuments = () => {
    const documentsBlock = document.querySelector('.transparency-slider-wrap')
    const sliderBlock = documentsBlock.querySelector('.transparency-slider');

    let currentSlide = 0;

    const slider = (numberSlide) => {
        for (let i = 0; i < sliderBlock.children.length; i++) {
            if (i === numberSlide) {
                sliderBlock.children[i].classList.add('active')
            } else {
                sliderBlock.children[i].classList.remove('active')
            };
        }
    };

    documentsBlock.addEventListener('click', (e) => {
        if (e.target.closest('.slider-arrow_right')) {
            currentSlide = currentSlide === sliderBlock.children.length - 1 ? 0 : currentSlide + 1
            slider(currentSlide);
        } else if (e.target.closest('.slider-arrow_left')) {
            currentSlide = currentSlide === 0 ? sliderBlock.children.length - 1 : currentSlide - 1
            slider(currentSlide);
        }

    })

}

export default sliderDocuments