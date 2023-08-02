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
