
let firstNumber = [];
let between = null;
let secondNumber = [];
let answer = null;


/* All numbers: 0 - 9 */
const numbers = document.querySelectorAll(".number");

numbers.forEach(
    num => num.addEventListener(
        'click',
        function() {
            const span = document.createElement('span');

            span.textContent = this.id;

            const operation = document.querySelector(".display.operation");
            operation.appendChild(span);

            if (between === null) {
                firstNumber.push(this.id);
            }
            else {
                secondNumber.push(this.id);
            }
        }
    )
);

/* The button C that clear everything */
const restartOperation = document.querySelector(".fa-c");

restartOperation.addEventListener(
    'click',
    function() {

        const operation = document.querySelector(".display.operation");
        operation.textContent = "";

        const result = document.querySelector(".display.result");
        result.textContent = "";

        firstNumber = [];
        between = null;
        secondNumber = [];
        answer = null;
    }
);


/* The delete button: delete the last number on the display */
const deleteNumber = document.querySelector(".fa-delete-left");

deleteNumber.addEventListener(
    'click',
    function() {
        const operation = document.querySelector(".display.operation");
        operation.lastChild.remove();

        if (secondNumber.length !== 0) {
            secondNumber.pop()
        }
        else if (between !== null) {
            between = null
        }
        else if (firstNumber.length !== 0) {
            firstNumber.pop()
        }
    }
);


/* PLUS / MINUS / DIVIDE / MULTIPLY operator */
const operators = document.querySelectorAll(".operator");

operators.forEach(
    operator => { operator.addEventListener(
        'click',
        function() {

            if (firstNumber.length !== 0 && between === null) {
                const operation = document.querySelector(".display.operation");
            
                const span = document.createElement('span');
                span.textContent = this.id;
    
                operation.appendChild(span);

                between = this.id;
            }
            else if (firstNumber.length !== 0 && between !== null && secondNumber.length !== 0) {

                let firstValue = firstNumber.reduce((total, current) => {
                    if (current !== "%") {
                        total = total + current
                    }
                    else {
                        total = Number(total) / 100
                    }
    
                    return total;
                }, "");
    
                let secondValue = secondNumber.reduce((total, current) => {
                    if (current !== "%") {
                        total = total + current
                    }
                    else {
                        total = Number(total) / 100
                    }
    
                    return total;
                }, "");

                answer = operate(firstValue, between, secondValue);

                firstNumber = [];
                between = "";
                secondNumber = [];

                const temporary = document.querySelector(".display.operation");
                const a = document.createElement('span'); // firstNumber
                a.textContent = String(answer);

                const b = document.createElement('span'); // between
                b.textContent = this.id;

                temporary.textContent = "";
                temporary.appendChild(a);
                temporary.appendChild(b);

                firstNumber.push(String(answer));
                between = this.id;
            }
            else {
                alert("Not Allowed !!")
                console.log("Not allowed !!")
            }
        }
    ) }
);


/* Percent sign */
const percent = document.querySelector(".fa-percent");

percent.addEventListener(
    'click',
    function() {

        if (firstNumber.length !== 0 && !firstNumber.includes(this.id)) {
            const operation = document.querySelector(".display.operation");
            
            const span = document.createElement('span');
            span.textContent = this.id;
    
            operation.appendChild(span);
            firstNumber.push(this.id);
        }
        else if (secondNumber.length !== 0 && !secondNumber.includes(this.id)) {
            const operation = document.querySelector(".display.operation");
            
            const span = document.createElement('span');
            span.textContent = this.id;
    
            operation.appendChild(span);
            secondNumber.push(this.id);
        }
        else {
            alert("Not Allowed !!")
        }

    }
);


/* Mathematics decimal point separator */
const decimal = document.querySelector(".fa-dot");

decimal.addEventListener(
    'click',
    function() {

        const operation = document.querySelector(".display.operation");

        if (firstNumber.length !== 0 && !firstNumber.includes(this.id)) {
         
            const span = document.createElement('span');
            span.textContent = this.id;
    
            operation.appendChild(span);
            firstNumber.push(this.id);
        }
        else if (secondNumber.length !== 0 && !secondNumber.includes(this.id)) {
            const span = document.createElement('span');
            span.textContent = this.id;
    
            operation.appendChild(span);
            secondNumber.push(this.id);
        }
        else {
            alert("Not Allowed !!")
            console.log("Not Allowed !!")
        }
    }
);


/* The EQUAL button */
const calculate = document.querySelector(".fa-equals");

function operate(first, operator, second) {

    let c = null;

    if (operator === '+') {
        c = Number(first) + Number(second)
    }
    else if (operator === '−') {
        c = Number(first) - Number(second)
    }
    else if (operator === '×') {
        c = Number(first) * Number(second)
    }
    else if (operator === '÷') {
        
        if (Number(second) !== 0) {
            c = Number(first) / Number(second)
        }
        else {
            alert("ERROR: Not allowed to divide by 0 !!")
            return
        }
        
    }

    return Math.round(c * 100) / 100;
};

calculate.addEventListener(
    'click',
    function() {

        const validation = firstNumber.length !== 0 && between !== null && secondNumber.length !== 0

        if (validation) {

            let firstValue = firstNumber.reduce((total, current) => {
                if (current !== "%") {
                    total = total + current
                }
                else {
                    total = Number(total) / 100
                }

                return total;
            }, "");

            let secondValue = secondNumber.reduce((total, current) => {
                if (current !== "%") {
                    total = total + current
                }
                else {
                    total = Number(total) / 100
                }

                return total;
            }, "");
    
            answer = operate(firstValue, between, secondValue);
    
            const result = document.querySelector(".display.result");
            const span = document.createElement('span');
            span.textContent = answer;
    
            result.appendChild(span);

        }
        else {
            alert("Missing inputs !!")
        }

    }
);