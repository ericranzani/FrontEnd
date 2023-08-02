const livro = {
  nome: "O Senhor dos Aneis",
  ano: 1954,
  autor: "J. R. R. Tolkien",
};

const filme = {
  nome: "O Senhor dos Aneis",
  ano: 2001,
  autor: "J. R. R. Tolkien",
  diretor: "Peter Jackson",
};

console.log(livro);
console.log(2023 - livro.ano);

const texto = document.querySelector("p");
console.log(texto.clientHeight);

function logCurso() {
  const nome = "JavaScript";
  console.log(nome);
}

logCurso();

// nome e horas são os parâmetros
function logCurso(nome, horas) {
  console.log(nome, horas, "horas");
}

// JavaScript e 40 são os argumentos
logCurso("JavaScript", "40");
logCurso("HTML", "20");
logCurso("CSS", "30");

function logCurso(nome) {
  console.log(nome);
  return nome + " Log";
}

const valor = logCurso("JavaScript");
console.log(valor);

//metodo
const curso = {
  nome: "JavaScript",
  completar() {
    console.log(this.nome + ": Curso Completo.");
  },
  horas: "40 horas",
};

curso.completar();

//Eventos e evento
const ativar = document.querySelector(".ativar");

/** @param {MouseEvent} event */
function handleClick(event) {
  console.log(event);
}

ativar.addEventListener("click", handleClick);

console.log(ativar);

//Interação
const botao = document.querySelector(".botao");

function mostrar() {
  const texto = document.querySelector(".texto");
  texto.classList.toggle("ativo");
}

botao.addEventListener("click", mostrar);

//Window
const alturaTela = window.innerHeight;
const larguraTela = window.innerWidth;

console.log(alturaTela);
console.log(larguraTela);

function coordenadaMouse(event) {
  const coordenadas = {
    x: event.x,
    y: event.y,
  };
  console.log(coordenadas);
}

window.addEventListener("mousemove", coordenadaMouse);

function scroll() {
  console.log(window.scrollY);
}

window.addEventListener("scroll", scroll);
