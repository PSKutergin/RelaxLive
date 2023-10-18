import { animate, visible } from "./helpers";

const tips = () => {
    const points = document.querySelectorAll('.formula-item__icon')

    points.forEach(point => {
        const circle = point.querySelector('.formula-item__icon-inner')
        const tip = point.querySelector('.formula-item-popup')

        point.addEventListener('mouseenter', (e) => {
            const allPositionRelativeTip = visible(tip);

            if (allPositionRelativeTip.targetPosition.top < allPositionRelativeTip.windowPosition.top) {
                tip.style.top = '105px';
                // tip.style.transform = 'rotate(180deg)';
            } else {
                tip.style.top = '';
                // tip.style.transform = '';
            };
            tip.style.visibility = 'visible'

            animate({
                duration: 300,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    circle.style.opacity = progress;
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
                    circle.style.opacity = 1 - progress;
                    tip.style.opacity = 1 - progress;
                }
            });
            setTimeout(() => {
                tip.style.visibility = ''
                tip.style.opacity = ''
                tip.style.top = '';
            }, 1000);
        })
    })
}

export default tips