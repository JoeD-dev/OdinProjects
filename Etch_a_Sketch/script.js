const container = document.createElement('div');
const params = document.createElement('div');
const colorsDiv = document.createElement('div');
const gridChangeButton = document.createElement('button');
const buttonColorGreen = document.createElement('button');
const buttonColorViolet = document.createElement('button');
const buttonColorBlack = document.createElement('button');
const buttonColorPink = document.createElement('button');
const randomColorButton = document.createElement('button');
const gridResetButton =document.createElement('button');
    
let gridLenght = 16;
let gridSize = gridLenght ** 2;
let counter = 0;
let colorChange = 'palegreen';


function flexBasis() {
    let percent = 100 /gridLenght;
    return `${percent}%`
};

document.body.style = 'background-color: lightyellow; height: 97vh; padding-inline: 40px; box-sizing: border-box; display: flex; align-items: center;';
container.style.cssText = 'background-color: white; width: 55vw; max-height: 90vh; max-width:90vh; aspect-ratio: 1/1; border: 5px solid lightgray; margin-left: auto; box-sizing: border-box; display: flex; flex-direction:row; flex-wrap: wrap;' ;
params.style.cssText = 'height: 55vw; max-height: 90vh; max-width:90vh; aspect-ratio: 1/2; background-color: wheat; padding: 25px; display: flex; flex-direction: column; align-items: center; gap:50px; box-sizing: border-box;';
gridChangeButton.style.cssText = 'width: 80%; padding: 15px 30px; border:none; background: skyblue; color: white; font-size: 20px';
gridChangeButton.textContent = 'Change Grid';
buttonColorGreen.style.cssText = 'padding: 10px; border:none; background: palegreen; color: white; border-radius: 0 0 50%; flex-basis: 45%';
buttonColorViolet.style.cssText = 'padding: 10px; border:none; background: plum; color: white; border-radius: 0 0 50%; flex-basis: 45%';
buttonColorBlack.style.cssText = 'padding: 10px; border:none; background: dimgray; color: white; border-radius: 0 0 50%; flex-basis: 45%';
buttonColorPink.style.cssText = 'padding: 10px; border:none; background: lightpink; color: white; border-radius: 0 0 50%; flex-basis: 45%';
buttonColorGreen.textContent ='Green';
buttonColorViolet.textContent ='Violet';
buttonColorBlack.textContent ='Black';
buttonColorPink.textContent ='Pink';
randomColorButton.style.cssText = 'width: 80%; padding: 15px 30px; border:none; background: linear-gradient(to right, violet, lightblue); color: white; font-size: 20px';
randomColorButton.textContent = 'Random Color';
gridResetButton.style.cssText = 'width: 80%; padding: 15px 30px; border:none; background: gray; color: white; font-size: 20px';
gridResetButton.textContent = 'ResetGrid';
colorsDiv.style.cssText = 'display: flex; flex-wrap:wrap; gap:10px; width: 100%; height: 100px;'


document.body.appendChild(params);
document.body.appendChild(container);
params.appendChild(gridChangeButton);
params.appendChild(gridResetButton);
params.appendChild(randomColorButton);
params.appendChild(colorsDiv);
colorsDiv.appendChild(buttonColorGreen);
colorsDiv.appendChild(buttonColorViolet);
colorsDiv.appendChild(buttonColorBlack);
colorsDiv.appendChild(buttonColorPink);



function gridSizeCounter (){
    while(counter < gridSize) {
    const innerDiv = document.createElement('div');
    innerDiv.style.cssText = 'flex-grow:1; box-sizing: border-box; opacity: 0;';
    innerDiv.style.flexBasis = flexBasis();
    innerDiv.classList.add('hover-div')
    container.appendChild(innerDiv);
    counter++;
    };
};

function randomColor () {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6,'0');
};

buttonColorGreen.onclick = function() {
    colorChange = 'palegreen';
    container.addEventListener('mouseover', (event) =>{
    let element = event.target;
    if(element.classList.contains('hover-div')) {
        element.style.backgroundColor = colorChange;
        };
    }); 
};
buttonColorViolet.onclick = function() {
    colorChange = 'plum';
    container.addEventListener('mouseover', (event) =>{
    let element = event.target;
    if(element.classList.contains('hover-div')) {
        element.style.backgroundColor = colorChange;
        };
    }); 
};
buttonColorBlack.onclick = function() {
    colorChange = 'dimgray';
    container.addEventListener('mouseover', (event) =>{
    let element = event.target;
    if(element.classList.contains('hover-div')) {
        element.style.backgroundColor = colorChange;
        };
    }); 
    
};
buttonColorPink.onclick = function() {
    colorChange = 'lightpink';
    container.addEventListener('mouseover', (event) =>{
    let element = event.target;
    if(element.classList.contains('hover-div')) {
        element.style.backgroundColor = colorChange;
        };
    });  
};
randomColorButton.onclick = function() {
    container.addEventListener('mouseover', (event) =>{
    let element = event.target;
    if(element.classList.contains('hover-div')) {
        element.style.backgroundColor = randomColor();
        };
    
    });
};


gridSizeCounter();

let hoverDiv = document.querySelectorAll('.hover-div');

gridResetButton.onclick = function () {
    hoverDiv = document.querySelectorAll('.hover-div');
    hoverDiv.forEach(element => {
        element.style.backgroundColor = 'white';
        element.style.opacity = 0;
    });
};

gridChangeButton.addEventListener('click', () => {
    gridLenght = +prompt('Enter new grid size betweem 1 and 100.Default value is 16.');
    if( gridLenght !== null) {
        if(gridLenght !== '' 
           && gridLenght >=1 
           && gridLenght <= 100) {
            
            gridSize = gridLenght ** 2;
            counter = 0;
            container.innerHTML = '';
            gridSizeCounter();
           }else {
            alert('Please enter correct value.')
           }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    container.addEventListener('mouseover', (event) =>{
        let element = event.target;
        if(element.classList.contains('hover-div')) {
            element.style.backgroundColor = colorChange;
            let currentOpacity = parseFloat(element.style.opacity) || 0;
            let newOpacity = Math.min(currentOpacity + 0.1, 1);
            element.style.opacity = newOpacity.toString();
        };
    
    });
});

