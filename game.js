const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame);
window.addEventListener('resize', resize);

function startGame() {
    //game.fillRect(0, 0, 100, 100);//posición x & y - tamaño x & y
    //game.clearRect(0, 0, 100, 50);//borrador

    //game.font = '25px Verdana';
    //game.fillStyle = 'purple';
    //game.textAllign = 'center';

    //game.fillText("Test", 25, 25);
    resize();



}

function resize() {
    let canvasSize = 0;
    const widht = window.innerWidth;
    const height = window.innerHeight;
    if (widht > height) {
        canvasSize = height * 0.80;
    } else if (height > widht) {
        canvasSize = widht * 0.80;
    } else if (height == widht) {
        canvasSize = widht * 0.80;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);
    const elementSize = canvasSize / 10;
    render(elementSize);
}

function render(elementSize) {
    game.font = elementSize + 'px Verdana';
    game.textAllign = 'end';

    let map = maps[0];
    const mapRows = map.trim().split('\n');
    const mapCols = mapRows.map(row => row.trim().split(''));

    for (let row = 1; row <= mapRows.length; row++) {
        for (let col = 0; col <= mapCols[row - 1].length; col++) {
            game.fillText(emojis[mapCols[row - 1][col]], elementSize * col, elementSize * row);
        }

    }
}