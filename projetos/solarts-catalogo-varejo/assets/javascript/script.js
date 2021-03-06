const produtos = [
  {
    name: "Ábaco aberto com 50 argolas",
    image: "./assets/images/001.jpg",
    measure: "25cm x 7,5cm",
    price: "43,00",
  },
  {
    name: "Ábaco fechado com 40 argolas",
    image: "./assets/images/002.jpg",
    measure: "15cm x 8cm x 21cm",
    price: "48,00",
  },
  {
    name: "Alfabeto móvel com 40 letras para pintura",
    image: "./assets/images/015.jpg",
    measure: "4cm",
    price: "40,00",
  },
  {
    name: "Alinhavo Números",
    image: "./assets/images/014.jpg",
    measure: "8cm x 10cm",
    price: "54,00",
  },
  {
    name: "Alinhavo Vogais",
    image: "./assets/images/013.jpg",
    measure: "8cm x 10cm",
    price: "40,00",
  },
  {
    name: "Caixa Cubo formas geométricas",
    image: "./assets/images/011.jpg",
    measure: "14cm x 14cm x 14cm",
    price: "75,00",
  },
  {
    name: "Caixa encaixe formas geométricas",
    image: "./assets/images/010.jpg",
    measure: "14cm x 14cm x 6cm",
    price: "48,00",
  },
  {
    name: "Encaixe de 9 formas",
    image: "./assets/images/021.jpg",
    measure: "20cm x 20cm",
    price: "40,00",
  },
  {
    name: "Encaixe de 6 formas quadrados e círculos",
    image: "./assets/images/025.jpg",
    measure: "20cm x 20cm",
    price: "39,00",
  },
  {
    name: "Encaixe de 3 formas (quadrado ou círculo)",
    image: "./assets/images/024.jpg",
    measure: "20cm x 10cm",
    price: "28,00",
  },
  {
    name: "Escada pedagógica colorida",
    image: "./assets/images/029.jpg",
    measure: "24cm x 6,5cm x 6,5cm",
    price: "42,00",
  },
  {
    name: "Pareamento de cores e tamanho",
    image: "./assets/images/026.jpg",
    measure: "20cm x 20cm",
    price: "32,00",
  },
  {
    name: "Tabuleiro encaixe de formas",
    image: "./assets/images/023.jpg",
    measure: "20cm x 8cm",
    price: "35,00",
  },
  {
    name: "Tabuleiro encaixe de formas diversas",
    image: "./assets/images/022.jpg",
    measure: "20cm x 20cm",
    price: "40,00",
  },
  {
    name: "Tabuleiro animais de encaixe",
    image: "./assets/images/016.jpg",
    measure: "30cm x 20cm",
    price: "44,00",
  },
  {
    name: "Tabuleiro alfabeto de encaixe",
    image: "./assets/images/005.jpg",
    measure: "35cm x 18cm",
    price: "48,00",
  },
  {
    name: "Tabuleiro educativo montessoriano (alfabeto, números com 55 argolas coloridas)",
    image: "./assets/images/007.jpg",
    measure: "45cm x 18cm",
    price: "150,00",
  },
  {
    name: "Tabuleiro montessoriano com alfabeto, números com 55 argolas coloridas e personalizado com o nome da criança",
    image: "./assets/images/032.jpg",
    measure: "45cm x 23cm",
    price: "200,00",
  },
  {
    name: "Placas com nomes personalizados para encaixe (valor a partir)",
    image: "./assets/images/033.jpg",
    measure: "proporcional ao nome",
    price: "50,00",
  },
  {
    name: "Tabuleiro com nome personalizado e formas geométricas (valor a partir)",
    image: "./assets/images/034.jpg",
    measure: "proporcional ao nome",
    price: "80,00",
  },
  {
    name: "Tabuleiro educativo montessoriano (alfabeto e números)",
    image: "./assets/images/008.jpg",
    measure: "45cm x 15cm",
    price: "78,00",
  },
  {
    name: "Tabuleiro Números",
    image: "./assets/images/003.jpg",
    measure: "23cm x 18cm",
    price: "35,00",
  },
  {
    name: "Tabuleiro Vogais",
    image: "./assets/images/004.jpg",
    measure: "25cm x 6cm",
    price: "28,00",
  },
  {
    name: "Tabuleiro Números com argolas",
    image: "./assets/images/006.jpg",
    measure: "40cm x 12cm",
    price: "72,00",
  },
  {
    name: "Tabuleiro Numeral 1 a 5 gravado com argolas",
    image: "./assets/images/012.jpg",
    measure: "20cm x 6cm",
    price: "32,00",
  },
  {
    name: "Jogo da Velha (Diversas cores)",
    image: "./assets/images/009.jpg",
    measure: "15cm x 15cm",
    price: "32,00",
  },
  {
    name: "Jogo Resta Um",
    image: "./assets/images/019.jpg",
    measure: "10cm x 10cm",
    price: "42,00",
  },
  {
    name: "Prancha de Seleção",
    image: "./assets/images/020.jpg",
    measure: "15cm x 15cm",
    price: "52,00",
  },
  {
    name: "Quebra-cabeça puzzle colorido",
    image: "./assets/images/027.jpg",
    measure: "12cm x 12cm",
    price: "56,00",
  },
  {
    name: "Tabuleiro Jogo Tetris de montagem quebra-cabeça 40 peças",
    image: "./assets/images/028.jpg",
    measure: "18cm x 28cm",
    price: "82,00",
  },
  {
    name: "Tabuleiro Jogo Tetris de montagem quebra-cabeça 12 peças",
    image: "./assets/images/036.jpg",
    measure: "13cm x 21cm",
    price: "45,00",
  },
  {
    name: "Tabuleiro Jogo montagem quebra-cabeça hexagonal 11 peças",
    image: "./assets/images/037.jpg",
    measure: "16cm x 19cm",
    price: "42,00",
  },
  {
    name: "Jogo de tabuleiro Damas",
    image: "./assets/images/035.jpg",
    measure: "40cm x 40cm",
    price: "180,00",
  },
  {
    name: "Tangram",
    image: "./assets/images/018.jpg",
    measure: "15cm x 15cm",
    price: "40,00",
  },
  {
    name: "Torre de encaixe quadrada",
    image: "./assets/images/030.jpg",
    measure: "8cm x 8cm",
    price: "26,00",
  },
  {
    name: "Torre de encaixe redonda",
    image: "./assets/images/031.jpg",
    measure: "8cm x 8cm",
    price: "26,00",
  },
  {
    name: "Torre de Hanoi",
    image: "./assets/images/017.jpg",
    measure: "20cm x 7cm x 10cm",
    price: "38,00",
  },
];

