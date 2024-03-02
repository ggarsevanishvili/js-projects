let circle = Infinity;

while (circle === Infinity) {
  let firstOperand = prompt("ჩაწერეთ პირველი ოპერანდის რიცხვითი მნიშვნელობა");
  let firstNumber = parseFloat(firstOperand);
  let tryAgain;

  while (isNaN(firstOperand) || firstOperand.length < 1) {
    tryAgain = confirm(
      "პირველი ოპერანდის მნიშვნელობა არ შეესაბამება რიცხვს, ჩაწერეთ მხოლოდ რიცხვები."
    );
    firstOperand = prompt("ჩაწერეთ პირველი ოპერანდის რიცხვითი მნიშვნელობა");
    firstNumber = parseFloat(firstOperand);
  }

  let operator = prompt(
    "ჩაწერეთ ოპერაციის მნიშვნელობა. მაგ: +; -; *; /; %; **"
  );

  while (
    operator !== "+" &&
    operator !== "-" &&
    operator !== "*" &&
    operator !== "/" &&
    operator !== "%" &&
    operator !== "**"
  ) {
    tryAgain = confirm("შეყვანილი ოპერაცია არასწორია! ჩაწერეთ სწორად");
    operator = prompt("ჩაწერეთ ოპერაციის მნიშვნელობა. მაგ: +; -; *; /; %; **");
  }

  let secondOperand = prompt("ჩაწერეთ მეორე ოპერანდის რიცხვითი მნიშვნელობა");
  let secondNumber = parseFloat(secondOperand);

  while (isNaN(secondOperand) || secondOperand.length < 1) {
    tryAgain = confirm(
      "მეორე ოპერანდის მნიშვნელობა არ შეესაბამება რიცხვს, ჩაწერეთ მხოლოდ რიცხვები."
    );
    secondOperand = prompt("ჩაწერეთ მეორე ოპერანდის რიცხვითი მნიშვნელობა");
    secondNumber = parseFloat(secondOperand);
  }

 if (operator === "+") {
    alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
  } else if (operator === "-") {
    alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
  } else if (operator === "*") {
    alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
  } else if (operator === "/") {
    if (secondNumber === 0) {
      alert(`${firstNumber} / ${secondNumber} = infinity`);
    } else {
      alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
    }
  } else if (operator === "%") {
    alert(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
  } else if (operator === "**") {
    alert(`${firstNumber} ** ${secondNumber} = ${firstNumber ** secondNumber}`);
  } else {
    alert("დაფიქსირდა გაუთვალისწინებელი შემთხვევა!");
  }

  loop = confirm("გსურთ ხელახლა ცდა?");
  {
    if (!loop) {
      alert("მადლობა, ნახვამდის");
      break;
    }
  }
}
