const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let outputDisplay = "";
const buttonList = $$(".row p");
const mainDisplay = $(".main-display");
const extraDisplay = $(".extra-display");

function isOperand(c) {
  if (c == "+") return true;
  if (c == "-") return true;
  if (c == "x") return true;
  if (c == "/") return true;
  if (c == "%") return true;
  return false;
}

function isValid(expression) {
  try {
    eval(expression);
  } catch (error) {
    return false;
  }
  return true;
}

buttonList.forEach(function (button) {
  button.onclick = function () {
    console.log(button);
    switch (button.innerHTML) {
      case "AC":
        outputDisplay = "";
        extraDisplay.innerHTML = "";
        break;
      case "=":
        //change multiply char
        console.log(outputDisplay);
        if (!isValid(outputDisplay)) {
          extraDisplay.innerHTML = "Expression error";
        } else {
          let result = eval(outputDisplay);
          console.log(result);
          extraDisplay.innerHTML = outputDisplay;
          outputDisplay = result;
        }
        break;
      case "DEL":
        if (outputDisplay.charAt(outputDisplay.length - 1) == " ")
          outputDisplay = outputDisplay.slice(0, -3);
        else outputDisplay = outputDisplay.slice(0, -1);
        break;
      case "TW":
        extraDisplay.innerHTML = "Team Whales 🐋🐋";
        outputDisplay = "TW 2-1 CFO";
        break;
      case "+":
      case "*":
      case "/":
      case "%":
      case "-":
        outputDisplay += " " + button.innerHTML + " ";
        break;
      default:
        outputDisplay += button.innerHTML;
        break;
    }
    mainDisplay.innerHTML = outputDisplay;
  };
});
