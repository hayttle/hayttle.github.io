# Métodos de Array

* join()
  >Junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.

* shift()
  >Remove o primeiro elemento de um array e retorna esse elemento. Este método muda o tamanho do array.

* map(item[, index, array])
  >Invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
  >Usado quando quer gerar um novo array com a mesma quantidade de itens do array original transformando os itens.

* filter(item[, index, array])
  >Cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
  >Usado quando quer gerar um novo array com quantidade menor de itens do array original.

* reduce((aacumulador, itemAtual[, index, array])=>{acumulador + itemAtual},valorInicial)
  >Executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.
  >Usado quando quer reduzir o array original em um único valor.

* some()
  >Testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída e retorna um valor **true** ou **false**.

* find()
   >Retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, <u>undefined</u> é retornado.

* findIndex()
* unshift()
  >Adiciona um ou mais elementos no início de um array e retorna o número de elementos (propriedade length) atualizado.

* pop()
  >Remove o último elemento de um array e retorna aquele elemento. O array original é modificado.

* push()
  >Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array. O array original é modificado.

* slice()
  >Retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O Array original não é modificado.

* splice()
  >Altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.

* reverse()
* every()
  >Testa se todos os elementos do array passam pelo teste implementado pela função fornecida.

* sort()
* toString()
* concat()

  >Retorna um novo array contendo todos os arrays ou valores passados como parâmetro

  #### Sintaxe
  
  `arr.concat(valor1, valor2, ..., valorN)`
  
* from()
* indexOf()
* lastIndexOf()
* includes()
  >Determina se um array contém um determinado elemento, retornando **true** ou **false** apropriadamente.

## Percorrer um array

* for
* forEach()

# Métodos de String

* split()

  >Divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método.

* lastIndexOf()
  >Retorna o índice da última ocorrência do valor especificado encontrado na String

  #### Sintaxe

  `str.lastIndexOf(searchValue[, fromIndex])`

* slice()
  >Extrai uma parte de uma string e a retorna como uma nova string, sem modificar a string original.

  #### Sintaxe

  `str.slice(startIndex[, endIndex])`

* replace()
  >Retorna uma nova string com algumas ou todas as correspondências de um padrão substituídas por um determinado caractere (ou caracteres).
  >A string original não é modificada.

  #### Sintaxe

  `str.replace(regexp|substr, newSubStr|function)`

* includes()
  >determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando **true** ou **false**.

  #### Sintaxe

  `str.includes(searchString[, position])`

# Observações

* Valores falsy
  - false
  - 0
  - '',"",``
  - null
  - undefined
  - NaN

* Valores truthy
  - Qualquer valor que não é falsy