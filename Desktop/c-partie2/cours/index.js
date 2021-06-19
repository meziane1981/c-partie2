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
    if (e.key === 'z')
        ring(e.key)
});
//   scroll Event
const nav = document.querySelector("nav");

window.addEventListener('scroll', () => {
        console.log(window.scrolly);

        if (window.scrollY > 120) {
            nav.style.top = 0;
        } else {
            nav.style.top = "-50px"
        }
    })
    //..............................................
    // form event
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let Pseudo = "";
let Language = "";


inputName.addEventListener("input", (e) => {
    pseudo = e.target.value;
})
select.addEventListener("input", (e) => {
    language = e.target.value;
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (cgv.checked) {
        document.querySelector("form > div").innerHTML = `
        <h3>Pseudo : ${pseudo}</h3> 
        <h4>Language préféré : ${Language}</h4>
        `;
    } else {
        alert('Veuillez accepter les CGV');
    }
});
//----------------------------
// load event
window.addEventListener("load", () => (
    console.log("document chargé !")
));

//......................................................
// Foreach
// const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");
console.log(boxes);
boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        e.target.style.transform = "scale(0.7)";
    });
});