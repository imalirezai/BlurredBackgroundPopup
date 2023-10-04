const containerEl = document.querySelector('.container')

const btnEl = document.querySelector('.btn')

const popupcountainerEl = document.querySelector('.popup-container')


const closeiconEl = document.querySelector('.close-btn')

btnEl.addEventListener('click', function () {
    containerEl.classList.add('active')
    popupcountainerEl.classList.remove('active')
})

closeiconEl.addEventListener('click', () => {
    containerEl.classList.remove('active')
    popupcountainerEl.classList.add('active')
})