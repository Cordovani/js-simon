// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.



// 3 array, numeriGenerati, numeriCorretti, numeriErrati
var numeriGenerati = [];
var numeriCorretti = [];
var numeriErrati = [];

// genero i 5 numeri da salvare in numeriGenerati e li mostro all'utente
// da 1 a 10
for (var i = 0; i < 5; i++) {

    var numeroRnd = Math.floor(Math.random() * 10);

    numeriGenerati.push(numeroRnd);

}

// messaggio di benvenuto
alert(" Benvenuto \n " + numeriGenerati + "\nquanti numeri ricorderai tra 30 secondi? ");

setTimeout(function () {

    var numeriIndovinati = 0;

    console.log(numeriGenerati);

    for (var i = 0; i < 5; i++) {

        var numeroUtente = 0;

        // chiedo il numero all'utente e controllo se è un numero
        // do-while per farlo almeno una volta
        do {
            numeroUtente = parseInt(prompt("inserisci i numeri che ricordi uno alla volta"));
            if (isNaN(numeroUtente) === true) {
                alert("attenzione inserire un numero");

            }
        } while (isNaN(numeroUtente) === true)

        console.log("hai inserito " + numeroUtente);

        // se il numero è corretto -- si trova nell'array dei generati
        if (numeriGenerati.indexOf(numeroUtente) > -1 && numeriCorretti.indexOf(numeroUtente) == -1) {

            numeriIndovinati++;
            numeriCorretti.push(numeroUtente);

            // // RISOLVE BUG DI INSERIRE I NUMERI 5 VOLTE - by FLORIAN
            // numeriGenerati.splice(numeriGenerati.indexOf(numeroUtente, 1));


        } else {
            // richiediamo il numero
            // i--;
        }

    }

    console.log(numeriIndovinati);

    // output possibili
    if (numeriIndovinati > 0) {
        alert("hai indovinato i seguenti numeri " + numeriCorretti.join(" "));
    } else if (numeriIndovinati == 5) {
        alert("complimenti hai VINTO");
    } else {
        alert("Mi dispiace ritenta");
    }

}, 3 * 1000);




// NOTE
// implementare la funzione per il timer
// e nel caso i numeri siano doppi