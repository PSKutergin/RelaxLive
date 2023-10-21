const animate = ({ timing, draw, duration }) => {

    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        // вычисление текущего состояния анимации
        let progress = timing(timeFraction);

        draw(progress); // отрисовать её

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
};

const visible = (target) => {
    const allPosition = {
        targetPosition: {
            top: scrollY + target.getBoundingClientRect().top,
            left: scrollX + target.getBoundingClientRect().left,
            right: scrollX + target.getBoundingClientRect().right,
            bottom: scrollY + target.getBoundingClientRect().bottom
        },
        windowPosition: {
            top: scrollY,
            left: scrollX,
            right: scrollY + document.documentElement.clientWidth,
            bottom: scrollX + document.documentElement.clientHeight
        }
    }

    return allPosition
};

const handleInputChange = (event) => {
    const input = event.target;

    input.value !== '' ? input.style.borderColor = 'greenyellow' : input.style.borderColor = ''
};

const validationForm = (form) => {
    const inputs = form.querySelectorAll('input')

    let count = 0

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.style.borderColor = 'red'
            count++
        }
    });

    return count
};

const debounce = (func, ms = 300) => {
    let timer

    return (...args) => {
        clearTimeout(timer)

        timer = setTimeout(() => { func.apply(this, args) }, ms)
    }
};

export { animate, visible, validationForm, handleInputChange, debounce }