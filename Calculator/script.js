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
const buttonSum = document.querySelector('#button-sum');
const buttonAdd = document.querySelector('#button-add');
const buttonSubstract = document.querySelector('#button-substract');
const buttonMultiply = document.querySelector('#button-multiply');
const buttonDivide = document.querySelector('#button-divide');

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


    buttonAdd.addEventListener('click', () => {
        if(operationScreen.textContent.at(-1) !== '+' 
        && operationScreen.textContent.at(-1) !== '-'
        && operationScreen.textContent.at(-1) !== 'x'
        && operationScreen.textContent.at(-1) !== '/'
        && operationScreen.textContent !== '') {

            operationScreen.textContent += '+';
        }else if(operationScreen.textContent.at(-1) === '+' 
            && operationScreen.textContent.at(-2) !== '+' 
            && operationScreen.textContent.at(-2) !== '-'
            && operationScreen.textContent.at(-2) !== 'x'
            && operationScreen.textContent.at(-2) !== '/'
        || operationScreen.textContent.at(-1) === '-' && operationScreen.textContent !== '-'
            && operationScreen.textContent.at(-2) !== '+' 
            && operationScreen.textContent.at(-2) !== '-'
            && operationScreen.textContent.at(-2) !== 'x'
            && operationScreen.textContent.at(-2) !== '/'
        || operationScreen.textContent.at(-1) === 'x'
            && operationScreen.textContent.at(-2) !== '+' 
            && operationScreen.textContent.at(-2) !== '-'
            && operationScreen.textContent.at(-2) !== 'x'
            && operationScreen.textContent.at(-2) !== '/'
        || operationScreen.textContent.at(-1) === '/'
            && operationScreen.textContent.at(-2) !== '+' 
            && operationScreen.textContent.at(-2) !== '-'
            && operationScreen.textContent.at(-2) !== 'x'
            && operationScreen.textContent.at(-2) !== '/') {

            operationScreen.textContent = operationScreen.textContent.slice(0,-1) + '+';
        };
    });


    buttonSubstract.addEventListener('click', () => {
        if(operationScreen.textContent.at(-1) !== '+' 
        && operationScreen.textContent.at(-1) !== '-') {

            operationScreen.textContent += '-';

        }else if(operationScreen.textContent.at(-1) === '+' 
        || operationScreen.textContent.at(-1) === '-') {

            operationScreen.textContent = operationScreen.textContent.slice(0,-1) + '-';
        };
    });

    buttonMultiply.addEventListener('click', () => {
        if(operationScreen.textContent.at(-1) !== '+' 
        && operationScreen.textContent.at(-1) !== '-'
        && operationScreen.textContent.at(-1) !== 'x'
        && operationScreen.textContent.at(-1) !== '/'
        && operationScreen.textContent !== '') {

            operationScreen.textContent += 'x';
        }else if(operationScreen.textContent.at(-1) === '+' 
            && operationScreen.textContent.at(-2) !== '+' 
            && operationScreen.textContent.at(-2) !== '-'
            && operationScreen.textContent.at(-2) !== 'x'
            && operationScreen.textContent.at(-2) !== '/'
        || operationScreen.textContent.at(-1) === '-' && operationScreen.textContent !== '-'
            && operationScreen.textContent.at(-2) !== '+' 
            && operationScreen.textContent.at(-2) !== '-'
            && operationScreen.textContent.at(-2) !== 'x'
            && operationScreen.textContent.at(-2) !== '/'
        || operationScreen.textContent.at(-1) === 'x'
            && operationScreen.textContent.at(-2) !== '+' 
            && operationScreen.textContent.at(-2) !== '-'
            && operationScreen.textContent.at(-2) !== 'x'
            && operationScreen.textContent.at(-2) !== '/'
        || operationScreen.textContent.at(-1) === '/'
            && operationScreen.textContent.at(-2) !== '+' 
            && operationScreen.textContent.at(-2) !== '-'
            && operationScreen.textContent.at(-2) !== 'x'
            && operationScreen.textContent.at(-2) !== '/') {

            operationScreen.textContent = operationScreen.textContent.slice(0,-1) + 'x';
        };
    });


    buttonDivide.addEventListener('click', () => {
        if(operationScreen.textContent.at(-1) !== '+' 
        && operationScreen.textContent.at(-1) !== '-'
        && operationScreen.textContent.at(-1) !== 'x'
        && operationScreen.textContent.at(-1) !== '/'
        && operationScreen.textContent !== '') {

            operationScreen.textContent += '/';
        }else if(operationScreen.textContent.at(-1) === '+' 
            && operationScreen.textContent.at(-2) !== '+' 
            && operationScreen.textContent.at(-2) !== '-'
            && operationScreen.textContent.at(-2) !== 'x'
            && operationScreen.textContent.at(-2) !== '/'
        || operationScreen.textContent.at(-1) === '-' && operationScreen.textContent !== '-'
            && operationScreen.textContent.at(-2) !== '+' 
            && operationScreen.textContent.at(-2) !== '-'
            && operationScreen.textContent.at(-2) !== 'x'
            && operationScreen.textContent.at(-2) !== '/'
        || operationScreen.textContent.at(-1) === 'x'
            && operationScreen.textContent.at(-2) !== '+' 
            && operationScreen.textContent.at(-2) !== '-'
            && operationScreen.textContent.at(-2) !== 'x'
            && operationScreen.textContent.at(-2) !== '/'
        || operationScreen.textContent.at(-1) === '/'
            && operationScreen.textContent.at(-2) !== '+' 
            && operationScreen.textContent.at(-2) !== '-'
            && operationScreen.textContent.at(-2) !== 'x'
            && operationScreen.textContent.at(-2) !== '/') {

            operationScreen.textContent = operationScreen.textContent.slice(0,-1) + '/';
        };
    });


    buttonEraseAll.addEventListener('click', () => {
        operationScreen.textContent = '';
    });
    buttonEraseOne.addEventListener('click', () => {
        operationScreen.textContent = operationScreen.textContent.slice(0, -1);
    });

})