const data = [
  {
    category: "Geografia",
    question: "Qual a capital do Brasil?",
    correct_answer: "Brasília",
    answers: ["Porto Alegre", "Rio de Janeiro", "São Paulo", "Brasília"],
  },
  {
    category: "Geografia",
    question: "Qual a língua oficial da Costa Rica?",
    correct_answer: "Espanhol",
    answers: ["Inglês", "Portugues", "Crioula", "Espanhol"],
  },
  {
    category: "Geografia",
    question: "Qual dos seguintes países árabes NÃO tem uma bandeira contendo apenas cores pan-árabes?",
    correct_answer: "Catar",
    answers: ["Kuwait", "Emirados Árabes Unidos", "Jordânia", "Catar"],
  },
  {
    category: "Geografia",
    question: "Qual país do Reino Unido apresenta um dragão em sua bandeira?",
    correct_answer: "País de Gales",
    answers: ["Inglaterra", "Irlanda do Norte", "Escócia", "País de Gales"],
  },
  {
    category: "Esporte",
    question: "Qual time venceu a Premier League inglesa de 2015-16?",
    correct_answer: "Leicester City",
    answers: ["Liverpool", "Cheslea", "Manchester United", "Leicester City"],
  },
  {
    category: "Esporte",
    question: "Quem ganhou o Campeonato Mundial de Fórmula 1 de 2015?",
    correct_answer: "Lewis Hamilton",
    answers: ["Nico Rosberg", "Sebastian Vettel", "Jenson Button", "Lewis Hamilton"],
  },
  {
    category: "Esporte",
    question: "Qual time venceu a Copa do Mundo FIFA 2014 no Brasil?",
    correct_answer: "Alemanha",
    answers: ["Argentina", "Brasil", "Holanda", "Alemanha"],
  },
  {
    category: "Esporte",
    question: "Quem venceu o Campeonato Mundial de Pilotos de Fórmula 1 de 2017?",
    correct_answer: "Lewis Hamilton",
    answers: ["Sebastian Vettel", "Nico Rosberg", "Max Verstappen", "Lewis Hamilton"],
  },
];

let questions;
let page = 0;
let answer = "";
let countQuestions;
let countCorrectAnswer = 0;
let countWrongAnswer = 0;
let hour = 0;
let minute = 0;
let second = 0;
let cron;
let content = document.querySelector(".content");
let textTimer = document.querySelector(".timer");
const btnNext = document.querySelector(".btnNext");
const btnFinish = document.querySelector(".btnFinish");
const btnConfirm = document.querySelector(".btnConfirm");
const divStart = document.querySelector(".start");
const btnStart = document.querySelector(".btnStart");
const divQuestions = document.querySelector(".questions");
const questionHeader = document.querySelector(".question-header");
const questionContent = document.querySelector(".question-content");
const questionChoices = document.querySelector(".question-choices");
const selectCategory = document.querySelector("[name='category']");

const getQuestion = (page) => {
let contentHTML = "";
  let numberActualQuestion = document.querySelector(".actual-question");
  let numberTotalQuestions = document.querySelector(".total-questions");
  const questionCategory = document.querySelector(".category");
  const questionTitle = document.querySelector(".question-title");
  const questionChoices = document.querySelector(".question-choices");
  questionChoices.style.pointerEvents = "auto";
  questionTitle.innerHTML = questions[page].question;
  questionCategory.innerHTML = questions[page].category;
  numberActualQuestion.textContent = ` ${page + 1}`;
  numberTotalQuestions.textContent = `${countQuestions}`;
  btnConfirm.style.display = "block";
  btnConfirm.style.backgroundColor = "#d3d3d3";
  btnConfirm.disabled = true;
  btnNext.style.display = "none";
  divStart.style.display = "none";

  if (page + 1 === countQuestions) {
    btnNext.style.display = "none";
  }
  questions[page].answers
    .sort(() => Math.random() - 0.5)
    .forEach((e) => {
      contentHTML += `
        <li data-list="${e}">
          <input type="radio" name="choice" id="${e}" value="${e}" hidden data-choice="${e}">
          <label for="${e}">${e}</label>
        </li>
      `;
    });
  questionChoices.innerHTML = contentHTML;
};

btnNext.addEventListener("click", () => {
  page++;
  getQuestion(page);
});

btnConfirm.addEventListener("click", () => {
  const input = document.querySelectorAll("[name='choice']");
  input.forEach((e) => {
    if (e.checked) {
      if (e.value === questions[page].correct_answer) {
        e.nextSibling.nextSibling.style.backgroundColor = "#42af02";
        countCorrectAnswer++;
      } else {
        e.nextSibling.nextSibling.style.backgroundColor = "#ff7272";
        countWrongAnswer++;
      }
    } else if (e.value === questions[page].correct_answer) {
      e.nextSibling.nextSibling.style.backgroundColor = "#42af02";
    }
  });
  const questionChoices = document.querySelector(".question-choices");
  questionChoices.style.pointerEvents = "none";
  btnConfirm.style.display = "none";
  btnNext.style.display = "block";
  if (page + 1 === countQuestions) {
    btnNext.style.display = "none";
    btnFinish.style.display = "block";
  }
});

btnFinish.addEventListener("click", () => {
  pause();
  questionHeader.style.display = "none";
  questionContent.style.display = "none";
  const textResult = `
<div class="result">
  <h2>Resultado</h2>
  <p ><strong>Acertou:</strong> ${countCorrectAnswer} | <strong>Errou:</strong> ${countWrongAnswer}</p>
  <p><strong>Porcentagem de acertos:</strong> ${((countCorrectAnswer / countQuestions) * 100).toFixed(0)}%</p>
  <p><strong>Tempo decorrido:</strong> ${formatUnit(hour)}:${formatUnit(minute)}:${formatUnit(second)}</p>
</div>
`;
  content.insertAdjacentHTML("beforeend", textResult);
});

questionChoices.addEventListener("change", () => {
  const input = document.querySelectorAll("[name='choice']");
  input.forEach((e) => {
    if (e.checked) {
      btnConfirm.disabled = false;
      btnConfirm.style.backgroundColor = "#42af02";
    }
  });
});

selectCategory.addEventListener("change", () => {
  if (selectCategory.value != "") {
    btnStart.disabled = false;
    btnStart.style.backgroundColor = "#42af02";
  }
});

const timer = () => {
  cron = setInterval(() => {
    if ((second += 1) == 60) {
      second = 0;
      minute++;
    }
    if (minute == 60) {
      minute = 0;
      hour++;
    }
    textTimer.textContent = `${formatUnit(hour)}:${formatUnit(minute)}:${formatUnit(second)}`;
  }, 1000);
};

const start = () => {
  questions = data.filter((e) => {
    if (e.category == selectCategory.value) {
      return true;
    } else {
      return false;
    }
  });
  countQuestions = questions.length;
  divQuestions.style.display = "block";
  getQuestion(page);
  pause();
  timer();
};

const pause = () => {
  clearInterval(cron);
};

const reset = () => {
  hour = 0;
  minute = 0;
  second = 0;
};

const formatUnit = (unit) => {
  return unit < 10 ? `0${unit}` : `${unit}`;
};
