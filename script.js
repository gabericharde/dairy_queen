var runButton = document.querySelector('#submitButton');

runButton.addEventListener('click', function(event) {
  event.preventDefault();

  // give warning for empty location & days from fields

function checkTextField(field) {
    if (field.value == '') {
        document.getElementById('#alertHere').innerHTML = "<h3>" + "Location & Days from now fields cannot be empty!" + "</h3>";
    }
    else {
        document.getElementById('#alertHere').innerHTML = "<h2>" + "Looks good! Calculating your double dips!" + "</h2>";
    }
}

  var data = {
  near: document.querySelector("#near").value,
  daysFromNow: document.querySelector("#daysFromNow").value,
  maxWaitTime: document.querySelector("#maxWaitTime").value,
  dipOverlap: document.querySelector("#dipOverlap").value

}

var request  = { // can be 'url string' or object:
  url          : ('http://double-dipper.herokuapp.com/double-dips?location=' + data.near + '&days_from_now=' + data.daysFromNow + '&max_wait_mins=' + data.maxWaitTime + '&max_overlap_mins=' + data.dipOverlap),
  // method    : 'POST' // [optional] (defaults to 'GET') 
  body      : data // [optional] payload data could be <formdata> or {key:val}'s or anything 
  //headers      : {} // [optional] (defaults to '{}' or in case of 'POST': 
                   // {'X-Requested-With':'XMLHttpRequest','Content-Type':'application/x-www-form-urlencoded' } ) 
}

minixhr(request, function (received) { console.log(received) })
console.log(data);
});