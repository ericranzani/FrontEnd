const botao = document.querySelector(".botao");

function somar() {
  const div = document.querySelector("div");
  const total = Number(div.innerText) + 1;
  if (total < 10) {
    div.innerText = total;
    console.log(total);
  } else {
    console.log("Não é mais possível somar");
  }
}

if (botao) {
  botao.addEventListener("click", somar);
}
