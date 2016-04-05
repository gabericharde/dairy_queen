var runButton = document.querySelector('#submitButton');

runButton.addEventListener('click', function(event) {
    event.preventDefault();

    var data = {
        near: document.querySelector("#near").value,
        daysFromNow: document.querySelector("#daysFromNow").value,
        maxWaitTime: document.querySelector("#maxWaitTime").value,
        dipOverlap: document.querySelector("#dipOverlap").value

    }

    var request = { // can be 'url string' or object:
        url: ('https://double-dipper.herokuapp.com/double-dips?location=' + data.near + '&days_from_now=' + data.daysFromNow + '&max_wait_mins=' + data.maxWaitTime + '&max_overlap_mins=' + data.dipOverlap),
        // method    : 'POST' // [optional] (defaults to 'GET') 
        body: data // [optional] payload data could be <formdata> or {key:val}'s or anything 
            //headers      : {} // [optional] (defaults to '{}' or in case of 'POST': 
            // {'X-Requested-With':'XMLHttpRequest','Content-Type':'application/x-www-form-urlencoded' } ) 
    }

    $('#submitButton').click(function() {
        $.ajax({
            url: request.url,
            success: function(result) {
                $("#results").html(result);
            }
        });
    });
});