// D) Print the total population of countries using reduce function

const fetchRes = fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
  let totalPopulation = data.reduce((acc,country) => {
    return acc + country.population;
  }, 0);
  console.log("Total population of all countries: "+totalPopulation);
});

// output show on console
// Total population of all countries: 7777721563