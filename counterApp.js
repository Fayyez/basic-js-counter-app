let peopleCount = 0,
  countEl = document.getElementById("counter"),
  reset_p = document.getElementById("res-p");
popup = document.getElementById("Popup");

function sleepFor(seconds) {
  seconds = seconds * 1000;
  return new Promise((resolve) => {
    setTimeout(resolve, seconds);
  });
}

async function hideElement(element) {
  await sleepFor(1.5);
  popup.style.display = "none";
}

function showPopup(msg, color) {
  popup.innerText = msg;
  popup.style.backgroundColor = color;
  popup.style.display = "inline";
  hideElement(popup);
}

function add() {
  peopleCount += 1;
  countEl.textContent = peopleCount;
}

function subtract() {
  if (peopleCount == 0) {
    showPopup("Number of people cannot be less than '0'", "red");
  } else {
    peopleCount -= 1;
    countEl.textContent = peopleCount;
  }
}

function reset() {
  let alpha = peopleCount + " - ";
  reset_p.textContent += alpha;
  countEl.textContent = 0;
  peopleCount = 0;
  showPopup("The counter has been Reset!!", "green");
}
