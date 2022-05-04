/* 

Você já brincou de tentar adivinhar o número que seu amigo ou amiga estava pensando? Hoje você vai voltar na infância e fazer exatamente isso. Mas agora, o jogo vai ser contra o próprio computador!

Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

Para fazer a própria máquina escolher sozinha o número a ser adivinhado, você pode utilizar algo chamado Math.random().

Para isso, utilize o código:

Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo)
*/

const min = 0;
const max = 10;
const attempts = 3;
let count = 0;
let numberPlayer;
const numberMachine = Math.floor(Math.random() * (max - min + 1) + min);

while (count < attempts) {
  numberPlayer = prompt(
    `Adivinhe o número sorteado de ${min} e ${max}. ${
      attempts - count
    } tentativa(s)`
  );
  if (Number(numberPlayer) === numberMachine) {
    alert(`Parabéns, você acertou! O número sorteado foi ${numberMachine}`);
    count = 3;
  } else {
    if (attempts - count > 1) {
      alert(`Número errado. Tente novamente.`);
    } else if (attempts - count == 1) {
      alert(`Você não acertou. O número é ${numberMachine}`);
    }
    count++;
  }
}
