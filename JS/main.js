// let counterElement = document.querySelector(".main-counter");
// let decreaseButton = document.querySelector(".button-decrease");
// let resetButton = document.querySelector(".button-reset");
// let increaseButton = document.querySelector(".button-increase");

// let counterValue = 0;

// function updateCounter() {
//     counterElement.textContent = counterValue;
// }
// resetButton.addEventListener("click", function() {
//     counterValue = 0;
//     updateCounter();
// });
// decreaseButton.addEventListener("click", function() {
//     counterValue--;
//     updateCounter();
// });
// increaseButton.addEventListener("click", function() {
//     counterValue++;
//     updateCounter();
// });
// updateCounter();

let counterElement = document.querySelector(".main-counter");
let buttons = document.querySelectorAll(".button");

let counterValue = 0;

function updateCounter() {
    counterElement.textContent = counterValue;
    if (counterValue > 0) {
        counterElement.style.color = "green";
    }
    else if (counterValue === 0) {
        counterElement.style.color = "black";
    }

    else {
        counterElement.style.color = "red";
    }
}

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        if (button.classList.contains("button-increase")) {
            counterValue++;
        } else if (button.classList.contains("button-reset")) {
            counterValue = 0;
        } else if (button.classList.contains("button-decrease")) {
            counterValue--;
        }
        updateCounter();
    });
});

updateCounter();