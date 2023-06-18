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
let finalValue = 0;

const calculatorButtons = document.querySelectorAll('.calculator-button');
calculatorButtons.forEach((calculatorButton) => {
    calculatorButton.addEventListener('click', () => {
        if ( // if there is no value in a and number
            a === 0 && calculatorButton.id === '0' ||
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
        } else if ( //operator 
            calculatorButton.id === '+' ||
            calculatorButton.id === '-' ||
            calculatorButton.id === '*' ||
            calculatorButton.id === '/') {
                if (numberB.length != 0) { //instead of pressing = we want to do more numbers
                    b = arrayToNum(numberB);
                    finalValue = operate(a,sign,b);
                    console.log(finalValue);
                    clear();
                    a = finalValue;
                    sign = calculatorButton.id;
                } else { //after first number we want to select operator
                    a = arrayToNum(numberA);
                    sign = calculatorButton.id;
                }

        } else if ( // if there is value in in a and number (value goes to b)
            calculatorButton.id === '0' ||
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
        } else if (calculatorButton.id === '='){ // after equal sign
            if (sign === '/' && numberB[0] === '0') { //if user tries to divide by 0
                clear()
                console.log("You can't divide by 0. Try again.")
            } else if (numberB.length === 0){ //if user didn't complete operation
                clear()
                console.log("Complete the expression before pressing =. Try Again.")
            } else {
                b = arrayToNum(numberB);
                finalValue = operate(a,sign,b);
                console.log(Math.round((finalValue + Number.EPSILON) * 1000) / 1000);
                clear()
                finalValue = 0;
            }

        } else if (calculatorButton.id === 'clear') { //wipe and start fresh
            clear()
            finalValue = 0;
        }
    });
});

function arrayToNum(array) {
    return parseInt(array.join(""));
}

function clear() {
    a = 0;
    b = 0;
    numberA = [];
    numberB = [];
    sign = '+';
}