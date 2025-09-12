const add = function(a, b){
    return a + b;
}

const sub = function(a, b){
    return a - b;
}

const mult = function(a, b){
    return a * b;
}

const div = function(a, b){
    if(b == 0){
        return `Can't divide by zero!`;
    }

    return a / b;
}

function operate(operand1, operand2, operation){
    switch(operation){
        case '+':
            console.log(`${operand1} ${operation} ${operand2} = ${add(operand1, operand1)}`);
            break;
        case '-':
            console.log(`${operand1} ${operation} ${operand2} = ${sub(operand1, operand1)}`);
            break;
        case '*':
            console.log(`${operand1} ${operation} ${operand2} = ${mult(operand1, operand1)}`);
            break;
        case '/':
            console.log(`${operand1} ${operation} ${operand2} = ${div(operand1, operand1)}`);
            break;
        default:
            console.log('???????');
    }
}