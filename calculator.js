const numbers = document.querySelectorAll('.number');
numbers.forEach(
    number => number.addEventListener(
        'click',
        e => console.log(e.target.getAttribute('data'))
    )
)

const operators = document.querySelectorAll('.operator');
operators.forEach(
    operator => operator.addEventListener(
        'click',
        e => console.log(e.target.getAttribute('data'))
    )
)

const others = document.querySelectorAll('.other');
others.forEach(
    other => other.addEventListener(
        'click',
        e => console.log(e.target.getAttribute('data'))
    )
)