
// initializing some values
let totalAttemps = 5;
let attempts = 0;
let totalWons = 0;
let totallosts = 0;


// finding elements
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guessingNumber");
const btn = form.querySelector("#btn");
const resultText = cardBody.querySelector(".resultText");
const lostWonMessage = document.createElement("p");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");


form.addEventListener("submit", function (event) {
    event.preventDefault();

    attempts++;
    if (attempts > 5) {
        guessingNumber.ariaDisabled = true;
        btn.ariaDisabled = true;
    } else {
        checkResult(guessingNumber.value);
        remainingAttempts.innerHTML = `Remaining attempts ⌛: ${totalAttemps - attempts}`;
    }
    guessingNumber.value = "";
});


function checkResult(guessingNumber) {
    const randomNumber = getRandomNumber(5);
    if (guessingNumber == randomNumber) {
        resultText.innerHTML = 'You have won 🏆';
        totalWons++;
    } else {
        resultText.innerHTML = `You have lost 😔; Random number was : ${randomNumber}`;
        totallosts++;
    }
    lostWonMessage.innerHTML = `Won : ${totalWons} , Lost : ${totallosts}`;
    lostWonMessage.classList.add("large-text");
    cardBody.appendChild(lostWonMessage);
}


function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}