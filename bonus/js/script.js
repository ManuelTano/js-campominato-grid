// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro
// ed emetto un messaggio in console con il numero della cella cliccata.


// Impostazioni iniziali

const button = document.getElementById('play');
console.log(level);

// Tramite un click, genero la griglia

button.addEventListener('click', function () {

    let rows;
    let cells;

    const level = document.getElementById('level').value;
    
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
    
    const totalCell= rows * cells;

    const grid = document.getElementById('griglia');

    grid.innerHTML = "";

    function createCell(cellNumber, cellsPerRow) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.innerText = cellNumber;
    
        const sideLength = `calc(100% / ${cellsPerRow})`
        cell.style.height = sideLength;
        cell.style.width = sideLength;
    
        return cell;
    }
    

    function onCellClick() {
        if (this.classList.contains('clicked')) return;
        
        this.classList.add('clicked');
        console.log(this.innerText);
    }
    

    // SVOLGIMENTO DEL PROGRAMMA
    
    for (let i = 1; i <= totalCell; i++) {

        const cella = createCell(i, cells);
        
        cella.addEventListener('click', onCellClick)

        grid.appendChild(cella);
        
        }

    
    button.innerHTML = 'Ricomincia';
    
})

