document.querySelectorAll('navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Previeni il comportamento predefinito del link
        const targetId = this.getAttribute('href').substring(1); // Ottieni l'id della sezione di destinazione
        const targetSection = document.getElementById(targetId); // Trova la sezione di destinazione
        if (targetSection) {
            // Animazione di scrolling verso la sezione di destinazione
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth' // Animazione fluida
            });
        }
    });
});