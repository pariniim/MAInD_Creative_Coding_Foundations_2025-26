/*Code for section A*/
const CHANGE_TO_SALMON_BTN = document.getElementById("light-salmon");
const CHANGE_TO_TURQUOISE_BTN = document.getElementById("turquoise");
const CHANGE_TO_VIOLET_BTN = document.getElementById("violet");
const CHANGE_TO_GREY_BTN = document.getElementById("grey");

const FIRST_SECTION = document.getElementById("section-one");

CHANGE_TO_SALMON_BTN.addEventListener("click", () => {
    FIRST_SECTION.style.backgroundColor = "lightsalmon";
})

CHANGE_TO_TURQUOISE_BTN.addEventListener("click", () => {
    FIRST_SECTION.style.backgroundColor = "turquoise";
})

CHANGE_TO_VIOLET_BTN.addEventListener("click", () => {
    FIRST_SECTION.style.backgroundColor = "violet";
})

CHANGE_TO_GREY_BTN.addEventListener("click", () => {
    FIRST_SECTION.style.backgroundColor = "grey";
})

/*Code for section B*/
const CHANGE_TO_VERT_ALIGN_BTN = document.getElementById("change-to-vertical-btn");
const CHANGE_TO_HORIZ_ALIGN_BTN = document.getElementById("change-to-horizontal-btn");

const SECOND_SECTION_CHANGE = document.getElementById("alignment-change");

CHANGE_TO_VERT_ALIGN_BTN.addEventListener("click", () => {
    SECOND_SECTION_CHANGE.style.flexDirection = "column";
    SECOND_SECTION_CHANGE.style.justifyContent = "flex-start";
})    

CHANGE_TO_HORIZ_ALIGN_BTN.addEventListener("click", () => {
    SECOND_SECTION_CHANGE.style.flexDirection = "row";
    SECOND_SECTION_CHANGE.style.justifyContent = "center";
})    


/*Code for section C*/
const REMOVE_LAST_ELEMENT = document.getElementById("remove-element-btn");

const ELEMENT_FIVE = document.getElementById("last-element");

REMOVE_LAST_ELEMENT.addEventListener("click", () => {
    ELEMENT_FIVE.remove();
})