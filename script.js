var runButton = document.querySelector('#submitButton');

runButton.addEventListener('click', function() {
  console.log(1);
  var myForm = document.querySelector('form');
  formData = new FormData(myForm);
  console.log(formData);;
});

var request = new XMLHttpRequest();

request.open('GET', 'http://private-3d4d82-googlemoviesscraper.apiary-mock.com/movies');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Boston', this.near);
    console.log('', this.date);

  }
};

request.send();