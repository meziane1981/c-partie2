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
const mousemove = document.querySelector(".mousemove");
window.addEventListener("mousemove", (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
})

window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25% )";
});

window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50% )";
    mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
    questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
    questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
        response.style.transform = "rotate(2deg)";
    })
    //.................................................
    //key Press event
const keypressContainer = document.querySelector('.keypress');
const key = document.getElementById("key");

const ring = (key) => {
    const audio = new Audio();
    audio.src = key + ".mp3";
    audio.play();
};


document.addEventListener("keypress", (e) => {
    key.textContent = e.key;

    if (e.key === "j") {
        keypressContainer.style.background = "pink";
    } else if (e.key === "h") {
        keypressContainer.style.background = "teal";
    } else {
        keypressContainer.style.background = "red";
    }
    ring(e.key)
});