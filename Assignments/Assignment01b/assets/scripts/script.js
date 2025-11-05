const DARK_MODE_BTN = document.getElementById("dark-mode-btn");

const allH2 = document.querySelectorAll("h2");
const allComments = document.querySelectorAll(".comment");

DARK_MODE_BTN.addEventListener("click", () => {
    document.body.style.background = "none";
    document.body.style.backgroundColor = "black";
    document.querySelector("h1").style.color = "white";
    DARK_MODE_BTN.style.backgroundColor = "rgb(71, 70, 70)";

    allH2.forEach((el ) => {
       el.classList.add("game-title-dark");
    })

    allComments.forEach((el) =>{
        el.classList.add("comment-dark");
    })
})

const ADD_GAME_BTN = document.getElementById("add-game-btn");
const NEW_GAMECARD = document.createElement("div");
const NEW_GAMECARD_CONTENT = inputField.value;

ADD_GAME_BTN.addEventListener("click", () => {
    NEW_GAMECARD.document.createElement("div");
    NEW_GAMECARD.classList.add("gamecard");


})
