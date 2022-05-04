/* 
Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: "Tem mais alguma tecnologia que você gostaria de aprender?", continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida. */

const name = prompt("Olá, seja bem-vindo. Qual o seu nome?");
const area = prompt(
  `${name}, qual área quer seguir? Digite 1 para Front-End, 2 para Back-End ou 3 para Full Stack.`
);

if (area === "1") {
  let frontend = prompt(
    "Qual framework quer aprender? Digite 1 para React, 2 para Vue."
  );
  frontend === "1" ? (frontend = "React") : (frontend = "Vue");
  alert(
    `Que legal. Você quer seguir na área de Front-End e quer aprender ${frontend}`
  );
} else if (area === "2") {
  let backend = prompt(
    "Qual tecnologia Back-End quer aprender? Digite 1 para C#, 2 para Java."
  );
  backend === "1" ? (backend = "C#") : (backend = "Java");
  alert(
    `Que legal. Você quer seguir na área de Back-End e quer aprender ${backend}.`
  );
} else {
  alert("Que ótimo, você pretende seguir uma carreira de Full Stack.");
}

let tech = [];
let answer = "";

while (answer.toLowerCase() !== "fim") {
  answer = prompt(
    "Qual(is) tecnologia(s) você gostaria de se especializar? Digite 'FIM' para encerrar!"
  );
  if (answer.toLowerCase() !== "fim") tech.push(answer);
}

if (tech != '') {
  alert(`${name} você quer aprender a(s) tecnologia(s) ${tech.join(", ")}.`);
} else {
  alert(`${name} você não tem interesse em aprender outras tecnologias.`);
}

alert("Obrigado por sua participação!");
