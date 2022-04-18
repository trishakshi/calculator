const toggle = document.getElementById("toggle");
const body = document.querySelector("body");

toggle.onclick = () => {
  if (toggle.classList.contains("option-one")) {
    toggle.classList.remove("option-one");
    toggle.classList.add("option-two");

    body.classList.remove("theme-one");
    body.classList.add("theme-two");
  } else if (toggle.classList.contains("option-two")) {
    toggle.classList.remove("option-two");
    toggle.classList.add("option-three");

    body.classList.remove("theme-two");
    body.classList.add("theme-three");
  } else if (toggle.classList.contains("option-three")) {
    toggle.classList.remove("option-three");
    toggle.classList.add("option-one");

    body.classList.remove("theme-three");
    body.classList.add("theme-one");
  }
};

const keys = document.querySelectorAll("#key");
const screen = document.getElementById("result");
let calculate = document.getElementById("calculate");
let reset = document.getElementById("reset");
let clear = document.getElementById("clear");

keys.forEach((key) => {
  key.onclick = () => {
    screen.value += key.value;
  };
});

calculate.onclick = () => {
  const equation = screen.value;
  total = eval(equation);
  screen.value = total;
};

reset.onclick = function () {
  screen.value = "";
};

clear.onclick = function () {
  let value = screen.value;
  screen.value = value.substr(0, value.length - 1);
};
