let first = []
let second = []
let action = ''
let calculated = false

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}


function operator() {

    const firstNumber = parseFloat(first.join(''));
    const secondNumber = parseFloat(second.join(''));
    const result = document.querySelector('#result');

    switch (action) {
        case '+':
            result.textContent = add(firstNumber, secondNumber)
            break
        case '-':
            result.textContent = subtract(firstNumber, secondNumber)
            break
        case 'X':
            result.textContent = multiply(firstNumber, secondNumber)
            break
        case '/':
            result.textContent = divide(firstNumber, secondNumber)
            break
    }

    calculated = true
}

const numbers = document.querySelectorAll('.number');
numbers.forEach(
    number => number.addEventListener(
        'click',
        e => {
            const num = e.target.getAttribute('data');
            const display = document.querySelector('#display');

            if (!action) {
                if (first[0] !== '-') {
                    if ((first.length === 1) & (first[0] === '0')) {
                        if (num === '0') {
                            console.log(`Selection ${num} is not allowed`)
                        }
                        else {
                            first[0] = num;

                            display.lastElementChild.textContent = num;
                        }
                    }
                    else {
                        first.push(num)

                        const element = document.createElement('span');
                        element.textContent = num;

                        display.appendChild(element);
                    }
                }
                else {
                    if ((first.length === 2) & (first[1] === '0')) {
                        if (num === '0') {
                            console.log(`Selection ${num} is not allowed`)
                        }
                        else {
                            first[1] = num;

                            display.lastElementChild.textContent = num;
                        }
                    }
                    else {
                        first.push(num)

                        const element = document.createElement('span');
                        element.textContent = num;

                        display.appendChild(element);
                    }
                }

            }
            else {
                if ((second.length === 1) & (second[0] === '0')) {
                    if (num === '0') {
                        console.log(`Selection ${num} is not allowed`)
                    }
                    else {
                        second[0] = num;

                        display.lastElementChild.textContent = num;
                    }
                }
                else {
                    second.push(num)

                    const element = document.createElement('span');
                    element.textContent = num;

                    display.appendChild(element);
                }
            }
        }
    )
)

const buttons = document.querySelectorAll('.operator');
buttons.forEach(button => button.addEventListener(
    'click',
    e => {
        const selected = e.target.getAttribute('data');
        const display = document.querySelector('#display');
        const result = document.querySelector('#result');

        switch (selected) {
            case 'clear':

                display.textContent = '';
                result.textContent = '';
                second.splice(0, second.length);
                first.splice(0, first.length);
                action = '';
                calculated = false;
                break;

            case 'delete':

                const lastChild = display.lastElementChild;
                const lastItem = lastChild.textContent;

                display.removeChild(lastChild);

                if (['+', '-', 'X', '/'].includes(lastItem)) {
                    action = '';
                }
                else {
                    if (second.length !== 0) { second.pop(); }
                    else { first.pop(); }
                }
                break;

            case '+':

                if (first.length !== 0) {
                    if (!(['+', '-', 'X', '/'].includes(first[first.length - 1]))) {
                        if (!action) {
                            const element = document.createElement('span');
                            element.textContent = selected;

                            display.appendChild(element);
                            action = selected;
                        }
                        else {
                            console.log(`Selection ${selected} not allowed`)
                        }
                    }
                    else {
                        console.log(`Selection ${selected} not allowed`)
                    }
                }
                else {
                    console.log(`Selection ${selected} not allowed`)
                }
                break;

            case '-':

                if (first.length === 0) {
                    const element = document.createElement('span');
                    element.textContent = '-';

                    display.appendChild(element);
                    first.push(selected);
                }
                else {
                    // To prevent user input "-" followed by "-"
                    if (!(['+', '-', 'X', '/'].includes(first[first.length - 1]))) {
                        if (!action) {
                            const element = document.createElement('span');
                            element.textContent = selected;

                            display.appendChild(element);
                            action = selected;
                        }
                        else {
                            console.log(`Selection ${selected} not allowed`)
                        }
                    }
                    else {
                        console.log(`Selection ${selected} not allowed`)
                    }
                }
                break;

            case 'X':

                if (first.length !== 0) {
                    if (!(['+', '-', 'X', '/'].includes(first[first.length - 1]))) {
                        if (!action) {
                            const element = document.createElement('span');
                            element.textContent = selected;

                            display.appendChild(element);
                            action = selected;
                        }
                        else {
                            console.log(`Selection ${selected} not allowed`)
                        }
                    }
                    else {
                        console.log(`Selection ${selected} not allowed`)
                    }
                }
                else {
                    console.log(`Selection ${selected} not allowed`)
                }
                break;

            case '/':

                if (first.length !== 0) {
                    if (!(['+', '-', 'X', '/'].includes(first[first.length - 1]))) {
                        if (!action) {
                            const element = document.createElement('span');
                            element.textContent = selected;

                            display.appendChild(element);
                            action = selected;
                        }
                        else {
                            console.log(`Selection ${selected} not allowed`)
                        }
                    }
                    else {
                        console.log(`Selection ${selected} not allowed`)
                    }
                }
                else {
                    console.log(`Selection ${selected} not allowed`)
                }
                break;

            case '=':

                if (second.length) {
                    if (!calculated) {
                        operator();
                    }
                    else { console.log('Calculation is completed.') }
                }
                else { console.log('Failed to do calculation. Missing information!!') }

                break;
        }
    }
)
)

const others = document.querySelectorAll('.other');
others.forEach(
    other => other.addEventListener(
        'click',
        e => {
            const selected = e.target.getAttribute('data');
            const display = document.querySelector('#display');
            const numberCheck = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

            switch (selected) {
                case '%':

                    console.log(`Selection ${selected} is disabled`);

                case '.':

                    if (!action) {
                        if (first.length !== 0) {
                            if (numberCheck.includes(first[0])) {
                                if (!(selected.includes(first[first.length - 1]))) {
                                    if (!(first.includes(selected))) {
                                        first.push(selected);

                                        const element = document.createElement('span');
                                        element.textContent = selected;

                                        display.appendChild(element);
                                    }
                                    else { console.log(`selected ${selected} not allowed`) }
                                }
                                else { console.log(`selected ${selected} not allowed`) }
                            }
                            else if (['+', '-', 'X', '-'].includes(first[0])) {
                                if (numberCheck.includes(first[1])) {
                                    if (!(selected.includes(first[first.length - 1]))) {
                                        if (!(first.includes(selected))) {
                                            first.push(selected);

                                            const element = document.createElement('span');
                                            element.textContent = selected;

                                            display.appendChild(element);
                                        }
                                        else { console.log(`selected ${selected} not allowed`) }
                                    }
                                    else { console.log(`selected ${selected} not allowed`) }
                                }
                                else { console.log(`selected ${selected} not allowed`) }
                            }
                            else { console.log(`selected ${selected} not allowed`) }
                        }
                        else { console.log(`selected ${selected} not allowed`) }
                    }
                    else {
                        if (second.length !== 0) {
                            if (!(selected.includes(second[second.length - 1]))) {
                                if (!(second.includes(selected))) {
                                    second.push(selected);

                                    const element = document.createElement('span');
                                    element.textContent = selected;

                                    display.appendChild(element);
                                }
                                else { console.log(`selected ${selected} not allowed`) }
                            }
                            else { console.log(`selected ${selected} not allowed`) }
                        }
                        else { console.log(`selected ${selected} not allowed`) }
                    }

            }
        }
    )
)

