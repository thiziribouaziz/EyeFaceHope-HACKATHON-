document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');

    // Ouvrir/Fermer le menu
    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Fermer le menu en cliquant à l'extérieur
    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !burger.contains(event.target)) {
            menu.classList.remove('active');
        }
    });
});
