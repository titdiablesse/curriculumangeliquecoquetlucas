document.addEventListener('DOMContentLoaded', function() {
    // Sélection des éléments HTML
    var leftBlock = document.querySelector('.leftBlock');
    var rightBlock = document.querySelector('.rightBlock');

    // Séparation des éléments
    var elements = document.body.children[0].children[0].children;
    var halfLength = Math.ceil(elements.length / 2); // Détermine la moitié de la longueur des éléments

    for (var i = 0; i < elements.length; i++) {
        if (i < halfLength) {
            leftBlock.appendChild(elements[i].cloneNode(true)); // Ajoute les éléments à leftBlock
        } else {
            rightBlock.appendChild(elements[i].cloneNode(true)); // Ajoute les éléments à rightBlock
        }
    }
});