const modalDocuments = () => {
    const modal = document.querySelector('.popup-transparency')
    const images = document.querySelectorAll('.transparency-item__img')
    const sliderBlock = modal.querySelector('.popup-transparency-slider')
    const currentSlideText = modal.querySelector('.slider-counter-content__current')
    const totalSlideText = modal.querySelector('.slider-counter-content__total')

    let currentSlide = 0

    const slider = (numberSlide) => {
        for (let i = 0; i < sliderBlock.children.length; i++) {
            if (i === numberSlide) {
                sliderBlock.children[i].style.display = 'block'
            } else {
                sliderBlock.children[i].style.display = 'none'
            };

            currentSlideText.innerHTML = numberSlide + 1;
        }
    };

    images.forEach((image, indexImage) => {
        image.addEventListener('click', () => {
            modal.style.visibility = 'visible';
            totalSlideText.innerHTML = sliderBlock.children.length;

            slider(indexImage);
        })
    })

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-dialog-transparency') || e.target.closest('.close')) {
            modal.style.visibility = '';
        }

        if (e.target.closest('.popup-arrow_transparency_right')) {
            currentSlide = +currentSlideText.innerHTML === sliderBlock.children.length ? 0 : +currentSlideText.innerHTML
            slider(currentSlide);
        } else if (e.target.closest('.popup-arrow_transparency_left')) {
            currentSlide = +currentSlideText.innerHTML - 2 < 0 ? sliderBlock.children.length - 1 : +currentSlideText.innerHTML - 2
            slider(currentSlide);
        }
    })

}

export default modalDocuments