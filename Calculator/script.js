const operationScreen = document.querySelector('.operation-screen');
const sumScreen = document.querySelector('.sum-screen');

const button1 = document.querySelector('#button-1');
const button2 = document.querySelector('#button-2');
const button3 = document.querySelector('#button-3');
const button4 = document.querySelector('#button-4');
const button5 = document.querySelector('#button-5');
const button6 = document.querySelector('#button-6');
const button7 = document.querySelector('#button-7');
const button8 = document.querySelector('#button-8');
const button9 = document.querySelector('#button-9');
const button0 = document.querySelector('#button-0');
const buttonEraseAll = document.querySelector('#erase-all');
const buttonEraseOne = document.querySelector('#erase-one');
const buttonPoint = document.querySelector('#button-point');
const buttonEqual = document.querySelector('#button-sum');
const buttonAdd = document.querySelector('#button-add');
const buttonSubstract = document.querySelector('#button-substract');
const buttonMultiply = document.querySelector('#button-multiply');
const buttonDivide = document.querySelector('#button-divide');
let conditionArray = ['+', '-', 'x', '/', '.'];
let operatorsArray = ['+', '-', 'x', '/' ];

document.addEventListener('DOMContentLoaded', () => {
    button1.addEventListener('click', () => {
        operationScreen.textContent += '1';
    });
    button2.addEventListener('click', () => {
        operationScreen.textContent += '2';
    });
    button3.addEventListener('click', () => {
        operationScreen.textContent += '3';
    });
    button4.addEventListener('click', () => {
        operationScreen.textContent += '4';
    });
    button5.addEventListener('click', () => {
        operationScreen.textContent += '5';
    });
    button6.addEventListener('click', () => {
        operationScreen.textContent += '6';
    });
    button7.addEventListener('click', () => {
        operationScreen.textContent += '7';
    });
    button8.addEventListener('click', () => {
        operationScreen.textContent += '8';
    });
    button9.addEventListener('click', () => {
        operationScreen.textContent += '9';
    });
    button0.addEventListener('click', () => {
        operationScreen.textContent += '0';
    });

    function operationFunc(operator) {
        
        if( operatorsArray.some(element => operationScreen.textContent.slice(1,-1).includes(element))) {
            let foundedElement = operatorsArray.find(element => operationScreen.textContent.slice(1,-1).includes(element))
            getSum(foundedElement);
            operationScreen.textContent = sumScreen.textContent + operator;
        } else {
            if(conditionArray.every(item => operationScreen.textContent.at(-1) !== item) 
            && operationScreen.textContent !== '') {
            operationScreen.textContent += operator;
        }else if(conditionArray.some(item => operationScreen.textContent.at(-1) === item) 
            && conditionArray.every(item => operationScreen.textContent.at(-2) !== item))  {
            operationScreen.textContent = operationScreen.textContent.slice(0,-1) + operator;
        }
        }
    }
     function getSum (operator) {
        let operatorIndex = operationScreen.textContent.indexOf(operator, 1);
        let num1 = +operationScreen.textContent.slice(0,operatorIndex);
        let num2 = +operationScreen.textContent.slice(operatorIndex + 1);
        let sum;
        if (operator === '+') sum = num1 + num2;
        else if (operator === '-') sum = num1 - num2;
        else if (operator === 'x') sum = num1 * num2;
        else if (operator === '/'&& num2 !== 0) sum = num1 / num2;
        else if (operator === '/'&& num2 === 0) sumScreen.textContent = 'can\'t divide by zero';
        sum = sum.toFixed(3);
        sum = sum.toString();
        sum = +sum;
        sumScreen.textContent = sum;
     }


    buttonAdd.addEventListener('click', () => {
        operationFunc('+');
    });


    buttonSubstract.addEventListener('click', () => {
        if( operatorsArray.some(element => operationScreen.textContent.slice(-2,-1).includes(element))) {
            let foundedElement = operatorsArray.find(element => operationScreen.textContent.slice(-2,-1).includes(element))
            getSum(foundedElement);
            operationScreen.textContent = sumScreen.textContent + '-';
        } else if(operationScreen.textContent.at(-1) !== '+' 
                && operationScreen.textContent.at(-1) !== '-'
                && operationScreen.textContent.at(-1) !== '.') {

            operationScreen.textContent += '-';

        }else if(operationScreen.textContent.at(-1) === '+' 
                || operationScreen.textContent.at(-1) === '-') {

                 operationScreen.textContent = operationScreen.textContent.slice(0,-1) + '-';
        };
        
        
    });

    buttonMultiply.addEventListener('click', () => {
        operationFunc('x');
    });


    buttonDivide.addEventListener('click', () => {
        operationFunc('/');
    });


    buttonPoint.addEventListener('click', () => {
        if( operationScreen.textContent !== ''
            && !operationScreen.textContent.includes('.')
        ||  conditionArray.some(item => operationScreen.textContent.lastIndexOf(item) > operationScreen.textContent.lastIndexOf('.')) 
            && conditionArray.every(item => operationScreen.textContent.at(-1) !== item)){

            operationScreen.textContent += '.';
        }
    });

    buttonEqual.addEventListener('click',() => {
        if(sumScreen.textContent !== operationScreen.textContent
            && operatorsArray.some(element => operationScreen.textContent.includes(element))
            && operatorsArray.every(element => operationScreen.textContent.at(-1) !== element)) {
            let operator = '+'; 
            operatorsArray.forEach(element => {
                if(operationScreen.textContent.indexOf(element, 1) !== -1 ) {
                   operator = element;
                }
            });
            getSum(operator);
            operationScreen.textContent = sumScreen.textContent;
        }
    })


    buttonEraseAll.addEventListener('click', () => {
        operationScreen.textContent = '';
        sumScreen.textContent = '';
    });
    buttonEraseOne.addEventListener('click', () => {
        operationScreen.textContent = operationScreen.textContent.slice(0, -1);
        sumScreen.textContent = '';
    });

})