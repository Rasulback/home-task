// при помощи метода querySelectorAll() получаем все элементы с классом .memory-card и записываем их в переменную cards.
const cards = document.querySelectorAll(".memory-card")

// создаем переменные hasFlippedCard, lockBoard и присваиваем им значения false, false

let hasFlippedCard = false;
let lockBoard = false;
// создаем переменные firstCard, secondCard и присваиваем им значения null, null
let firstCard, secondCard;

// создаем функцию flipCard //
function flipCard() {
  if (lockBoard) return; // если lockBoard равен true, то возвращаемся из функции
  if (this === firstCard) return; // если this равен firstCard, то возвращаемся из функции
  console.log(this); // выводим в консоль this

  this.classList.add("flip"); // добавляем класс flip элементу this

  if (!hasFlippedCard) { // если hasFlippedCard равен false
    // first click
    hasFlippedCard = true; // присваиваем hasFlippedCard значение true
    firstCard = this; // присваиваем firstCard значение this

    return;
  }

  // second click
  secondCard = this; // присваиваем secondCard значение this

  checkForMatch(); // вызываем функцию checkForMatch
}

// создаем функцию checkForMatch
function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework; // создаем переменную isMatch и присваиваем ей значение сравнения значений дата-атрибутов framework элементов firstCard и secondCard

  isMatch ? disableCards() : unflipCards(); // если isMatch равен true, то вызываем функцию disableCards, иначе вызываем функцию unflipCards
}

// создаем функцию disableCards
function disableCards() {
  firstCard.removeEventListener("click", flipCard); // удаляем у элемента firstCard обработчик события click, который является функцией flipCard
  secondCard.removeEventListener("click", flipCard); // удаляем у элемента secondCard обработчик события click, который является функцией flipCard

  resetBoard(); // вызываем функцию resetBoard
}

// создаем функцию unflipCards
function unflipCards() {
  lockBoard = true; // присваиваем lockBoard значение true

  // создаем стрелочную функцию
  setTimeout(() => {
    firstCard.classList.remove("flip"); // удаляем у элемента firstCard класс flip
    secondCard.classList.remove("flip"); // удаляем у элемента secondCard класс flip

    resetBoard(); // вызываем функцию resetBoard
  }, 1500);
}

// создаем функцию resetBoard
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false]; // присваиваем переменным hasFlippedCard и lockBoard значения false
  [firstCard, secondCard] = [null, null]; // присваиваем переменным firstCard и secondCard значения null
}

// создаем самовызывающуюся функцию shuffle
(function shuffle() { // создаем функцию shuffle
  cards.forEach((card) => { // перебираем массив cards
    let randomPos = Math.floor(Math.random() * 12); // создаем переменную randomPos и присваиваем ей случайное число от 0 до 11
    card.style.order = randomPos; // присваиваем элементу card свойство order значение randomPos
  });
})();

// перебираем массив cards и для каждого элемента массива добавляем обработчик события click, который является функцией flipCard
cards.forEach((card) => card.addEventListener("click", flipCard));
