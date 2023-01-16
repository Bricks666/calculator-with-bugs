/**
 * @type {HTMLFormElement}
 */
const form = document.querySelector('.calculator')

/**
 * @type {NodeListOf<HTMLButtonElement>}
 */
const buttons = document.querySelectorAll('.button__number')
/**
 * @type {HTMLInputElement}
 */
const input = document.querySelector('.input')

const actionLiterals = ['*', '/', '+', '-']

/**
 * @type {NodeListOf<HTMLButtonElement>}
 */
const actions = document.querySelectorAll('.button__action')

/**
 * @type {NodeListOf<HTMLButtonElement>}
 */
const symbols = document.querySelectorAll('.button__symbol')

/**
 * @type {HTMLButtonElement}
 */
const erase = document.querySelector('.button__erase_one')



buttons.forEach((button) => {
    const number = Number(button.getAttribute('data-number'))
    button.addEventListener('click', () => {

        if (Number.isNaN(number)) {
            return
        }

        input.value += number
    })
})

actions.forEach((button) => {
    const action = button.getAttribute('data-action')
    button.addEventListener('click', () => {
        const lastSumbol = input.value.trim().at(-1)
        const isFirst = !input.value.length

        if (actionLiterals.includes(lastSumbol) || isFirst) {
            return
        }

        input.value += action
    })

})

symbols.forEach((button) => {
    const symbol = button.getAttribute('data-symbol')
    button.addEventListener('click', () => {
        const isFirst = !input.value.length

        if (isFirst && (symbol === ')')) {
            return
        }


        input.value += symbol

    })
})

form.addEventListener('submit', (evt) => {
    evt.preventDefault()
    const { value } = input

    const result = eval(value)
    if (!Number.isFinite(result)) {
        alert("You mustn't divide by zero")
        return
    }
    input.value = result



})

erase.addEventListener('click', () => {
    input.value = input.value.slice(0, input.value.length - 1)
})