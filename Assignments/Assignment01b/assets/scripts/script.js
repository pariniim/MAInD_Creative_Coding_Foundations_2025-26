//Selecting all H2 titles
const allH2 = document.querySelectorAll("h2");

//Light Mode JS code
const LIGHT_MODE_BTN = document.getElementById("light-mode-btn");

LIGHT_MODE_BTN.addEventListener("click", () => {
    document.body.style.background = "none";
    document.body.style.backgroundColor = "#508c9cff";
    document.querySelector("h1").style.color = "white";

    allH2.forEach((el ) => {
       el.classList.add("game-title-light");
    })

})

//Dark Mode JS code
const DARK_MODE_BTN = document.getElementById("dark-mode-btn");

DARK_MODE_BTN.addEventListener("click", () => {
    document.body.style.background = "none";
    document.body.style.backgroundColor = "black";
    document.querySelector("h1").style.color = "white";

    allH2.forEach((el ) => {
       el.classList.add("game-title-dark");
    })

})

//Code for rating the FIRST game series
const USER_FIRST_GAME_RATING_PLACE = document.getElementById("first-game-rating-place");
const SUBMIT_FIRST_GAME_USER_RATING = document.getElementById("first-game-rating-submit-btn");


SUBMIT_FIRST_GAME_USER_RATING.addEventListener("click", () => {
    let FIRST_USER_RATING = document.getElementById("first-game-rating").value;
    USER_FIRST_GAME_RATING_PLACE.innerHTML = "<p>Your rating is:</p>" + FIRST_USER_RATING +"/10";
    
})


//Code for rating the SECOND game series
const USER_SECOND_GAME_RATING_PLACE = document.getElementById("second-game-rating-place");
const SUBMIT_SECOND_GAME_USER_RATING = document.getElementById("second-game-rating-submit-btn");


SUBMIT_SECOND_GAME_USER_RATING.addEventListener("click", () => {
    let SECOND_USER_RATING = document.getElementById("second-game-rating").value;
    USER_SECOND_GAME_RATING_PLACE.innerHTML = "<p>Your rating is:</p>" + SECOND_USER_RATING +"/10";
    
})


//Code for rating the THIRD game series
const USER_THIRD_GAME_RATING_PLACE = document.getElementById("third-game-rating-place");
const SUBMIT_THIRD_GAME_USER_RATING = document.getElementById("third-game-rating-submit-btn");
const REMOVE_RATING_BTN = document.querySelector(".remove-button");

SUBMIT_THIRD_GAME_USER_RATING.addEventListener("click", () => {
    let THIRD_USER_RATING = document.getElementById("third-game-rating").value;
    USER_THIRD_GAME_RATING_PLACE.innerHTML = "<p>Your rating is:</p>" + THIRD_USER_RATING +"/10";
    
}) 

//Code for changing view to COLUMN in Dekstop screens
const COLUMN_VIEW_BTN = document.getElementById("column-view-btn");
const GAMESVIEW_COLUMN = document.getElementById("videogames");

COLUMN_VIEW_BTN.addEventListener("click", () => {
    document.getElementById("videogames").style.flexDirection = "column";
    document.getElementById("videogames").style.justifyContent = "space-around";
})

//Code for changing view to ROW (default) in Dekstop screens
const ROW_VIEW_BTN = document.getElementById("row-view-btn");
const GAMESVIEW_ROW = document.getElementById("videogames");

ROW_VIEW_BTN.addEventListener("click", () => {
    document.getElementById("videogames").style.flexDirection = "row";
})

//Code for removing image 
const REMOVE_IMAGE_BTN = document.getElementById("remove-image");

REMOVE_IMAGE_BTN.addEventListener("click", () => {
    alert("HE");
})
