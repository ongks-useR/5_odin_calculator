let userInput = null
let first = []
let operator = null
let second = []
let result = null
let indexOfOperator = []
let calculated = false

const operators = ['+', '-', 'X', '/']
const numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const numbers = document.querySelectorAll('.number');
numbers.forEach(
    number => number.addEventListener(
        'click',
        e => {
            // only allow user to input number if calculation is not done
            if (!calculated) {
                const num = e.target.getAttribute('data');
                const element = document.createElement('span')
                const display = document.querySelector('#display');

                let displayText = Array.from(document.querySelectorAll('#display > span'))
                displayText = displayText.map(text => { return text.textContent })

                let textIndex = []

                displayText.forEach((text, index) => {
                    if (operators.includes(text)) {
                        if (index !== 0)
                            textIndex.push(index)
                    }
                })

                if (textIndex.length === 0) {
                    if (displayText.length === 0) {
                        element.textContent = num

                        display.appendChild(element);
                    }
                    else if (displayText.length === 1) {
                        if (displayText[0] === '0') {
                            if (num === '0') {
                                alert(`Selection ${num} not allowed`)
                            }
                            else { display.lastElementChild.textContent = num; }
                        }
                        else {
                            element.textContent = num
                            display.appendChild(element);
                        }
                    }
                    else if (displayText.length === 2) {
                        if ((displayText[0] === '-') & (displayText[1] === '0')) {
                            alert(`Selection ${num} not allowed`)
                        }
                        else {
                            element.textContent = num
                            display.appendChild(element);
                        }
                    }
                    else {
                        element.textContent = num
                        display.appendChild(element);
                    }
                }
                else {
                    textIndex = textIndex[textIndex.length - 1]
                    displayText = displayText.slice(textIndex + 1)

                    if (displayText.length === 0) {
                        element.textContent = num

                        display.appendChild(element);
                    }
                    else if (displayText.length === 1) {
                        if (displayText[0] === '0') {
                            if (num === '0') {
                                alert(`Selection ${num} not allowed`)
                            }
                            else { display.lastElementChild.textContent = num; }
                        }
                        else {
                            element.textContent = num
                            display.appendChild(element);
                        }
                    }
                    else if (displayText.length === 2) {
                        if ((displayText[0] === '-') & (displayText[1] === '0')) {
                            alert(`Selection ${num} not allowed`)
                        }
                        else {
                            element.textContent = num
                            display.appendChild(element);
                        }
                    }
                    else {
                        element.textContent = num
                        display.appendChild(element);
                    }
                }
            }
            else { alert("Calculation is completed") }
        }
    )
)


const buttons = document.querySelectorAll('.operator');
buttons.forEach(button => button.addEventListener(
    'click',
    e => {
        const selected = e.target.getAttribute('data');

        const display = document.querySelector('#display');
        let displayText = Array.from(document.querySelectorAll('#display > span'))
        displayText = displayText.map(text => { return text.textContent })

        const answer = document.querySelector('#result');
        const element = document.createElement('span');

        switch (selected) {
            case 'clear':
                display.textContent = '';
                answer.textContent = '';
                userInput = []
                first = null
                operator = null;
                second = null
                result = null;
                indexOfOperator = [];
                calculated = false;
                break;

            case 'delete':
                // warn user if nothing to delete
                if (isNaN(display.lastElementChild)) {
                    const lastChild = display.lastElementChild;

                    // After calculation is done, disable this button
                    if (!calculated) {
                        display.removeChild(lastChild);
                    }
                    else { alert(`Selection ${selected} not allowed`) }
                }
                else { alert(`Selection ${selected} not allowed. Nothing to delete.`) }

                break;

            case '+':
                if (!calculated) {
                    if (displayText.length !== 0) {
                        if (!operators.includes(displayText[displayText.length - 1])) {
                            element.textContent = selected;
                            display.appendChild(element);
                        }
                        else { alert(`Selection ${selected} not allowed`) }
                    }
                    else { alert(`Selection ${selected} not allowed`) }
                }
                else { alert("Calculation is completed.") }
                break

            case '-':
                if (!calculated) {
                    if (!operators.includes(displayText[displayText.length - 1])) {
                        element.textContent = selected;
                        display.appendChild(element);
                    }
                    else { alert(`Selection ${selected} not allowed`) }
                }
                else { alert("Calculation is completed.") }
                break

            case 'X':
                if (!calculated) {
                    if (displayText.length !== 0) {
                        if (!operators.includes(displayText[displayText.length - 1])) {
                            element.textContent = selected
                            display.appendChild(element)
                        }
                        else { alert(`Selection ${selected} not allowed`) }
                    }
                    else { alert(`Selection ${selected} not allowed`) }
                }
                else { alert("Calculation is completed.") }
                break

            case '/':
                if (!calculated) {
                    if (displayText.length !== 0) {
                        if (!operators.includes(displayText[displayText.length - 1])) {
                            element.textContent = selected
                            display.appendChild(element)
                        }
                        else { alert(`Selection ${selected} not allowed`) }
                    }
                    else { alert(`Selection ${selected} not allowed`) }
                }
                else { alert("Calculation is completed.") }
                break

            case '=':
                if (!calculated) {
                    if (display.textContent.length !== 0) {

                        let textIndex = []

                        displayText.forEach((text, index) => {
                            if (operators.includes(text)) {
                                if (index !== 0)
                                    textIndex.push(index)
                            }
                        })

                        if (textIndex.length !== 0) {
                            if (numeric.includes(displayText[displayText.length - 1])) {
                                performCalculation()
                                calculated = true;

                                answer.textContent = Math.round(result * 100) / 100
                            }
                            else { alert('Missing info for calculation') }
                        }
                        else { alert('Missing info for calculation') }
                    }
                    else { alert('Missing info for calculation') }
                }
                else { alert("Calculation is completed.") }
                break
        }
    }
))


