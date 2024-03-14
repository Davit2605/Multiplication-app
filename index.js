const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const questionEl = document.getElementById("question");
const scoreEl = document.getElementById("score");
const newGameEl = document.getElementById("new-game");

let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}
questionEl.innerText = `What is ${num1} multiplied by ${num2}?`;
scoreEl.innerText = `Score: ${score}`;
const correctAns = num1 * num2;
formEl.addEventListener("submit", () => {
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updateLocaleStg();
  } else {
    score--;
    updateLocaleStg();
  }
});

newGameEl.addEventListener("click", () => {
  scoreEl.innerText = "Score: 0";
  score = 0;
  inputEl.value = "";
  localStorage.clear();
});
function updateLocaleStg() {
  localStorage.setItem("score", JSON.stringify(score));
}
