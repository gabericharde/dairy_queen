var runButton = document.querySelector('#submitButton');

runButton.addEventListener('click', function(event) {
  event.preventDefault();

  var data = {
  near: document.querySelector("#near").value,
  daysFromNow: document.querySelector("#DaysFromNow").value  
}

var request  = { // can be 'url string' or object: 
  url          : 'http://private-3d4d82-googlemoviesscraper.apiary-mock.com/movies',
  // method    : 'POST' // [optional] (defaults to 'GET') 
  body      : data // [optional] payload data could be <formdata> or {key:val}'s or anything 
  //headers      : {} // [optional] (defaults to '{}' or in case of 'POST': 
                   // {'X-Requested-With':'XMLHttpRequest','Content-Type':'application/x-www-form-urlencoded' } ) 
}

minixhr(request, function (received) { console.log(received) })
console.log(data);
});