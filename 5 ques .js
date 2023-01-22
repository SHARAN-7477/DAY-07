const fetchRes = fetch("https://restcountries.com/v3.1/all")
fetchRes.then(res =>
    res.json()).then(d => {
        a = d.filter(country => country.currencies)
  for (i=0;i<a.length;i++){
   
       console.log (a[i].currencies.USD)
  }
    })
   function counti(d){
    return d='usd' =='Country which uses US Dollar as currency'
   };