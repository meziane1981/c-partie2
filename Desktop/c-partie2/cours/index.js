//obs PROPRIETE DS LE CSS <DIV ECRITURE DE STYLE DS LA BALISE SUPRIEURE A TOUS >  >#id > .classe>baiseHTML

//selecteurs
// document.querySelector('h4').style.background = "yellow";
// const balishtml = document.querySelector('h4');
// console.log('balishtml');

// balishtml.style.background = "yellow";
// questionContainer.style.borderRadius = "150px";
// click event
const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn-1')
const btn2 = document.getElementById('btn-2')
const response = document.querySelector('p');

questionContainer.addEventListener("click", () => {
    questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
    response.classList.add('show-response'); //ajouté un classe
    response.style.background = "green" //ajoute un style
});
btn2.addEventListener("click", () => {
    response.classList.add('show-response');
    response.style.background = "red"
});

//............................................
//Mouse Events