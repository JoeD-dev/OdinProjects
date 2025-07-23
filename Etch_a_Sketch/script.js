const container = document.createElement('div');
const params = document.createElement('div');
const gridChangeButton = document.createElement('button');
    
let gridLenght = 16;
let gridSize = gridLenght ** 2;
let counter = 0;


function flexBasis() {
    let percent = 100 /gridLenght;
    return `${percent}%`
};

document.body.style = 'background-color: lightyellow; height: 97vh; padding-inline: 40px; box-sizing: border-box; display: flex; align-items: center;';
container.style.cssText = 'background-color: white; width: 55vw; max-height: 90vh; max-width:90vh; aspect-ratio: 1/1; border: 5px solid lightgray; margin-left: auto; box-sizing: border-box; display: flex; flex-direction:row; flex-wrap: wrap;' ;
params.style.cssText = 'height: 55vw; max-height: 90vh; max-width:90vh; aspect-ratio: 1/2; background-color: wheat; padding: 25px; display: flex; flex-direction: column; align-items: center; box-sizing: border-box;';
gridChangeButton.style.cssText = 'padding: 10px; border:none; background: skyblue; color: white; border-radius: 0 0 50%;'
gridChangeButton.textContent = 'Change Grid';


document.body.appendChild(params);
document.body.appendChild(container);
params.appendChild(gridChangeButton);

function gridSizeCounter (){
    while(counter < gridSize) {
    const innerDiv = document.createElement('div');
    innerDiv.style.cssText = 'border: 1px solid black;flex-grow:1; box-sizing: border-box; opacity: 0.5;';
    innerDiv.style.flexBasis = flexBasis();
    innerDiv.classList.add('hover-div')
    container.appendChild(innerDiv);
    counter++;
    };
};

gridSizeCounter();

let hoverDiv = document.querySelectorAll('.hover-div');

document.addEventListener('DOMContentLoaded', () => {
    hoverDiv.forEach(element => {
        element.addEventListener('mouseenter', () =>{
            element.style.backgroundColor = 'wheat';
            let currentOpacity = parseFloat(element.style.opacity) || 0;
            let newOpacity = Math.min(currentOpacity + 0.1, 1);
            element.style.opacity = newOpacity.toString();
        });
    });
});

gridChangeButton.addEventListener('click', () => {
    gridLenght = +prompt('Enter new grid size:');
    gridSize = gridLenght ** 2;
    counter = 0;
    container.innerHTML = '';
    
    gridSizeCounter();
    console.log(hoverDiv.length);
});

