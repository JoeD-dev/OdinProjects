const container = document.createElement('div');
const params = document.createElement('div');

let gridLenght = 16;
let gridSize = gridLenght ** 2;
let counter = 0;
function flexBasis() {
    let percent = 100 /gridLenght;
    return `${percent}%`
};

document.body.style = 'background-color: lightyellow; height: 97vh; padding-inline: 40px; box-sizing: border-box; display: flex; align-items: center;';
container.style.cssText = 'background-color: white; width: 55vw; max-height: 90vh; max-width:90vh; aspect-ratio: 1/1; border: 5px solid lightgray; margin-left: auto; box-sizing: border-box; display: flex; flex-direction:row; flex-wrap: wrap;' ;
params.style.cssText = 'height: 55vw; max-height: 90vh; max-width:90vh; aspect-ratio: 1/2; background-color: wheat; ';


document.body.appendChild(params);
document.body.appendChild(container);

while(counter < gridSize) {
    const innerDiv = document.createElement('div');
    innerDiv.style.cssText = 'border: 1px solid black; flex-grow:1; box-sizing: border-box;' ;
    innerDiv.style.flexBasis = flexBasis();
    container.appendChild(innerDiv);
    counter++;
};