// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro
// ed emetto un messaggio in console con il numero della cella cliccata.


// Impostazioni iniziali


const grid = document.getElementById('griglia');

grid.innerHTML = "";

const level = document.getElementById('level').value;
let rows;
let cells;

switch (level) {
    case 'easy': 
    default:
    rows = 10;
    cells = 10;
    break;
    case 'normal': 
    rows = 9;
    cells = 9;
    break;
    case 'hard': 
    rows = 7;
    cells = 7;
    break;
}

const totalCells = rows * cells;


function createCell(cellNumber, cellsPerRow) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.innerText = cellNumber;

    const sideLength = `calc(100% / ${cellsPerRow})`
    cell.style.height = sideLenght;
    cell.style.width = sideLenght;

    return cell;
}


const button = document.getElementById('play');

// Tramite un click, genero la griglia

button.addEventListener('click', function () {
    

    for (let i = 1; i <= totalCell; i++) {

        const cell = createCell(i, cells);

        grid.appendChild(cell);

        cell.addEventListener('click', function () {

        this.classList.toggle('clicked');
        
        console.log('Hai cliccato il numero: ' + cell.innerHTML)
        })
    }
    button.innerHTML = 'Ricomincia';

})

