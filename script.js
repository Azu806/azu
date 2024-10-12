// script.js
const toggleSwitch = document.getElementById('toggleSwitch');
const overlay = document.getElementById('overlay');

// Funzione per gestire il toggle dell'overlay
toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        overlay.classList.add('show'); // Mostra la grafica
    } else {
        overlay.classList.remove('show'); // Nasconde la grafica
    }
});

// Funzione per aggiornare i dettagli della sostituzione
function updateSubstitution() {
    const outgoingName = document.getElementById('outgoing-name').value;
    const outgoingNumber = document.getElementById('outgoing-number-input').value;
    const incomingName = document.getElementById('incoming-name').value;
    const incomingNumber = document.getElementById('incoming-number-input').value;

    // Salva i dati in localStorage per l'accesso dalla pagina index.html
    localStorage.setItem('outgoingPlayer', outgoingName || 'Nome Uscente');
    localStorage.setItem('outgoingNumber', outgoingNumber || '00');
    localStorage.setItem('incomingPlayer', incomingName || 'Nome Entrante');
    localStorage.setItem('incomingNumber', incomingNumber || '00');

    alert("Sostituzione aggiornata! Torna alla grafica per vedere le modifiche.");
}

// Funzione per caricare i dati nella pagina index.html
function loadSubstitutionData() {
    document.getElementById('incoming-player').textContent = localStorage.getItem('incomingPlayer') || 'Nome Giocatore';
    document.getElementById('incoming-number').textContent = localStorage.getItem('incomingNumber') || '00';
    document.getElementById('outgoing-player').textContent = localStorage.getItem('outgoingPlayer') || 'Nome Giocatore';
    document.getElementById('outgoing-number').textContent = localStorage.getItem('outgoingNumber') || '00';
}

// Carica i dati quando la pagi
