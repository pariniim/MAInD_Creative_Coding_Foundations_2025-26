//Code for LIGHT & DARK MODE
//Selecting all H2 titles
const allH2 = document.querySelectorAll("h2");

//Light Mode JS code
const LIGHT_MODE_BTN = document.getElementById("light-mode-btn");

LIGHT_MODE_BTN.addEventListener("click", () => {
    document.body.style.background = "none";
    document.body.style.backgroundColor = "#c98374ff";
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

//************
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

    USER_SECOND_GAME_RATING_PLACE.innerHTML = "<p>Your rating is:</p>" + SECOND_USER_RATING + "/10";
    
    
})

//Code for rating the THIRD game series
const USER_THIRD_GAME_RATING_PLACE = document.getElementById("third-game-rating-place");
const SUBMIT_THIRD_GAME_USER_RATING = document.getElementById("third-game-rating-submit-btn");
const REMOVE_RATING_BTN = document.querySelector(".remove-button");

SUBMIT_THIRD_GAME_USER_RATING.addEventListener("click", () => {
    let THIRD_USER_RATING = document.getElementById("third-game-rating").value;

    USER_THIRD_GAME_RATING_PLACE.innerHTML = "<p>Your rating is:</p>" + THIRD_USER_RATING +"/10";
    
}) 

//************
//Code for changing view to COLUMN in Dekstop screens
const COLUMN_VIEW_BTN = document.getElementById("column-view-btn");
const GAMESVIEW_COLUMN = document.getElementById("videogames");

COLUMN_VIEW_BTN.addEventListener("click", () => {
    document.getElementById("videogames").style.flexDirection = "column";
    document.getElementById("videogames").style.alignItems= "center";
})

//Code for changing view to ROW (default) in Dekstop screens
const ROW_VIEW_BTN = document.getElementById("row-view-btn");

ROW_VIEW_BTN.addEventListener("click", () => {
    document.getElementById("videogames").style.flexDirection = "row";
})

//************
//Code for removing an placing images again
//Code for removing the FIRST image 
const REMOVE_FIRST_IMG_BTN = document.getElementById("remove-first-image-btn");
const FIRST_GAME_IMG = document.getElementById("first-game-img");
const PLACE_FIRST_IMG_BTN = document.getElementById("place-first-image-btn");

REMOVE_FIRST_IMG_BTN.addEventListener("click", () => {
    FIRST_GAME_IMG.remove();
    PLACE_FIRST_IMG_BTN.style.display = "inline-block";
    REMOVE_FIRST_IMG_BTN.style.display = "none";
})

//Code for placing the FIRST image again
const FIRST_IMAGE_SPACE = document.getElementById("first-image-space");

PLACE_FIRST_IMG_BTN.addEventListener("click", () => {
    FIRST_IMAGE_SPACE.appendChild(FIRST_GAME_IMG);
    REMOVE_FIRST_IMG_BTN.style.display = "inline-block";
    PLACE_FIRST_IMG_BTN.style.display = "none";   
}) 

//Code for removing the SECOND image 
const REMOVE_SECOND_IMG_BTN = document.getElementById("remove-second-image-btn");
const SECOND_GAME_IMG = document.getElementById("second-game-img");
const PLACE_SECOND_IMG_BTN = document.getElementById("place-second-image-btn");

REMOVE_SECOND_IMG_BTN.addEventListener("click", () => {
    SECOND_GAME_IMG.remove();
    PLACE_SECOND_IMG_BTN.style.display = "inline-block";
    REMOVE_SECOND_IMG_BTN.style.display = "none";
})

//Code for placing the SECOND image again
const SECOND_IMAGE_SPACE = document.getElementById("second-image-space");

PLACE_SECOND_IMG_BTN.addEventListener("click", () => {
    SECOND_IMAGE_SPACE.appendChild(SECOND_GAME_IMG);
    REMOVE_SECOND_IMG_BTN.style.display = "inline-block";
    PLACE_SECOND_IMG_BTN.style.display = "none";   
}) 

//Code for removing the THIRD image 
const REMOVE_THIRD_IMG_BTN = document.getElementById("remove-third-image-btn");
const THIRD_GAME_IMG = document.getElementById("third-game-img");
const PLACE_THIRD_IMG_BTN = document.getElementById("place-third-image-btn");

REMOVE_THIRD_IMG_BTN.addEventListener("click", () => {
    THIRD_GAME_IMG.remove();
    PLACE_THIRD_IMG_BTN.style.display = "inline-block";
    REMOVE_THIRD_IMG_BTN.style.display = "none";
})

//Code for placing the THIRD image again
const THIRD_IMAGE_SPACE = document.getElementById("third-image-space");

PLACE_THIRD_IMG_BTN.addEventListener("click", () => {
    THIRD_IMAGE_SPACE.appendChild(THIRD_GAME_IMG);
    REMOVE_THIRD_IMG_BTN.style.display = "inline-block";
    PLACE_THIRD_IMG_BTN.style.display = "none";   
}) 


