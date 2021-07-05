//Déclaration des constantes
const questionContainer = document.querySelector(".click-event");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const response = questionContainer.querySelector("p");

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
