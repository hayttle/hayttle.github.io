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
let categorias = {
  frutas: [],
  laticinios: [],
  congelados: [],
  doces: [],
  outros: [],
};

let resposta = prompt(
  "Olá! O que deseja fazer? 1 - Adicionar produto | 2 - Sair"
);

if (resposta == "1") {
  while (resposta == "1") {
    let produto = prompt("Qual produto quer adicionar?");
    switch (
      prompt(
        "Qual a categoria do produto? 1 - Fruta, 2 - Laticínios, 3 - Congelados, 4 - Doces, 5 - Outros."
      )
    ) {
      case "1":
        categorias.frutas.push(produto);
        break;
      case "2":
        categorias.laticinios.push(produto);
        break;
      case "3":
        categorias.congelados.push(produto);
        break;
      case "4":
        categorias.doces.push(produto);
        break;
      case "5":
        categorias.outros.push(produto);
        break;
      default:
        alert("Categoria não existe!");
        break;
    }
    resposta = prompt(
      "Adicionar mais produtos? Digite 1 para SIM ou 2 para NÃO, 3 para remover"
    );
    let hasProduct = "";
    for (let categoria in categorias) {
      hasProduct = categorias[categoria].some((e) => e.length != 0);
    }
    if (hasProduct) {
      while (resposta == "3") {
        let remove = prompt(
          `=== Lista de Compras ===\nFrutas: ${categorias.frutas.join(
            ", "
          )}\nLaticínios: ${categorias.laticinios.join(
            ", "
          )}\nCongelados: ${categorias.congelados.join(
            ", "
          )}\nDoces: ${categorias.doces.join(
            ", "
          )}\nOutros: ${categorias.outros.join(
            ", "
          )}\n\nDigite o nome do produto para remover?`
        );

        let notFound = "";
        for (let categoria in categorias) {
          hasProduct = categorias[categoria].some((e) => e.length != 0);
          if (hasProduct) {
            let idx = categorias[categoria].indexOf(remove);
            if (idx != -1) {
              notFound = "";
              categorias[categoria].splice(idx, 1);
              alert(
                `${remove} foi removido!\n\n=== Lista de Compras ===\nFrutas: ${categorias.frutas.join(
                  ", "
                )}\nLaticínios: ${categorias.laticinios.join(
                  ", "
                )}\nCongelados: ${categorias.congelados.join(
                  ", "
                )}\nDoces: ${categorias.doces.join(
                  ", "
                )}\nOutros: ${categorias.outros.join(", ")}`
              );
              break;
            } else notFound = "Produto não encontrado";
          }
        }
        if (notFound != "") alert(notFound);
        resposta = prompt(
          "Adicionar mais produtos? Digite 1 para SIM ou 2 para NÃO, 3 para remover"
        );
        for (let categoria in categorias) {
          hasProduct = categorias[categoria].some((e) => e.length != 0);
        }
        if (!hasProduct)
          resposta = prompt(
            `Lista vazia!\nAdicionar mais produtos? Digite 1 para SIM ou 2 para NÃO`
          );
      }
    } 
  }
  if (!resposta.includes(["1", "2", "3"])) {
    alert(`Programa encerrado.`);
  }
} else if (resposta == "2") {
  alert(`Programa encerrado.`);
} else {
  alert("Opção inválida!");
}
alert(
  `=== Lista de Compras ===\nFrutas: ${categorias.frutas.join(
    ", "
  )}\nLaticínios: ${categorias.laticinios.join(
    ", "
  )}\nCongelados: ${categorias.congelados.join(
    ", "
  )}\nDoces: ${categorias.doces.join(", ")}\nOutros: ${categorias.outros.join(
    ", "
  )}\n\n Obrigado por usar o programa!`
);
