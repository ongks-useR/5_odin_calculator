let first = []
let second = []
let action = ''

const numbers = document.querySelectorAll('.number');
numbers.forEach(
    number => number.addEventListener(
        'click',
        e => {
            const num = e.target.getAttribute('data');

            if (!action) {
                first.push(num)

                const element = document.createElement('span');
                element.textContent = num;

                const display = document.querySelector('#display');
                display.appendChild(element);
            }
            else {
                second.push(num)

                const element = document.createElement('span');
                element.textContent = num;

                const display = document.querySelector('#display');
                display.appendChild(element);
            }
        }
    )
)

const operators = document.querySelectorAll('.operator');
operators.forEach(operator => operator.addEventListener(
    'click',
    e => {
        const selected = e.target.getAttribute('data');
        const display = document.querySelector('#display');

        switch (selected) {
            case 'clear':

                display.textContent = '';
                second.splice(0, second.length);
                first.splice(0, first.length);
                action = '';
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