const h1 = document.querySelector("h1");
h1.innerText = h1.innerText.toUpperCase();
h1.style.backgroundColor = "blue";
h1.style["background-color"] = "blue";

const divs = document.getElementsByClassName("box");
//it returns array of divs;
//divs[0].innerText = "Some div text"

for(let i = 0; i < divs.length; i++) {
    const div = divs[i];
    div.innerText = "Text from loop".toUpperCase().slice(1);
}

//const p = document.querySelector("p")
//const p = document.getElementById("information");
const p = document.querySelector("#information");
p.innerText = p.innerText.toLowerCase();

const inputs = document.getElementsByName("firstName");
const input = inputs[0];
input.classList.add("input");
input.classList.remove("some-class")

const img = document.querySelector("img");
img.setAttribute("alt", "new alt");

const newP = document.createElement("p");
newP.innerText = "Added text";

const moreP = document.createElement("p");
moreP.innerText = "More text"

const lastSection = document.querySelector("#last-section");
lastSection.insertAdjacentElement("beforeend", newP);
lastSection.insertAdjacentElement("afterbegin", moreP)
//lastSection.appendChild(newP);

const button = document.querySelector("button");
// button.addEventListener('click', function() {
//     const value = document.querySelector("input").value.toUpperCase()
//     alert(value)
// })

function alertInputValue() {
    const value = document.querySelector("input").value.toUpperCase();
    alert(value);
};

button.addEventListener("click", alertInputValue);

button.addEventListener("mouseenter", () => {
    button.style.background = "red"
});

button.addEventListener("mouseleave", () => {
    button.style.background = "blue"
})