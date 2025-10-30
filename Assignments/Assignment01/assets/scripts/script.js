/*Code for section A*/
const CHANGETOSALMONBTN = document.getElementById("light-salmon");
const CHANGETOTURQUOISEBTN = document.getElementById("turquoise");
const CHANGETOVIOLETBTN = document.getElementById("violet");
const CHANGETOGREYBTN = document.getElementById("grey");

const FIRSTSECTION = document.getElementById("section-one");

CHANGETOSALMONBTN.addEventListener("click", () => {
    FIRSTSECTION.style.backgroundColor = "lightsalmon";
})

CHANGETOTURQUOISEBTN.addEventListener("click", () => {
    FIRSTSECTION.style.backgroundColor = "turquoise";
})

CHANGETOVIOLETBTN.addEventListener("click", () => {
    FIRSTSECTION.style.backgroundColor = "violet";
})

CHANGETOGREYBTN.addEventListener("click", () => {
    FIRSTSECTION.style.backgroundColor = "grey";
})

/*Code for section B*/
const CHANGETOVERTALIGNBTN = document.getElementById("change-to-horizontal-btn");

const SECONDSECTIONCHANGE = document.getElementsByClassName("element-area");

CHANGETOVERTALIGNBTN.addEventListener("click", () => {
    SECONDSECTIONCHANGE.style.flexDirection = "column";
})    

/*Code for section C*/
const REMOVELASTELEMENT = document.getElementById("remove-element-btn");

const ELEMENTFIVE = document.getElementById("last-element");

REMOVELASTELEMENT.addEventListener("click", () => {
    ELEMENTFIVE.remove();
})