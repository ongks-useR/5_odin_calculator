let first = []
let second = []
let action = ''

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
                case '.':

                    if (!action) {
                        if (first.length !== 0) {
                            if (['+', '-', 'X', '-'].includes(first[0])) {
                                if (numberCheck.includes(first[1])) {
                                    if (!(selected.includes(first[first.length - 1]))) {
                                        if (!(first.includes(selected))) {
                                            first.push(selected);

                                            const element = document.createElement('span');
                                            element.textContent = selected;

                                            display.appendChild(element);
                                        }
                                        else { console.log(`Selection ${selected} not allowed`) }
                                    }
                                    else { console.log(`Selection ${selected} not allowed`) }
                                }
                                else { console.log(`Selection ${selected} not allowed`) }
                            }
                            else {
                                if (numberCheck.includes(first[0])) {
                                    if (!(selected.includes(first[first.length - 1]))) {
                                        if (!(first.includes(selected))) {
                                            first.push(selected);

                                            const element = document.createElement('span');
                                            element.textContent = selected;

                                            display.appendChild(element);
                                        }
                                        else { console.log(`Selection ${selected} not allowed`) }
                                    }
                                    else { console.log(`Selection ${selected} not allowed`) }
                                }
                                else { console.log(`Selection ${selected} not allowed`) }
                            }
                        }
                        else { console.log(`Selection ${selected} not allowed`) }
                    }
                    else {
                        if (second.length !== 0) {
                            if (numberCheck.includes(second[0])) {
                                if (!(selected.includes(second[second.length - 1]))) {
                                    if (!(second.includes(selected))) {
                                        second.push(selected);

                                        const element = document.createElement('span');
                                        element.textContent = selected;

                                        display.appendChild(element);
                                    }
                                    else { console.log(`Selection ${selected} not allowed`) }
                                }
                                else { console.log(`Selection ${selected} not allowed`) }
                            }
                            else { console.log(`Selection ${selected} not allowed`) }
                        }
                        else { console.log(`Selection ${selected} not allowed`) }
                    }

            }
        }
    )
)