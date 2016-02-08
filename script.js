var runButton = document.querySelector('#submitButton');

runButton.addEventListener('click', function() {
  console.log(1);
  var myForm = document.querySelector('form');
  formData = new FormData(myForm);
  console.log(formData);;
});
