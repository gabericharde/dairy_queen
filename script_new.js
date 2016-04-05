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

// fetch tutorial below!

var url = ('http://locache.herokuapp.com/double-dips?location=' + data.near + '&days_from_now=' + data.daysFromNow + '&max_wait_mins=' + data.maxWaitTime + '&max_overlap_mins=' + data.dipOverlap);
fetch(url);

// Processing status

var processStatus = function (response) {
    // status "0" to handle local files fetching (e.g. Cordova/Phonegap etc.)
    if (response.status === 200 || response.status === 0) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
};

fetch(url)
    .then(processStatus)
    // the following code added for example only
    .then()
    .catch();

// Parse JSON

var parseJson = function (response) {
    return response.json();
};

fetch(url)
    .then(parseJson);

// Setting options

fetch(url, {
    method: 'get',
    headers: {
        'Accept': 'application/json'
    }
});

//Adding waiting time

var MAX_WAITING_TIME = 5000;// in ms

var timeoutId = setTimeout(function () {
    fetch.reject(new Error('Load timeout for resource: ' + fetch.url));// reject on timeout
}, MAX_WAITING_TIME);

return fetch.promise// getting clear promise from wrapped
    .then(function (response) {
        clearTimeout(timeoutId);
        return response;
    });
  });




