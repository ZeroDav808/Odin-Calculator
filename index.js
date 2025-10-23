function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    if(b === 0){
        return 'Cannot divide by Zero';
    }

    return a / b;
}

const values = {
    num1: null,
    operation: null,
    num2: null,
}

function operate(num1, num2, operation){
    switch(operation){
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1,num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return 'Invalid Operation! Could not complete computation!';
    }
}

const btnContainer = document.querySelector('.calculator-body');
const display = document.querySelector('.calculator-display');

btnContainer.addEventListener('click', (e)=>{
    display.textContent = e.target.textContent;
})