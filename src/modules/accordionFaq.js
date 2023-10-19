const accordionFaq = () => {
    const accordionFaq = document.querySelector('.accordion')
    const questions = accordionFaq.querySelectorAll('.title_block')

    questions.forEach((question, numberQuestion) => {
        question.addEventListener('click', (e) => {
            e.preventDefault();

            questions.forEach((item, index) => {
                if (numberQuestion === index) {
                    item.classList.add('msg-active')
                } else {
                    item.classList.remove('msg-active')
                }
            })
        })
    })

}

export default accordionFaq