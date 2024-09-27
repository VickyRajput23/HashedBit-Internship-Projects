let result;

// take operator input
const operator = prompt('Enter operator (either +, -, * or / )');


//take operand/numbers input
const num1 = parseFloat(prompt('Enter 1st number: '));
const num2  = parseFloat(prompt('Enter 2nd number: '));

switch(operator){
    case '+': result = num1 + num2;
    console.log(num1 + " + " + num2 + " = " + result);
    break;

    case '-': result = num1 - num2;
    console.log(num1 + " - " + num2 + " = " + result);
    break;

    case '*': result = num1 * num2;
    console.log(num1 + " * " + num2 + " = " + result);
    break;

    case '/': result = num1 / num2;
    console.log(num1 + "/" + num2 + " = " + result);
    break;

    default:
        console.log('Invalid operator');
        break;
}

