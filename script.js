function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, operator, b) {
    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else if (operator === '*') {
        return multiply(a, b);
    } else if (operator === '/') {
        return divide(a, b);
    }
}

let numberA = [];
let a = 0;
let numberB = [];
let b = 0;
let sign = '+';
let toggle = true;

const calculatorButtons = document.querySelectorAll('.calculator-button');
calculatorButtons.forEach((calculatorButton) => {
    calculatorButton.addEventListener('click', () => {
        if (
            a === 0 && calculatorButton.id === '1' ||
            a === 0 && calculatorButton.id === '2' ||
            a === 0 && calculatorButton.id === '3' ||
            a === 0 && calculatorButton.id === '4' ||
            a === 0 && calculatorButton.id === '5' ||
            a === 0 && calculatorButton.id === '6' ||
            a === 0 && calculatorButton.id === '7' ||
            a === 0 && calculatorButton.id === '8' ||
            a === 0 && calculatorButton.id === '9') {
            numberA.push(calculatorButton.id);
            console.log('a work')
        } else if (
            calculatorButton.id === '+' ||
            calculatorButton.id === '-' ||
            calculatorButton.id === '*' ||
            calculatorButton.id === '/') {
                a = parseInt(numberA.join(""));
                console.log(a);
                sign = calculatorButton.id;
                aActive = false;
        } else if (
            calculatorButton.id === '1' ||
            calculatorButton.id === '2' ||
            calculatorButton.id === '3' ||
            calculatorButton.id === '4' ||
            calculatorButton.id === '5' ||
            calculatorButton.id === '6' ||
            calculatorButton.id === '7' ||
            calculatorButton.id === '8' ||
            calculatorButton.id === '9'
        ) {
            numberB.push(calculatorButton.id);
            console.log('b work')
        } else {
            b = parseInt(numberB.join(""));
            console.log(operate(a,sign,b));
        }
    });
});
