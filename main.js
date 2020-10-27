// query selectors
var receiveMessageButton = document.querySelector("button");
var radioButtons = document.querySelectorAll(".choice");
var randomMessage = document.querySelector(".message-hidden");
var messageImage = document.querySelector(".image-hidden");
var favoriteButton = document.querySelector(".favorite-button");
var viewFavoritesButton = document.querySelector(".view-favorites");
var mainPageView = document.querySelector(".main-page");
var favoritesPageView = document.querySelector(".favorites-page");
var backToMainButton = document.querySelector(".back-to-main");
var savedMessagesList = document.querySelector(".message-list");
var deleteButton = document.querySelector(".delete-message");

// variables


var affirmations = [
"I forgive myself and set myself free.",
"I believe I can be all that I want to be.",
"I am in the process of becoming the best version of myself.",
"I have the freedom & power to create the life I desire.",
"I choose to be kind to myself and love myself unconditionally.",
"My possibilities are endless.",
"I am worthy of my dreams.",
"I am enough.",
"I deserve to be healthy and feel good.",
"I am full of energy and vitality and my mind is calm and peaceful.",
"Every day I am getting healthier and stronger.",
"I honor my body by trusting the signals that it sends me.",
"I manifest perfect health by making smart choices."
];

var mantras = [
"Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
"Don’t let yesterday take up too much of today.",
"Every day is a second chance.",
"Tell the truth and love everyone.",
"I am free from sadness.",
"I am enough.",
"In the beginning it is you, in the middle it is you and in the end it is you.",
"I love myself.",
"I am present now.",
"Inhale the future, exhale the past.",
"This too shall pass.",
"Yesterday is not today.",
"The only constant is change.",
"Onward and upward.",
"I am the sky, the rest is weather."
];

var favorites = [];
var currentMessage;

// event listeners

receiveMessageButton.addEventListener("click", generateMessage);
favoriteButton.addEventListener("click", favoriteMessage);
viewFavoritesButton.addEventListener("click", viewFavoritesPage);
backToMainButton.addEventListener("click", backToMain);
deleteButton.addEventListener("click", deleteMessage);

// functions and event handlers

function getRandomMessage(array) {
    return array[Math.floor(Math.random() * array.length)]
};

function generateMessage() {
  event.preventDefault();
    if (radioButtons[0].checked) {
      randomMessage.innerText = getRandomMessage(affirmations);
    } else if (radioButtons[1].checked) {
      randomMessage.innerText = getRandomMessage(mantras);
    }
      currentMessage = randomMessage.innerText;
      messageImage.classList.add("hidden");
};

function favoriteMessage() {
if (favorites.includes(currentMessage) === false) favorites.push(currentMessage);
};

function viewFavoritesPage() {
  mainPageView.classList.add("hidden");
  favoritesPageView.classList.remove("hidden");
  savedMessagesList.innerHTML = "";

  for (var i = 0; i < favorites.length; i ++) {
    savedMessagesList.innerHTML += `<li>${favorites[i]}</li>`
  }
};

function backToMain() {
  mainPageView.classList.remove("hidden");
  favoritesPageView.classList.add("hidden");
};

function deleteMessage() {
  favorites.pop();
  viewFavoritesPage();
};
