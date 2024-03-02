let circle = Infinity;

while (circle === Infinity) {
  let firstUserChoice = prompt(
    "პირველი მოთამაშის არჩევანი: ჭა, ქაღალდი, ან მაკრატელი:"
  );

  while (
    firstUserChoice !== "ჭა" &&
    firstUserChoice !== "ქაღალდი" &&
    firstUserChoice !== "მაკრატელი"
  ) {
    tryAgain = confirm(
      "დაფიქსირდა შეცდომა! შეყვანილი მნიშვნელობა უნდა იყოს მხოლოდ: ჭა, ქაღალდი, ან მაკრატელი:"
    );
    firstUserChoice = prompt(
      "პირველი მოთამაშის არჩევანი: ჭა, ქაღალდი, ან მაკრატელი:"
    );
  }

  let secondUserChoice = prompt(
    "მეორე მოთამაშის არჩევანი: ჭა, ქაღალდი, ან მაკრატელი:"
  );

  while (
    secondUserChoice !== "ჭა" &&
    secondUserChoice !== "ქაღალდი" &&
    secondUserChoice !== "მაკრატელი"
  ) {
    tryAgain = confirm(
      "დაფიქსირდა შეცდომა! შეყვანილი მნიშვნელობა უნდა იყოს მხოლოდ: ჭა, ქაღალდი, ან მაკრატელი:"
    );

    secondUserChoice = prompt(
      "მეორე მოთამაშის არჩევანი: ჭა, ქაღალდი, ან მაკრატელი:"
    );
  }

  if (firstUserChoice === secondUserChoice) {
    result = alert("დაფიქსირდა ფრე");
  } else if (
    (firstUserChoice === "ჭა" && secondUserChoice === "მაკრატელი") ||
    (firstUserChoice === "ქაღალდი" && secondUserChoice === "ჭა") ||
    (firstUserChoice === "მაკრატელი" && secondUserChoice === "ქაღალდი")
  ) {
    result = alert("გაიმარჯვა პირველმა მოთამაშემ.");
  } else {
    result = alert("გაიმარჯვა მეორე მოთამაშემ");
  }
  loop = confirm("გსურთ ხელახლა ცდა?");
  {
    if (!loop) {
      alert("მადლობა, ნახვამდის");
      break;
    }
  }
}
