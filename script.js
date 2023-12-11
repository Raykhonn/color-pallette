const contnirs = document.querySelector(".contnirs");
const refreshBtn = document.querySelector(".btn");
const body = document.querySelector("body");

const maxPalatteBoxes = 8;

const generatePalette = () => {
  contnirs.innerHTML = "";
  for (let i = 0; i < maxPalatteBoxes; i++) {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;

    let bocs = document.createElement("div");
    bocs.classList.add("bocs");
    bocs.innerHTML = `<div class="boc" style="background: ${randomHex}"></div>
    <span class="colrr">${randomHex}</span>`;
    contnirs.appendChild(bocs);
  }
};

generatePalette(); 

refreshBtn.addEventListener("click", generatePalette);

const container = document.getElementById("container");

contnirs.addEventListener("click", (event) => {
  const clickedPalette = event.target.closest(".bocs");
  if (clickedPalette) {
    const backgroundColor =
      clickedPalette.querySelector(".boc").style.backgroundColor;
    body.style.backgroundColor = backgroundColor;
  }
});