const others = document.querySelectorAll('.other');
others.forEach(
    other => other.addEventListener(
        'click',
        e => {
            const selected = e.target.getAttribute('data');
            const display = document.querySelector('#display');
            const element = document.createElement('span');

            switch (selected) {
                case '%':
                    alert(`Selection ${selected} is disabled`);
                    break

                case '.':
                    let displayText = Array.from(document.querySelectorAll('#display > span'))
                    displayText = displayText.map(text => { return text.textContent })
                    let textIndex = []

                    displayText.forEach((text, index) => {
                        if (operators.includes(text)) {
                            if (index !== 0)
                                textIndex.push(index)
                        }
                    })

                    // Doesn't allow user to input ".." / "2.5." / ".5" / "+.5"
                    if (textIndex.length) {
                        let lastText = displayText.slice(textIndex[textIndex.length - 1] + 1)

                        if (numeric.includes(lastText[lastText.length - 1])) {
                            if (!lastText.includes(selected)) {
                                element.textContent = selected;
                                display.appendChild(element);
                            }
                            else { alert('Selection not allowed') }
                        }
                        else { alert('Selection not allowed') }
                    }
                    else {
                        if (numeric.includes(displayText[displayText.length - 1])) {
                            if (!displayText.includes(selected)) {
                                element.textContent = selected;
                                display.appendChild(element);
                            }
                            else { alert('Selection not allowed') }
                        }
                        else { alert('Selection not allowed') }
                    }
                    break
            }
        }
    )
)


function add() {
    return first + second
}

function subtract() {
    return first - second
}

function multiply() {
    return first * second
}

function divide() {
    return first / second
}

function mathOperation() {
    switch (operator) {
        case '+':
            return add()
            break
        case '-':
            return subtract()
            break
        case 'X':
            return multiply()
            break
        case '/':
            return divide()
            break
    }
}

function performCalculation() {
    userInput = Array.from(document.querySelectorAll('#display span'));
    userInput = userInput.map(input => input.textContent);

    userInput.forEach(
        (selected, index) => {
            if (operators.includes(selected)) {
                if (index !== 0) {
                    indexOfOperator.push(index)
                }
            }
        }
    )

    const totalOperator = indexOfOperator.length

    indexOfOperator.forEach(
        (item, index) => {
            if (totalOperator === 1) {
                first = userInput.slice(0, item)
                first = parseFloat(first.join(''))

                operator = userInput[item]

                second = userInput.slice(item + 1, userInput.length)
                second = parseFloat(second.join(''))

                result = mathOperation()
            }
            else {
                if (!result) {
                    first = userInput.slice(0, item)
                    first = parseFloat(first.join(''))

                    operator = userInput[item]

                    second = userInput.slice(item + 1, indexOfOperator[index + 1])
                    second = parseFloat(second.join(''))

                    result = mathOperation()
                }
                else {
                    first = result

                    operator = userInput[item]

                    second = userInput.slice(item + 1, indexOfOperator[index + 1])
                    second = parseFloat(second.join(''))

                    result = mathOperation()
                }
            }
        }
    )
}