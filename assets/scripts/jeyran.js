let firstUserChoice = prompt("ჩაწერეთ თქვენი არჩევანი: ჭა, ქაღალდი, ან მაკრატელი:");

while (firstUserChoice !=="ჭა" && firstUserChoice !== "ქაღალდი" && firstUserChoice !== "მაკრატელი") {
    tryAgain = confirm("დაფიქსირდა შეცდომა! შეყვანილი მნიშვნელობა უნდა იყოს მხოლოდ: ჭა, ქაღალდი, ან მაკრატელი:");
    if (!tryAgain) {
        prompt("მადლობა, ნახვამდის")
    }
    else {
        firstUserChoice = prompt("ჩაწერეთ თქვენი არჩევანი: ჭა, ქაღალდი, ან მაკრატელი:");
    }
}


let secondUserChoice = prompt("ჩაწერეთ თქვენი მოწინააღმდეგის არჩევანი: ჭა, ქაღალდი, ან მაკრატელი:");

while (secondUserChoice !=="ჭა" && secondUserChoice !== "ქაღალდი" && secondUserChoice !== "მაკრატელი") {
    tryAgain = confirm("დაფიქსირდა შეცდომა! შეყვანილი მნიშვნელობა უნდა იყოს მხოლოდ: ჭა, ქაღალდი, ან მაკრატელი:");
    if (!tryAgain) {
        prompt("მადლობა, ნახვამდის")
    }
    else {
        secondUserChoice = prompt("ჩაწერეთ თქვენი მოწინააღმდეგის არჩევანი: ჭა, ქაღალდი, ან მაკრატელი:");
    }
}

let result;

if (firstUserChoice === secondUserChoice) {
    result = alert("დაფიქსირდა ფრე");
}
else if (
    (firstUserChoice === "ჭა" && secondUserChoice === "მაკრატელი") ||
    (firstUserChoice === "ქაღალდი" && secondUserChoice === "ჭა") ||
    (firstUserChoice === "მაკრატელი" && secondUserChoice === "ქაღალდი")) {
        result = alert("გილოცავთ! თქვენ გაიმარჯვეთ.")
    }
    else if (
        (firstUserChoice === "ჭა" && secondUserChoice === "ქაღალდი") ||
        (firstUserChoice === "ქაღალდი" && secondUserChoice === "მაკრატელი") ||
        (firstUserChoice === "მაკრატელი" && secondUserChoice === "ჭა")) {
            result = alert("სამწუხაროდ თქვენ დამარცხდით.");
        }
