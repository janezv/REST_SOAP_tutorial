console.log("Api Call start")
console.log("***************************")
// Define the API URL
const apiUrl = 'https://restcountries.com/v3.1/all';
// https://www.freecodecamp.org/news/make-api-calls-in-javascript/
// 


// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {

      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {

    // NASLEDNIČ IZ TEGA USTVARI LINK IN const countriesName=data.map(data=> data.name.official)
    console.log(data[10].name.common)
        // Ustvari nov element <h1>
    const heading = document.createElement('h1');

    // Dostop do vrednosti firstName
    heading.textContent = 'Lista držav';

    const countriesName=data.map(data=> data.name.official)
    const ListOfCountries = document.createElement('ul');
    

    //     // // Zanka skozi seznam in dodajanje <li> elementov
    countriesName.forEach(country => {
        const listItem = document.createElement('li'); 


        const link = document.createElement('a');       // Ustvari <a> element
        link.textContent = country;                    // Nastavi besedilo povezave
        link.href = `#${country.toLowerCase()}`;      // Nastavi URL (lahko ga prilagodiš)
        
        listItem.appendChild(link);                   


        ListOfCountries.appendChild(listItem); 
    });
    // Dodaj element <h1> v telo dokumenta
    document.body.appendChild(heading);
    document.body.appendChild(ListOfCountries);


  })
  .catch(error => {
    console.error('Error: Napaka pri API Call');
  });