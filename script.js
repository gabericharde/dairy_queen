var runButton = document.querySelector('#submitButton');

runButton.addEventListener('click', function() {
  console.log(1);
  var myForm = document.querySelector('form');
  formData = new FormData(myForm);
  console.log(formData);;
});


// Sending form data to double dips API

var request = new XMLHttpRequest();
	method = 'GET';
	url = 'http://private-3d4d82-googlemoviesscraper.apiary-mock.com/movies';

request.open(method, url);

request.onreadystatechange = function () {
  if (this.readyState === true) {
    console.log('Boston', this.near);
    console.log('', this.date);

  }
  if (xmlhttp.status !== 200) {
        return;
    }
  console.log(xmlhttp.responseText);
};

request.send();