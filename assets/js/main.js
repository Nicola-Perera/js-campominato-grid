/*
    CAMPOMINATO-GRID:
        L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
        in cui ogni cella contiene un numero tra quelli compresi in un range:
            con difficoltà 1 => tra 1 e 100
            con difficoltà 2 => tra 1 e 81
            con difficoltà 3 => tra 1 e 49
        Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

/*
    STEPS:
        chiedo all'utente di inserire un numero da 1 a 3 che indichi il livello di difficoltà al quale vuole giocare;
        uso il numero inserito dall'utente per creare un indice per un ciclo for che crea una cella:
            numerata in base all'indice in cui si trova il ciclo;
            si colora di azzurro quando ci si clicca sopra;
        inserisco ogni cella in una griglia quadrata;
*/

// grid area
const gridMatrix = 100;

// difficulty settings
const minDifficulty = 1;
const maxDifficulty = 3;

// difficulty level request
let difficultyLevel = prompt(`inserisci il livello di difficoltà. numero da ${minDifficulty} e ${maxDifficulty}`);
while (difficultyLevel < minDifficulty || difficultyLevel > maxDifficulty || difficultyLevel === '') {
    difficultyLevel = prompt(`inserisci il livello di difficoltà. numero da ${minDifficulty} e ${maxDifficulty}`);
}
difficultyLevel = parseInt(difficultyLevel);
console.log(difficultyLevel);

// area adaptation to the difficulty level
let area;
if (difficultyLevel == minDifficulty) {
    area = gridMatrix;
}
else if (difficultyLevel == minDifficulty + 1) {
    area = 81;
}
else if (difficultyLevel == minDifficulty + 2) {
    area = 49;
}
const newGrid = area;
console.log(newGrid);

const gridRef = document.getElementById('grid');
gridRef.className = `level_${difficultyLevel}`;

// loop to add cells to grid
for (let i = 1; i <= newGrid; i++) {
    
    const cell = document.createElement('div');
    cell.className = 'grid_cell';
    
    gridRef.append(cell);

    // function to change bg color on clickß
    cell.addEventListener('click', function () {
        this.style.backgroundColor = 'green';
    })

}

