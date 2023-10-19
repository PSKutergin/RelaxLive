import { animate, visible } from "./helpers";

const tips = () => {

    const points = document.querySelectorAll('.formula-item__icon')

    points.forEach(point => {
        const tip = point.querySelector('.formula-item-popup')

        point.addEventListener('mouseenter', (e) => {
            const allPositionRelativeTip = visible(tip);

            console.log(point.parentElement.parentElement);

            if (allPositionRelativeTip.targetPosition.top < allPositionRelativeTip.windowPosition.top) {
                tip.style.top = '105px';
                tip.style.paddingTop = '40px';
                point.classList.add('coup')
                point.parentElement.parentElement.style.zIndex = '10'
            } else {
                tip.style.top = '';
                tip.style.paddingTop = '';
                point.classList.remove('coup')
                point.parentElement.parentElement.style.zIndex = ''
            };

            point.classList.add('active-item')

            animate({
                duration: 300,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    tip.style.opacity = progress;
                }
            });
        })

        point.addEventListener('mouseleave', (e) => {
            animate({
                duration: 300,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    tip.style.opacity = 1 - progress;
                }
            });
            setTimeout(() => {
                tip.style.top = '';
                tip.style.paddingTop = '';
            }, 300);

            point.parentElement.parentElement.style.zIndex = ''
            point.classList.remove('coup')
            point.classList.remove('active-item')
        })
    })
}

export default tips