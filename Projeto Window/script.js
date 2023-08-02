//açao que muda diretamente o css
const circulo = document.querySelector(".circulo");

function seguirMove() {
  circulo.style.top = event.y + "px";
  circulo.style.left = event.x + "px";
}

window.addEventListener("mousemove", seguirMove);
