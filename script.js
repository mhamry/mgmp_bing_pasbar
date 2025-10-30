const typing = document.querySelector(".type");
const text = ["English Olympiad", "Story Telling Competition", "English Speech Competition", "English Song Competetion"];
let indexText = 0;
let indexChar = 0;
let hapus = false;

function typeEffect() {
  const currentText = text[indexText];
  const currentChar = currentText.substring(0, indexChar);
  typing.textContent = currentChar;
  typing.classList.add("stop-blink");

  if (!hapus && indexChar < currentText.length) {
    indexChar++;
    setTimeout(typeEffect, 100);
  } else if (hapus && indexChar > 0) {
    indexChar--;
    setTimeout(typeEffect, 100);
  } else {
    hapus = !hapus;
    typing.classList.remove("stop-blink");
    indexText = !hapus ? (indexText + 1) % text.length : indexText;
    setTimeout(typeEffect, 2200);
  }
}
typeEffect();

function runningImage(selector, direction, speed) {
  const track = document.querySelector(selector);
  track.innerHTML += track.innerHTML;
  const originWidth = track.scrollWidth / 2;
  track.style.setProperty("--move", `-${originWidth}px`);
  track.style.animation = `run-${direction} ${originWidth / speed}s linear infinite`;
}

window.onload = () => {
  runningImage(".track-right", "right", 20);
  runningImage(".track-left", "left", 40);
};
