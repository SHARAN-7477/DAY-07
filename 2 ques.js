// b) Get all the countries with a population of less than 2 lakhs using Filter function

const fetchRes = fetch("https://restcountries.com/v3.1/all")
fetchRes.then(res =>
    res.json()).then(d => {
        a = d.filter(country => country.population < 200000)
        console.log(a)
  for (i=0;i<a.length;i++){

       console.log (a[i].name.common)
  }
    })
   function Map(d){
    return d.maps =='population'
   };
