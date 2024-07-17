// Lista di email autorizzate
const authorizedEmails = ["test1@example.com", "test2@example.com", "test3@example.com"];
console.log("Lista di email autorizzate:", authorizedEmails);

// Funzione per controllare l'email
document.getElementById('check-email').onclick = function () {
    const userEmail = document.getElementById('user-email').value;
    const emailResult = document.getElementById('email-result');

    // Verifica se l'email è autorizzata
    let isAuthorized = false;
    for (let i = 0; i < authorizedEmails.length; i++) {
        if (authorizedEmails[i] === userEmail) {
            isAuthorized = true;
            break;
        }
    }

    // Mostra il risultato
    if (isAuthorized) {
        emailResult.innerHTML = 'Accesso consentito';
        console.log("Accesso consentito");
    } else {
        emailResult.innerHTML = 'Accesso negato';
        console.log("Accesso negato");
    }
};


