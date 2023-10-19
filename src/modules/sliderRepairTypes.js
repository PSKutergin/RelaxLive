const sliderRepairTypes = () => {
    const repairTypesBlock = document.getElementById('repair-types')
    const imagesBlock = repairTypesBlock.querySelector('.repair-types-slider')
    const listRepair = repairTypesBlock.querySelectorAll('.repair-types-nav__item')
    const currentSlideText = repairTypesBlock.querySelector('.slider-counter-content__current')
    const totalSlideText = repairTypesBlock.querySelector('.slider-counter-content__total')

    let classSlider = 'types-repair1'
    let activeSliderBlock = repairTypesBlock.querySelector('.' + classSlider);
    let currentSlide = 0
    let currentType = 0

    totalSlideText.innerHTML = activeSliderBlock.children.length;

    const changeSliderBlock = (index) => {
        for (let i = 0; i < imagesBlock.children.length; i++) {
            if (index === i) {
                imagesBlock.children[i].style.display = '';
            } else {
                imagesBlock.children[i].style.display = 'none';

                for (let j = 0; j < imagesBlock.children[i].children.length; j++) {
                    imagesBlock.children[i].children[j].style.display = ''
                };
            };
        }

        classSlider = `types-repair${index + 1}`
        activeSliderBlock = repairTypesBlock.querySelector('.' + classSlider);
        currentSlideText.innerHTML = 1;
        totalSlideText.innerHTML = activeSliderBlock.children.length;
    }

    const slider = (sliderBlock, numberSlide) => {
        for (let i = 0; i < sliderBlock.children.length; i++) {
            if (i === numberSlide) {
                sliderBlock.children[i].style.display = 'block'
            } else {
                sliderBlock.children[i].style.display = 'none'
            };

            currentSlideText.innerHTML = numberSlide + 1;
        }
    };

    const hideButtons = () => {
        listRepair.forEach((item) => {
            if (!item.classList.contains('active')) {
                item.style.display = 'none'
            } else {
                item.style.display = ''
            }
        })
    }

    if (innerWidth >= 1025) {
        listRepair.forEach((item, index) => {
            item.addEventListener('click', () => {
                listRepair.forEach((type, key) => {
                    if (index === key) {
                        type.classList.add('active')
                    } else {
                        type.classList.remove('active')
                    };
                });

                changeSliderBlock(index)
            })
        })
    } else {
        repairTypesBlock.querySelector('.nav-list-repair').style.minWidth = '225px';
        repairTypesBlock.querySelector('.nav-list-repair').style.maxWidth = '710px';
        repairTypesBlock.querySelector('.nav-list-repair').style.justifyContent = 'center';
        hideButtons();

        repairTypesBlock.addEventListener('click', (e) => {
            listRepair.forEach((item, index) => {
                if (item.classList.contains('active')) {
                    item.classList.remove('active')

                    if (e.target.closest('.nav-arrow_right')) {
                        currentType = index === listRepair.length - 1 ? 0 : index + 1;
                        changeSliderBlock(currentType);
                    } else if (e.target.closest('.nav-arrow_left')) {
                        currentType = index === 0 ? listRepair.length - 1 : index - 1;
                        changeSliderBlock(currentType);
                    }
                }
            })

            console.dir(listRepair[currentType].classList.add('active'))
            hideButtons();
        });
    };

    repairTypesBlock.addEventListener('click', (e) => {
        if (e.target.closest('.slider-arrow_right')) {
            currentSlide = +currentSlideText.innerHTML === activeSliderBlock.children.length ? 0 : +currentSlideText.innerHTML
            slider(activeSliderBlock, currentSlide);
        } else if (e.target.closest('.slider-arrow_left')) {
            currentSlide = +currentSlideText.innerHTML - 2 < 0 ? activeSliderBlock.children.length - 1 : +currentSlideText.innerHTML - 2
            slider(activeSliderBlock, currentSlide);
        }
    })

}

export default sliderRepairTypes