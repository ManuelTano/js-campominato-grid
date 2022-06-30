// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro
// ed emetto un messaggio in console con il numero della cella cliccata.

// Prendo l'elemento dal DOM

const grid = document.getElementById('griglia');


function createCell(content) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.innerText = content;
    return cell;
}

// Impostazioni iniziali

const rows = 10;
const cells = 10;
const totalCell = rows * cells;

const button = document.getElementById('play');

// Tramite un click, genero la griglia

button.addEventListener('click', function () {
    for (let i = 1; i <= totalCell; i++) {
        const cella = createCell(i);
        grid.appendChild(cella);

        cella.addEventListener('click', function () {
        this.classList.add('clicked');
        })
    }
})

