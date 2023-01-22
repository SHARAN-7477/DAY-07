// C) Print the following details name, capital, flag using forEach function

const fetchRes = fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    data.forEach(function(country){
    console.log("Name: "+country.name+", Capital: "+country.capital+", Flag: "+country.flag);
  });
});

// output show on console
