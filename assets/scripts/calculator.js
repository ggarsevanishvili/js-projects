let firstOperand = Number(prompt("ჩაწერეთ პირველი ოპერანდის რიცხვითი მნიშვნელობა"));

while(isNaN(firstOperand || undefined )) {
    tryAgain = confirm("პირველი ოპერანდის მნიშვნელობა არ შეესაბამება რიცხვს, ჩაწერეთ მხოლოდ რიცხვები.");
    if (!tryAgain) {
        alert("მადლობა, ნახვამდის.")
        break;
    }
    else     {
        firstOperand = Number(prompt("ჩაწერეთ პირველი ოპერანდის რიცხვითი მნიშვნელობა"));
    }
}


let operator = prompt("ჩაწერეთ ოპერაციის მნიშვნელობა. მაგ: +; -; *; /; %; **");

while (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/" && operator !== "%" && operator !== "**" ) {
    tryAgain = confirm("არასწორი ოპერანდი! ჩაწერეთ სწორად")
    if (!tryAgain) {
        alert("მადლობა, ნახვამდის")
        break;
    }
    else {
        operator = prompt("ჩაწერეთ ოპერაციის მნიშვნელობა. მაგ: +; -; *; /; %; **");
    }
}


let secondOperand = Number(prompt("ჩაწერეთ მეორე ოპერანდის რიცხვითი მნიშვნელობა"));

while(isNaN(secondOperand || undefined)) {
    tryAgain = confirm("მეორე ოპერანდის მნიშვნელობა არ შეესაბამება რიცხვს, ჩაწერეთ მხოლოდ რიცხვები.")
    if (!tryAgain) {
        alert("მადლობა, ნახვამდის.")
        break;
    }
    else     {
        secondOperand = Number(prompt("ჩაწერეთ მეორე ოპერანდის რიცხვითი მნიშვნელობა"));
    }
}

let result;

if (operator === "+") {
    result = alert(`${firstOperand} + ${secondOperand} = ${firstOperand + secondOperand}`);
} else if (operator === "-") {
    result = alert(`${firstOperand} - ${secondOperand} = ${firstOperand - secondOperand}`);
} else if (operator === "*") {
    result = alert(`${firstOperand} * ${secondOperand} = ${firstOperand * secondOperand}`);
} else if (operator === "/") {
    result = alert(`${firstOperand} / ${secondOperand} = ${firstOperand / secondOperand}`);
} else if (operator === "%") {
    result = alert(`${firstOperand} % ${secondOperand} = ${firstOperand % secondOperand}`);
} else if (operator === "**") {
    result = alert(`${firstOperand} ** ${secondOperand} = ${firstOperand ** secondOperand}`);
} else {
    result = alert("ფაფიქსირდა გაუთვალისწინებელი შეცდომა!");
}
