/* function greet(person1, person2) {
    //In this case, person (i.e. what's in the round brackets) is a PARAMETER of the FUNCTION. 
    //this part is a BLOCK OF CODE
    console.log("Hello there, "+ person1 + " and " + person2 + "!");
}

greet("Elia", "Sarah");
//Elia and Sarah are ARGUMENTS of the function. 

//In this example: If you declare a variable before the function, but then add another variable to the function in the round brackets, the latter will be used as variable for the function due to the scope concept.
const person1 = Isabel; 
const person2 = Chiara; 

function greet(person1, person2) {
    console.log("Hello there, "+ person1 + " and " + person2 + "!");
}
//In the case above, person1 and person2 won't be Isabel & Chiara, because you assign new vairables to the function in the round brackets. 
*/

function fullName(name, surname) {
    return "Name: " + name + ", Surname: " + surname;
}

console.log(fullName("Marco", "Lurati"));

function printInfo(name, surname, course) {
    console.log(fullName(name, surname) + ", course: " + course);
}

function printGrades(name, surname, grade) {
    console.log(fullName(name, surname) + ", grade: " + grade);
}

//There can be MULTIDIMENSIONAL ARRAYS: in that case you fetch the data in this way. e.g. y [4][2] --> y[4] returns the fifth element of an array, that in this case happens to be another array and since you just want to fetch the third element, you add [2].