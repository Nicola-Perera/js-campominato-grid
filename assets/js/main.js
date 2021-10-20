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
        chiedo all'utente di inserire un numero che indichi il livello di difficoltà al quale vuole giocare;
        uso il numero inserito dall'utente come indice per un ciclo for che crea una cella:
            numerata in base all'indice in cui si trova il ciclo;
            si colora di azzurro quando ci si clicca sopra;
        inserisco ogni cella in una griglia quadrata;
*/