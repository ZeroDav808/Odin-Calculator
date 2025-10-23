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
    result: null,
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

function clear(){
    console.log('Clear function has been called.');
    display.textContent = '';

    for(let key in values){
        values[key] = null;
        console.log(`${key} has been reset to ${values[key]}`);
    }
}

function handleNumber(value){
    console.log('Number function has been called');

    if(!values.operation){
        if(!values.num1){
            values.num1 = value;
        } else {
            values.num1 += value;
        }
        display.textContent = values.num1;
    } else {
        if(!values.num2){
            values.num2 = value;
        } else {
            values.num2 += value;
        }
        display.textContent = values.num2;
    }
}

function handleOperation(value){
    values.operation = value;
    display.textContent = '';
}

function handleEqual(){
    values.result = operate(+values.num1, +values.num2, values.operation);
    display.textContent = values.result;
}

function handleClick(event){
    const classClicked = event.target.className;
    const value = event.target.textContent;

    console.log(`Class clicked is ${classClicked} and the value is ${value}`);

    switch(classClicked){
        case 'number':
            handleNumber(value);
            break;
        case 'operator':
            handleOperation(value);
            break;
        case 'clear':
            clear();
            break;
        case 'equal':
            handleEqual();
            break;
        default:
            console.log('Invalid item?');
            break;
    }
}

const btnContainer = document.querySelector('.calculator-body');
const display = document.querySelector('.calculator-display');

btnContainer.addEventListener('click', function(e){
    handleClick(e)
});