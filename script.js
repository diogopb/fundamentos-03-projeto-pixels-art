const backBlack = document.getElementById("black");
backBlack.style.backgroundColor = 'black';

const backRed = document.getElementById("red");
backRed.style.backgroundColor = 'red';

const backYellow = document.getElementById("yellow");
backYellow.style.backgroundColor = 'yellow';

const backBlue = document.getElementById("blue");
backBlue.style.backgroundColor = 'blue';

// const body = document.querySelector('body');

for (let index = 0; index < 25; index += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    document.querySelector('#pixel-board').appendChild(pixel);
}

let chooseColor = '';

const selectColor = (color) => {
    const colors = document.querySelectorAll('.color');
    for (let index = 0; index < colors.length; index += 1) {
        colors[index].classList.remove('selected');
    }
    color.classList.add('selected');
}

const pxColors = document.querySelectorAll('.color');
for (let index = 0; index < pxColors.length; index += 1) {
    const colors2 = pxColors[index];
    colors2.addEventListener('click', function () {
        selectColor(colors2);
        chooseColor = window.getComputedStyle(colors2).backgroundColor;
    });
}

const fillPixel = (fill) => {
    const pixel = fill.target;
    pixel.style.backgroundColor = chooseColor;
}


const elementsGrid = document.querySelectorAll('.pixel');
elementsGrid.forEach(function(elements) {
    elements.addEventListener('click', fillPixel)
});
