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
  { image: "images/djeddah-hotel.webp", original: "images/djeddah-hotel-original.jpg",
    reponse: "L'hôtel de Yas Marina", detail: "L'hôtel d'Abou Dhabi, avec sa verrière lumineuse, s'est installé au bord du circuit de Djeddah !",
    recap: "Djeddah · hôtel d'Abou Dhabi", zone: { x: 17.5, y: 57, r: 9 } },
  { image: "images/miami-marina.webp", original: "images/miami-marina-original.webp",
    reponse: "De la vraie eau dans la marina", detail: "La marina de Miami est célèbre pour son eau… peinte au sol ! Ici, on y a mis de la vraie mer.",
    recap: "Miami · vraie eau dans la marina", zone: { x: 25, y: 68, r: 16 } },
  { image: "images/spa-las-vegas.webp", original: "images/spa-las-vegas-original.webp",
    reponse: "Le panneau de Las Vegas", detail: "« Welcome to Fabulous Las Vegas » planté en plein Raidillon de l'Eau Rouge !",
    recap: "Spa · panneau Las Vegas", zone: { x: 71, y: 56, r: 10 } },
  { image: "images/bakou-ville.webp", original: "images/bakou-ville-original.avif",
    reponse: "Des gratte-ciel à la place des remparts", detail: "À Bakou, la piste longe les remparts médiévaux de la vieille ville, pas des tours de verre.",
    recap: "Bakou · gratte-ciel", zone: { x: 50, y: 32, r: 26 } },
  { image: "images/spielberg-tribune.webp", original: "images/spielberg-tribune-original.webp",
    reponse: "La tribune a disparu", detail: "Au Red Bull Ring, une immense tribune couvre la colline à droite. Ici, il ne reste que de l'herbe !",
    recap: "Spielberg · tribune disparue", zone: { x: 82, y: 22, r: 17 } },
  { image: "images/imola-statue.webp", original: "images/imola-statue-original.webp",
    reponse: "Une statue au bord de la piste", detail: "Sur la ligne droite d'Imola, il n'y a que de l'herbe. La statue d'Ayrton Senna, elle, est dans le parc de Tamburello.",
    recap: "Imola · statue", zone: { x: 81, y: 49, r: 10 } },
  { image: "images/lusail-michelin.png", original: images/lusail-michelin-original.png",
    reponse: "La banderole Michelin", detail: "Michelin, c'est le pneu de la MotoGP ! En F1, c'est Pirelli, comme sur les panneaux du mur.",
    recap: "Lusail · banderole Michelin", zone: { x: 50, y: 33, r: 22 } }
];
