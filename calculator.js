let current = []
let operator = null
let next = []
let result = null

const action = ['+', '-', 'X', '/']
const numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']


const numbers = Array.from(document.getElementsByClassName('number'))
numbers.forEach(
    number => {
        number.addEventListener(
            'click',
            e => {
                const selected = e.target.getAttribute('data')
                const text = document.getElementById('display')

                if (!operator) {
                    if (selected === '0') {

                        let positive_negative = ((current.length === 1) & (current[current.length - 1] === '0')) | ((current.length === 2) & (current[0] === '-') & (current[current.length - 1] === '0'))

                        if (!positive_negative) {
                            current.push(selected)
                            const current_temp = current.join('')
                            text.textContent = current_temp
                        }
                        else { alert(`Selection ${selected} not allowed`) }
                    }
                    else {
                        current.push(selected)
                        const current_temp = current.join('')
                        text.textContent = current_temp
                    }
                }
                else {
                    if (selected === '0') {
                        if (!((next.length === 1) & (next[next.length - 1] === '0'))) {
                            next.push(selected)
                            const next_temp = next.join('')
                            text.textContent = next_temp
                        }
                        else { alert(`Selection ${selected} not allowed`) }
                    }
                    else {
                        next.push(selected)
                        const next_temp = next.join('')
                        text.textContent = next_temp
                    }
                }
            }
        )
    }
)


const operators = Array.from(document.getElementsByClassName('operator'))
operators.forEach(
    button => {
        button.addEventListener(
            'click',
            e => {
                const selected = e.target.getAttribute('data')
                const text = document.getElementById('display')

                switch (selected) {
                    case '+':
                        if (!operator) {
                            if ((current.length !== 0) & (numeric.includes(current[current.length - 1]))) {
                                operator = selected
                            }
                            else { alert(`Selection ${selected} not allowed`) }
                        }
                        else {
                            if ((next.length !== 0) & (numeric.includes(next[next.length - 1]))) {
                                result = parseFloat(calculate().toFixed(3))
                                text.textContent = result
                                current = result.toString()
                                operator = selected
                                next = []
                                result = null
                            }
                            else { alert('Incomplete information') }
                        }
                        break
                    case '-':
                        if (!operator) {
                            if (current.length === 0) {
                                current.push(selected)
                                const current_temp = current.join('')
                                text.textContent = current_temp
                            }
                            else {
                                if (numeric.includes(current[current.length - 1])) {
                                    operator = selected
                                }
                                else { alert(`Selection ${selected} not allowed`) }
                            }
                        }
                        else {
                            if ((next.length !== 0) & (numeric.includes(next[next.length - 1]))) {
                                result = parseFloat(calculate().toFixed(3))
                                text.textContent = result
                                current = result.toString()
                                operator = selected
                                next = []
                                result = null
                            }
                            else { alert('Incomplete information') }
                        }
                        break
                    case 'X':
                        if (!operator) {
                            if ((current.length !== 0) & (numeric.includes(current[current.length - 1]))) {
                                operator = selected
                            }
                            else { alert(`Selection ${selected} not allowed`) }
                        }
                        else {
                            if ((next.length !== 0) & (numeric.includes(next[next.length - 1]))) {
                                result = parseFloat(calculate().toFixed(3))
                                text.textContent = result
                                current = result.toString()
                                operator = selected
                                next = []
                                result = null
                            }
                            else { alert('Incomplete information') }
                        }
                        break
                    case '/':
                        if (!operator) {
                            if ((current.length !== 0) & (numeric.includes(current[current.length - 1]))) {
                                operator = selected
                            }
                            else { alert(`Selection ${selected} not allowed`) }
                        }
                        else {
                            if ((next.length !== 0) & (numeric.includes(next[next.length - 1]))) {
                                result = parseFloat(calculate().toFixed(3))
                                text.textContent = result
                                current = result.toString()
                                operator = selected
                                next = []
                                result = null
                            }
                            else { alert('Incomplete information') }
                        }
                        break
                    case '=':
                        if ((next.length !== 0) & (numeric.includes(next[next.length - 1]))) {
                            result = parseFloat(calculate().toFixed(3))
                            text.textContent = result
                            current = result.toString()
                            operator = null
                            next = []
                            result = null
                        }
                        else { alert('Incomplete information') }
                        break
                    case 'delete':
                        if (!operator) {
                            if (current.length !== 0) {
                                current.pop()
                                const current_temp = current.join('')
                                text.textContent = current_temp
                            }
                            else { alert('Not Allowed') }
                        }
                        else {
                            if (next.length !== 0) {
                                next.pop()
                                const next_temp = next.join('')
                                text.textContent = next_temp
                            }
                            else { alert('Not Allowed') }
                        }
                        break
                    case 'clear':
                        current = []
                        operator = null
                        next = []
                        result = null
                        text.textContent = ''
                        alert('Memory cleared')
                        break
                }
            }
        )
    }
)


const others = Array.from(document.getElementsByClassName('other'))
others.forEach(
    other => {
        other.addEventListener(
            'click',
            e => {
                const selected = e.target.getAttribute('data')
                const text = document.getElementById('display')

                switch (selected) {
                    case '.':

                        const isNumber = !operator ? numeric.includes(current[current.length - 1]) : numeric.includes(next[next.length - 1])
                        const notExist = !operator ? !current.includes(selected) : !next.includes(selected)

                        if (!operator) {
                            if ((isNumber) & (notExist)) {
                                if (typeof (current) === 'object') {
                                    current.push(selected)
                                    const current_temp = current.join('')
                                    text.textContent = current_temp
                                }
                                else { alert('Not Allowed') }
                            }
                            else { alert(`Selection ${selected} not allowed`) }
                        }
                        else {
                            if ((isNumber) & (notExist)) {
                                next.push(selected)
                                const next_temp = next.join('')
                                text.textContent = next_temp
                            }
                            else { alert(`Selection ${selected} not allowed`) }
                        }
                        break
                    case '%':
                        alert('Button disabled')
                        break
                }
            }
        )
    }
)

function calculate() {
    function add() {
        return current + next
    }

    function subtract() {
        return current - next
    }

    function multiply() {
        return current * next
    }

    function divide() {
        return current / next
    }

    current = (typeof (current) === 'object') ? parseFloat(current.join('')) : parseFloat(current)
    next = parseFloat(next.join(''))

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
            return next !== 0 ? divide() : alert(`Divide by 0 is not allowed`)
            break
    }
}