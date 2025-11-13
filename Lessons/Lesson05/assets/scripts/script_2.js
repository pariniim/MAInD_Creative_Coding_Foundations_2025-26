const CONTAINER = document.getElementById("container");

fetch('./assets/data/MOCK_DATA.json') 
  .then(response => response.json())

  .then(data => displayData(data)) 
  .catch(error => displayError(error));

function displayData(data){
    console.log(data);

    //const FILTERED = data.filter( (obj) => obj.age >= 50 )
    //const FILTERED_B = data.filter( (obj) => obj.first_name == "Ellissa" )
    const FILTERED_C = data.filter( (obj) => obj.age >= 50 && obj.age < 60 )
    const SUB_FILTER = FILTERED_C.filter( obj => obj.gender == "Female" )

   //sort (for numbers, in this case age)
   // const SORT = SUB_FILTER.sort( (a,b) => a.age - b.age) //to sort the age from lowest to highest. sort() works without using a new variable or constant

   const SORT_NAME = SUB_FILTER.sort( (a,b) => a.first_name.localeCompare(b.first_name))

    for (let person of SORT_NAME) {

        const PERSON = document.createElement("li");
        PERSON.textContent = `${person.first_name} ${person.last_name}, ${person.age}`;

        CONTAINER.appendChild(PERSON);
    }


}

function displayError(error){
    console.log(error);
  }