let contentHTML = "";
for (let produto of produtos) {
  contentHTML += `
  <tr class="product-item">
    <td colspan="2" class="product-item-product">
      <div>
        <img src="${produto.image}" alt="">
        <div class="product-item-product-description">
          <p class="product-item-product-description-title">${produto.name}</p>
          <p class="product-item-product-description-measure">Medidas: ${produto.measure}</p>
        </div>
        </div>
    </td>
    <td class="product-item-price"><span>${produto.price}</span></td>
    <td class="product-item-amount">
      <input class="product-item-amount-input" type="number" min="0" placeholder="0" id="amount">
    </td>
    <td class="product-item-subtotal"><span class="subtotal" id="subtotal">0,00</span></td>
   </tr>
    `;
}
const tableTr = document.querySelector("#table tr.product-item-total");
tableTr.insertAdjacentHTML("beforebegin", contentHTML);
const items = document.querySelectorAll(".product-item");
let cart = document.querySelector("#cart > span");
const total = document.getElementById("total");
const subtotals = document.querySelectorAll(".subtotal");

items.forEach((e) => {
  const price = e.childNodes[3].textContent.replace(",", ".");
  const amount = e.childNodes[5].childNodes[1];
  const subtotal = e.childNodes[7].childNodes[0];

  amount.addEventListener("change", () => {
    let sum = 0;
    subtotal.textContent = (price * amount.value).toFixed(2).replace(".", ",");
    subtotals.forEach((elem) => {
      sum += parseFloat(elem.textContent.replace(",", "."));
    });
    total.textContent = parseFloat(sum).toFixed(2).replace(".", ",");
    cart.textContent = parseFloat(sum).toFixed(2).replace(".", ",");
  });
});
