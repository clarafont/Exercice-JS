var path = document.getElementById("path");
var button = document.getElementById("btn");
var fond = document.getElementById("fond");
var finish = false;
var isOpen = false;

//première fonction qui permet de dessiner le cercle
 function draw(){
   var offset = 1000 - window.scrollY / 4;

//si offset est supérieur à 0 alors la position de départ des pointillés se décale
//l'ajout de finish permet de faire l'action une fois et de ne pas la boucler
   if (offset > 0 && finish === false) {
     path.style.strokeDashoffset = offset;
       } else {
     path.style.strokeDashoffset = 0;
   }
   console.log(offset);

//ici, si offset est supérieur à 360 alors la forme se remplit d'une couleur définie
//l'ajout de finish permet de garder le remplissage la fonction s'effectue une fois
   if (offset > 360 && finish === false) {
     path.style.fill = "rgba(4,22,71,0)";
       } else {
     path.style.fill = "#fff4a5";
     finish = true;
   }
 };

//la fenêtre à l'évènement "scroll" déclenche la fonction draw ci-dessus
window.addEventListener("scroll", draw);

//cette fonction anim permet de faire un changement de fond (apparition du chat)
function anim(){

//lorsque IsOpen est faux (si le bouton est fermé) alors le fond de l'image défini en css est remplacé par ce background-image
  if (isOpen) {
    isOpen = false;
  console.log("Je suis fermé");
  fond.style.backgroundImage = "url('img/fond_2.svg')"; }

//sinon IsOpen est vrai (si le bouton est ouvert) alors le fond de l'image défini en css est remplacé par ce background-image
  else {
  isOpen = true;
  console.log("Je suis ouvert");
  fond.style.backgroundImage = "url('img/fond_1.svg')";
}

};

if (isOpen === true) {
  console.log("Je suis ouvert");
} else {
  console.log("Je suis fermé");
};

//le bouton à l'évènement "click" déclenche la fonction anim ci-dessus
button.addEventListener("click", anim);
