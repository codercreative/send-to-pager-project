// javascript
// STRETCH GOALS
// different sounds for different buttons
// when a certain group of number is sent, (ie, 911 - an alarm sounds)

"use strict";

let displayUserInput = document.getElementById("user-input");
let displayResult = document.getElementById("display-result");
let pagerWrapper = document.getElementById("pager-wrapper");
const maxCharacters = "12";
const resetBtn = document.getElementById("reset-btn");
const sendBtn = document.getElementById("send-btn");
sendBtn.disabled = true;
const audio = new Audio("assets/pager.wav");

let output = "";

function pressKey(key) {
  sendBtn.disabled = false;
  if (output.length < 12) {
    output += key;
    displayUserInput.textContent = output;
  }
}

sendBtn.addEventListener("click", function () {
  setTimeout(function () {
    displayResult.textContent = displayUserInput.textContent;
    output = "";
    pagerWrapper.classList.add("vibrate-1");
    audio.play();
  }, 1000);
  sendBtn.disabled = true;
  pagerWrapper.classList.remove("vibrate-1");
});

resetBtn.addEventListener("click", function () {
  displayResult.textContent = "";
  displayUserInput.textContent = "";
  output = "";
  pagerWrapper.classList.remove("vibrate-1");
  sendBtn.disabled = true;
});
