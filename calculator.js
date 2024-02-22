let firstNumber = []

const numbers = document.querySelectorAll('.number');
numbers.forEach(
    number => number.addEventListener(
        'click',
        e => {
            const num = e.target.getAttribute('data');
            firstNumber.push(num)

            const element = document.createElement('span');
            element.textContent = num;

            const display = document.querySelector('#display');
            display.appendChild(element);
        }
    )
)

const operators = document.querySelectorAll('.operator');
operators.forEach(
    operator => operator.addEventListener(
        'click',
        e => {
            const action = e.target.getAttribute('data');

            if (action === 'add') {

            }
            else if (action === 'subtract') {

            }
            else if (action === 'multiply') {

            }
            else if (action === 'divide') {

            }
            else if (action === 'clear') {
                display.textContent = ''
                firstNumber.splice(0, firstNumber.length);
            }
            else if (action === 'delete') {
                const display = document.querySelector('#display');
                display.removeChild(display.lastElementChild)
                firstNumber.pop()
            }
        }
    )
)

const others = document.querySelectorAll('.other');
others.forEach(
    other => other.addEventListener(
        'click',
        e => console.log(e.target.getAttribute('data'))
    )
)