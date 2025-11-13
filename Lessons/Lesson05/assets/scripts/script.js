/*
console.log("ciao");

const HOBBIES = ["judo", "boxe", "cycling"] //This is an Array

console.log(HOBBIES.length);
console.log(HOBBIES[0]);

//This ia an OBJECT:
const PERSON = {
    name: "Sasha",
    surname: "Bravo",
    hobbies: HOBBIES
}

console.log(PERSON);

console.log(PERSON.name);

console.log(PERSON.hobbies[0]); //To access the - in this case first - element within an array within an object

console.log(PERSON.hobbies);

//With this code you can print each hobby by using a for loop. 
// hobby  is a temporary variable, which can be used later.
for (hobby of PERSON.hobbies) {
    console.log(hobby)
}

const CONTAINER = document.getElementById("container");

//Loop to show the list of hobbies on a web page
for (hobby of PERSON.hobbies) {
    const ITEM = document.createElement("li");

    ITEM.innerHTML = hobby;
    // You might also use ITEM.textContent = hobby;
    // The DIFFERENCE between .innerHTML and .textContent is that with .innerHTML you can also include other HTML elements, while you can't do that with .textContent 

    CONTAINER.appendChild(ITEM);
}
*/

const CONTAINER = document.getElementById("container");

fetch('./assets/data/data.json') // get the data from an external source
  .then(response => response.json()) // parse/convert the data in JavaScript format - response is a temporary variable

  .then(data => displayData(data)) // in order to display the data in the console
  .catch(error => displayError(error)); // display an error if the data cannot be loaded

  function displayData(data) {
    console.log(data);

    let counter = 0;

    for (hobby of data.hobbies) {

        counter += 1;
        const ITEM = document.createElement("li");

        ITEM.textContent = `${counter}: ${hobby}`;
        CONTAINER.appendChild(ITEM);
    }
  }

  function displayError(error) {
    console.log(error);
  }