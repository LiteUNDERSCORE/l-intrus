// L'Intrus : une image F1 retouchée, il faut trouver ce qui n'a rien à faire là.
// Mets tes images dans le dossier images/, puis ajoute une ligne par image ci-dessous.
//   image    : la version retouchée (celle que voient les joueurs)
//   original : (facultatif) la vraie photo, affichée à la révélation. Touche O pour comparer.
//   zone     : (facultatif) où entourer l'intrus à la révélation (sur les deux versions),
//              en % de l'image (x depuis la gauche, y depuis le haut, r = rayon).

window.JEU = {
  cle: "l-intrus",
  titre: "L'",
  accent: "Intrus",
  question: "Qu'est-ce qui ne va pas ?",
  unite: "Image",
  type: "image"
};

window.ELEMENTS = [
  { image: "images/zandvoort-tribunes.webp", original: "images/zandvoort-tribunes-original.webp",
    reponse: "Les tribunes sont rouges", detail: "On est à Zandvoort : la marée est orange, pas rouge Ferrari !",
    recap: "Zandvoort · tribunes rouges" },
  { image: "images/silverstone-vibreurs.webp", original: "images/silverstone-vibreurs-original.webp",
    reponse: "Les vibreurs sont vert-blanc-rouge", detail: "Les couleurs de l'Italie à Silverstone ? En vrai, ils sont noirs et blancs.",
    recap: "Silverstone · vibreurs italiens", zone: { x: 36, y: 70, r: 12 } },
  { image: "images/djeddah-ciel.webp", original: "images/djeddah-ciel-original.webp",
    reponse: "L'hôtel de Yas Marina", detail: "L'hôtel d'Abou Dhabi, avec sa verrière au-dessus du circuit, s'est invité dans le ciel de Djeddah !",
    recap: "Djeddah · hôtel d'Abou Dhabi", zone: { x: 15, y: 35, r: 8 } },
  { image: "images/miami-marina.webp", original: "images/miami-marina-original.webp",
    reponse: "De la vraie eau dans la marina", detail: "La marina de Miami est célèbre pour son eau… peinte au sol ! Ici, on y a mis de la vraie mer.",
    recap: "Miami · vraie eau dans la marina", zone: { x: 25, y: 68, r: 16 } }
];
