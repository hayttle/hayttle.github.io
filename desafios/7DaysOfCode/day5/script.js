/* 
criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.
Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.

Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.

Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:

O programa deverá imprimir, por exemplo:

Lista de compras:
    Frutas: banana, tomate, maçã, uva, abacate
    Laticínios: leite vegetal, leite de vaca, leite em pó
    Congelados:
    Doces: chiclete e bala de ursinho
*/
let adicionarProduto = prompt(
  "Você gostaria de adicionar um produto? Digite 1 para SIM ou 2 para NÃO."
);

let categorias = {
  frutas: [],
  laticinios: [],
  congelados: [],
  doces: [],
  outros: [],
};

while (adicionarProduto == "1") {
  let nome = prompt("Qual produto quer adicionar?");
  switch (
    prompt(
      "Qual a categoria do produto? 1 - Fruta, 2 - Laticínios, 3 - Congelados, 4 - Doces, 5 - Outros."
    )
  ) {
    case "1":
      categorias.frutas.push(nome);
      break;
    case "2":
      categorias.laticinios.push(nome);
      break;
    case "3":
      categorias.congelados.push(nome);
      break;
    case "4":
      categorias.doces.push(nome);
      break;
    case "5":
      categorias.outros.push(nome);
    default:
      alert("Categoria não existe!");
      break;
  }

  adicionarProduto = prompt(
    "Adicionar mais produtos? Digite 1 para SIM ou 2 para NÃO."
  );
}

alert(
  `=== Lista de Compras ===\nFrutas: ${categorias.frutas}\nLaticínios: ${categorias.laticinios}\nCongelados: ${categorias.congelados}\nDoces: ${categorias.doces}\nOutros: ${categorias.outros}`
);
