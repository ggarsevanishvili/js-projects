let firstOperand = Number(
  prompt("ჩაწერეთ პირველი ოპერანდის რიცხვითი მნიშვნელობა")
);

while (isNaN(firstOperand || undefined)) {
  tryAgain = confirm(
    "პირველი ოპერანდის მნიშვნელობა არ შეესაბამება რიცხვს, ჩაწერეთ მხოლოდ რიცხვები."
  );
  firstOperand = Number(
    prompt("ჩაწერეთ პირველი ოპერანდის რიცხვითი მნიშვნელობა")
  );
}

let operator = prompt("ჩაწერეთ ოპერაციის მნიშვნელობა. მაგ: +; -; *; /; %; **");

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

let secondOperand = Number(
  prompt("ჩაწერეთ მეორე ოპერანდის რიცხვითი მნიშვნელობა")
);

while (isNaN(secondOperand || undefined)) {
  tryAgain = confirm(
    "მეორე ოპერანდის მნიშვნელობა არ შეესაბამება რიცხვს, ჩაწერეთ მხოლოდ რიცხვები."
  );
  secondOperand = Number(
    prompt("ჩაწერეთ მეორე ოპერანდის რიცხვითი მნიშვნელობა")
  );
}

if (operator === "+") {
  alert(`${firstOperand} + ${secondOperand} = ${firstOperand + secondOperand}`);
} else if (operator === "-") {
  alert(`${firstOperand} - ${secondOperand} = ${firstOperand - secondOperand}`);
} else if (operator === "*") {
  alert(`${firstOperand} * ${secondOperand} = ${firstOperand * secondOperand}`);
} else if (operator === "/") {
  alert(`${firstOperand} / ${secondOperand} = ${firstOperand / secondOperand}`);
} else if (operator === "%") {
  alert(`${firstOperand} % ${secondOperand} = ${firstOperand % secondOperand}`);
} else if (operator === "**") {
  alert(
    `${firstOperand} ** ${secondOperand} = ${firstOperand ** secondOperand}`
  );
} else {
  alert("ფაფიქსირდა გაუთვალისწინებელი შემთხვევა!");
}
