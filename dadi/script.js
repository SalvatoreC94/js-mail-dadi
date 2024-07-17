// Funzione per il gioco dei dadi
document.getElementById('roll-dice').onclick = function () {
    // Genera un numero casuale tra 1 e 6 per il giocatore
    const playerRoll = Math.floor(Math.random() * 6) + 1;
    // Genera un numero casuale tra 1 e 6 per il computer
    const computerRoll = Math.floor(Math.random() * 6) + 1;
    console.log("Tiro del giocatore:", playerRoll);
    console.log("Tiro del computer:", computerRoll);

    // Costruisce il messaggio del risultato
    const resultMessage = `Giocatore: ${playerRoll} - Computer: ${computerRoll}.`;

    // Determina il risultato del gioco confrontando i tiri del giocatore e del computer
    if (playerRoll > computerRoll) {
        // Se il tiro del giocatore è maggiore, mostra un messaggio di vittoria
        document.getElementById('dice-result').textContent = `${resultMessage} Hai vinto!`;
        console.log("Risultato: Hai vinto!");
    } else if (playerRoll < computerRoll) {
        // Se il tiro del giocatore è minore, mostra un messaggio di sconfitta
        document.getElementById('dice-result').textContent = `${resultMessage} Hai perso!`;
        console.log("Risultato: Hai perso!");
    } else {
        // Se i tiri sono uguali, mostra un messaggio di pareggio
        document.getElementById('dice-result').textContent = `${resultMessage} È un pareggio!`;
        console.log("Risultato: È un pareggio!");
    }
};
