const backBlack = document.getElementById("black");
backBlack.style.backgroundColor = 'black';

const backRed = document.getElementById("red");
backRed.style.backgroundColor = 'red';

const backYellow = document.getElementById("yellow");
backYellow.style.backgroundColor = 'yellow';

const backBlue = document.getElementById("blue");
backBlue.style.backgroundColor = 'blue';

const body = document.querySelector('body');


    for (let index = 0; index < 25; index += 1) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        document.querySelector('#pixel-board').appendChild(pixel);
    }

