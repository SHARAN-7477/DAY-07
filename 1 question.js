// day - 07 (ARRAY METHODS)
// question

//a) Get all the countries from the Asia continent /region using the Filter function

const fetchRes = fetch("https://restcountries.com/v3.1/all")
fetchRes.then(res =>
    res.json()).then(d => {
        a = d.filter(counti)
  for (i=0;i<a.length;i++){

       console.log (a[i].name.common)
  }
    })
   function counti(d){
    return d.continents =='Asia'
   };

// output show on console
