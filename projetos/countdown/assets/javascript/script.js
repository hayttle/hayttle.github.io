// const btnStart = document.querySelector(".btnStart");
const inputDate = document.querySelector(".inputDate");
const textDate = document.querySelector(".date");
const textDays = document.querySelector(".days span.number");
const textHours = document.querySelector(".hours span.number");
const textMinutes = document.querySelector(".minutes span.number");
const textSeconds = document.querySelector(".seconds span.number");
const divMain = document.querySelector(".main");
const divCounter = document.querySelector(".counter");

const regexpTest = (str) => {
  const regexp = new RegExp(
    /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i
  );
  return regexp.test(str);
};

const formatTimeUnit = (unit) => {
  return String(unit).length === 1 ? `0${unit}` : `${unit}`;
};

const insertCoundownValues = ({days, hours, minutes, seconds}) => {
  textDays.textContent = formatTimeUnit(days);
  textHours.textContent = formatTimeUnit(hours);
  textMinutes.textContent = formatTimeUnit(minutes);
  textSeconds.textContent = formatTimeUnit(seconds);
};

const updateCountdown = () => {
  const str = inputDate.value.split("/").reverse().join("-") + "T00:00";
  const currentTime = new Date();
  const nextTime = new Date(str);
  const diffTime = nextTime.getTime() - currentTime.getTime();
  const days = Math.floor(diffTime / 1000 / 60 / 60 / 24);
  const hours = Math.floor(diffTime / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(diffTime / 1000 / 60) % 60;
  const seconds = Math.floor(diffTime / 1000) % 60;
  insertCoundownValues({days, hours, minutes, seconds});
};

let interval;

const start = () => {
  if (regexpTest(inputDate.value)) {
    divMain.style.display = "none";
    divCounter.style.display = "flex";
    textDate.innerHTML = inputDate.value;
    interval = setInterval(updateCountdown, 1000);
  } else {
    alert("Data inválida!");
  }
};

const restart = () => {
  clearInterval(interval);
  location.href = "index.html";
};
