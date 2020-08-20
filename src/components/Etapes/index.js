import React from 'react';

const Etapes = () => (
  <div>
    Etapes
  </div>
);

export default Etapes;

// Etapes

// Je fais le HTML et le CSS en mode statique
// (j'écris à la main direct mes étapes)
// pour que ça ressemble à ce qui est attendu.

// il doit recevoir un prop qui contient la liste des étapes
// (on peut l'appeler "list")
// Puisque c'est une liste, je sais que ça doit être un tableau.
// En l'occurence je vais recevoir un tableau de strings.

// 1. Faire une boucle sur ce tableau
//    pour le transformer en tableau d'élements JSX (à la place de strings)
// 2. Penser à valider les props reçus avec les proptypes
// 3. A l'endroit où j'utilise mon composant, lui donner
//    les props qu'il attend
