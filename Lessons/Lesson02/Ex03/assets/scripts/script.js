/* let greetings = "ciao"
let number = 666
let numberA = 5
let numberB = 2
let myNumber = "1"

let greetNumber = greetings + number 

let sum = numberA + numberB 
let sum2 = numberA + myNumber
let sum3 = numberA * numberB
let sum4 = numberA / numberB

console.log(greetings)
console.log(greetings)
console.log(greetings)
console.log(greetNumber)
console.log(sum)
console.log(sum2)
console.log(sum4)
 */
/*
let number = 0

number += 1
this code above is like writing number = number + 1

let number2 = 2

number2 += 1
number2 += 1
number2 += 1

console.log(number)
console.log(number2)
*/

/*user */
const BUTTON = document.getElementById("special-button");
const BOX = document.getElementById("result");
const INPUT = document.getElementById("userInput")
/*The code above showa how you can target an HTML element by its id.*/

let number = 0;

BUTTON.addEventListener("click", () => {
    /*number += 2;

    BOX.innerHTML = number;*/
    let userInput = INPUT.value;
    console.log(userInput);

    let boxInput = document.createElement("p");
    boxInput.textContent = userInput;

    BOX.appendChild(boxInput);
})
/*Event listeners (like in the code above) are used to detect a user action like e.g. when they click on something.
.innerHTML allows you to show content inside an HTML element*/