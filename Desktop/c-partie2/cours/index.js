//selecteurs
// document.querySelector('h4').style.background = "yellow";
// const balishtml = document.querySelector('h4');
// console.log('balishtml');

// balishtml.style.background = "yellow";

// click event
const questionContainer = document.querySelector('.click-event');
// questionContainer.style.borderRadius = "150px";
questionContainer.addEventListener("click", () => {
    questionContainer.classList.toggles("question-clicked");
});