let peopleCount = 0,
  countEl = document.getElementById("counter"),
  reset_p = document.getElementById("res-p");

function add() {
  peopleCount += 1;
  countEl.textContent = peopleCount;
}
function subtract() {
  peopleCount -= 1;
  countEl.textContent = peopleCount;
}

function reset() {
  let alpha = peopleCount + " - ";
  reset_p.textContent += alpha;
}
