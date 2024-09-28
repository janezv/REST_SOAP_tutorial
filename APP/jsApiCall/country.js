console.log("Api Call start")
console.log("***************************")
// Define the API URL
const apiUrl = 'https://restcountries.com/v3.1/name/slovenia';



// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
        const head1 = document.createElement('h1');
        const paragraph = document.createElement('p');

        // Nastavi vsebino elementa <p>
        head1.textContent='Napaka v url naslovu'
        paragraph.textContent = 'Na url naslovu se ni moglo pridobit podatke';

        // Dodaj element <p> v telo dokumenta
        document.body.appendChild(head1);
        document.body.appendChild(paragraph);
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {

        // Ustvari nov element <p>
    const head1 = document.createElement('h1');
    const paragraph = document.createElement('h2');

    // Nastavi vsebino elementa <p>
    head1.textContent= data[0].name.common
    paragraph.textContent = data[0].name.official;

    // Dodaj element <p> v telo dokumenta
    document.body.appendChild(head1);
    document.body.appendChild(paragraph);

    const propertyList = document.createElement('ul');
    const items = [data[0].capital[0], data[0].cca2, data[0].languages.slv, data[0].latlng[0],data[0].latlng[1]];

        // Zanka skozi seznam in dodajanje <li> elementov
        items.forEach(item => {
            const listItem = document.createElement('li'); // Ustvari nov <li> element
            listItem.textContent = item;                  // Nastavi vsebino <li>
            propertyList.appendChild(listItem);          // Dodaj <li> element v <ul>
        });

    // Dodaj <ul> element v telo dokumenta
    document.body.appendChild(propertyList);

    console.log(data[0].name);
    // console.log(data[0].name.common);
    // console.log(data[0].name.official);
    // console.log(data[0].capital[0]);
    // console.log(data[0].cca2);
    // console.log(data[0].languages.slv);
    // console.log(data[0].latlng[0]);
    // console.log(data[0].latlng[1]);
    //outputElement.textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    console.error('Error:', error);
  });