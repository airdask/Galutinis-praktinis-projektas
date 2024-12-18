const cards = document.querySelectorAll('.flipcard__inner'); // Select all flipcards

cards.forEach((card) => {
    card.addEventListener('click', function () {
        card.classList.toggle('is-flipped');
    });
});