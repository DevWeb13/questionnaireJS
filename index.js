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
  if (e.pageY < 140) {
    mouseCircle.style.top = "140px";
    mouseCircle.style.left = e.pageX + "px";
  } else {
    mouseCircle.style.left = e.pageX + "px";
    mouseCircle.style.top = e.pageY + "px";
  }
});
