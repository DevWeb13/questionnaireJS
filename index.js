//Déclaration des constantes
const questionContainer = document.querySelector(".click-event");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const response = questionContainer.querySelector("p");
const mouseCircle = document.querySelector(".mouseCircle");

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
  if (e.pageY < 165) {
    mouseCircle.style.top = "165px";
    mouseCircle.style.left = e.pageX + "px";
  } else {
    mouseCircle.style.left = e.pageX + "px";
    mouseCircle.style.top = e.pageY + "px";
    //enleve la classe .smaller pour eviter que l 'effet de transition ne continue.
    mouseCircle.classList.remove("smaller");
  }
});

//Le rond grossit lorsque la souris est enfoncée
mouseCircle.addEventListener("mousedown", () => {
  mouseCircle.classList.add("bigger");
});

//Le rond revient a sa taille normal lorsque la souris n 'est plus enfoncée
mouseCircle.addEventListener("mouseup", () => {
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
