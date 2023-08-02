function livro(nome, ano, autor) {
  const nomeLivro = nome.toUpperCase();
  const anoLancamento = 2023 - ano;
  const frase = nome + " por " + autor;
  //console.log(nomeLivro);
  //console.log(anoLancamento);
  //console.log(frase);
  const livroRetorno = {
    nome: nomeLivro,
    ano: anoLancamento,
    frase,
  };
  return livroRetorno;
}

//forma mais eficiente
/*
function livro(nome, ano, autor) {
  return {
    nome: nome.toUpperCase(),
    ano: 2023 - ano,
    frase: nome + " por " + autor,
  };
}
*/

const livroRetorno = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");
console.log(livroRetorno.frase);
