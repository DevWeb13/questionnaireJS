// @ts-nocheck
//Déclaration des constantes
const questionContainer = document.querySelector(".click-event");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const response = questionContainer.querySelector("p");
const mouseCircle = document.querySelector(".mouseCircle");
const keypressContainer = document.querySelector(".keypressContainer");
const key = document.getElementById("key");

//Lors du clic sur le container on enleve la réponse si elle est affichée
questionContainer.addEventListener("click", () => {
  questionContainer.classList.remove("question-clicked");
  response.classList.remove("show-response");
});

//Lors du clic sur la bonne réponse, affichage de la réponse en background vert
btn1.addEventListener("click", (event) => {
  event.stopPropagation();
  response.classList.add("show-response");
  response.classList.add("win");
  response.classList.remove("lose");
  questionContainer.classList.add("question-clicked");
});

//Lors du clic sur la mauvaise réponse, affichage de la réponse en background rouge
btn2.addEventListener("click", (event) => {
  event.stopPropagation();
  response.classList.add("show-response");
  response.classList.add("lose");
  response.classList.remove("win");
  questionContainer.classList.add("question-clicked");
});

//Déplacement du rond avec la souris, le rond ne peut pas pénetrer le questionContainer
window.addEventListener("mousemove", (e) => {
  mouseCircle.style.left = e.pageX + "px";
  mouseCircle.style.top = e.pageY + "px";
  //enleve la classe .smaller pour eviter que l 'effet de transition ne continue.
  mouseCircle.classList.remove("smaller");
  mouseCircle.classList.remove("bigger");
});

//Le rond grossit lorsque la souris est enfoncée
document.addEventListener("mousedown", () => {
  mouseCircle.classList.add("bigger");
});

//Le rond revient a sa taille normal lorsque la souris n 'est plus enfoncée
document.addEventListener("mouseup", () => {
  mouseCircle.classList.remove("bigger");
  mouseCircle.classList.add("smaller");
});

//L'opacité de .questionContainer diminue lorsque la souris entre
questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0, 0, 0, 0.5)";
});

//L'opacité de .questionContainer réaugmente lorsque la souris sort
questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "rgba(0, 0, 0, 1)";
});

//La taille de la réponse augmente lors du survol
response.addEventListener("mouseover", () => {
  response.style.transform = "scale(1.2)";
});

//La taille de la réponse diminue lors de la sortie de la souris
response.addEventListener("mouseout", () => {
  response.style.transform = "scale(1)";
});

//fonction ajouter un son
const stageClear = () => {
  const audio = new Audio();
  audio.src = "./smb_stage_clear.wav";
  audio.play();
};

//La touche appuyée en dernier s' affiche à l'écran
document.addEventListener("keypress", (e) => {
  //Changement de background selon la touche enfoncée
  //Multiples conditions raccourci: Si la touche enfoncée est une voyelle ou consonne on le précise
  if (["a", "e", "i", "o", "u"].includes(e.key)) {
    keypressContainer.style.background = "green";
    key.textContent = e.key + " (voyelle)";
  } else if (e.key === "Enter") {
    keypressContainer.style.background = "black";
    key.textContent = e.key;
    //Ajout du son
    stageClear();
  } else {
    keypressContainer.style.background = "blue";
    key.textContent = e.key + " (consonne)";
  }
});

//---------------------------------------------------------------------
// Scroll event
const nav = document.querySelector("nav");

//Quand le scrollY > 100px la nav s'affiche
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//----------------------FORM-------------
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");

let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
      <h3>Pseudo : ${pseudo}</h3>
      <h4>Language préféré : ${language}</h4>
    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

//----------------Load event-------------
window.addEventListener("load", () => {
  console.log("Document chargé !");
});

//----------- Selectionner plusieurs 'boites' -----
//querySelectorsAll();
//forEach;
const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    // e.stopPropagation();
    // e.preventDefault();
    e.target.style.background = "red";
  });
});
