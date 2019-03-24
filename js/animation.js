var path = document.getElementById("path");
var button = document.getElementById("btn");
var fond = document.getElementById("fond");
var finish = false;
var isOpen = false;

 function draw(){
   var offset = 1000 - window.scrollY / 4;

   if (offset > 0 && finish === false) {
     path.style.strokeDashoffset = offset;
       } else {
     path.style.strokeDashoffset = 0;
   }
   console.log(offset);

   if (offset > 360 && finish === false) {
     path.style.fill = "rgba(4,22,71,0)";
  //   path.classList.remove("transform");
       } else {
     path.style.fill = "#fff4a5";
  //   path.classList.add("transform");
     finish = true;
   }
 };

window.addEventListener("scroll", draw);

function anim(){

  if (isOpen) {
    isOpen = false;
  console.log("Je suis fermé");
  fond.style.backgroundImage = "url('img/fond_2.svg')"; }

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


button.addEventListener("click", anim);
