/*Code for section A*/
const CHANGE_BG_BTN = document.getElementById("change-bg-btn");

const DOCUMENT_BODY = document.body;

CHANGE_BG_BTN.addEventListener("click", () => {
    DOCUMENT_BODY.style.background = "none";
    DOCUMENT_BODY.style.backgroundColor = "navajowhite";
})


/*Code for pin #3*/
const CHANGE_TO_VERT_ALIGN_BTN = document.getElementById("change-to-vertical-btn");
const CHANGE_TO_HORI_ALIGN_BTN = document.getElementById("change-to-horizontal-btn");

const GALLERY = document.getElementById("gallery");

CHANGE_TO_VERT_ALIGN_BTN.addEventListener("click", () => {
    GALLERY.style.flexDirection = "column";
    GALLERY.style.justifyContent = "flex-start";
}) 

CHANGE_TO_HORI_ALIGN_BTN.addEventListener("click", () => {
    GALLERY.style.flexDirection = "row";
})    


/*Code for pin #4*/
const REMOVE_ELEMENT_BTN = document.getElementById("hide-element-btn");

const AWFUL_GAME = document.getElementById("Pin4");

REMOVE_ELEMENT_BTN.addEventListener("click", () => {
    AWFUL_GAME.remove();
})