document.getElementById('weightForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;
  var email = document.getElementById('email').value;
  var weight = document.getElementById('weight').value;

  var alertMessage = "Hi " + name + ", you are " + age + " years old. Your weight is " + weight + " lbs. Your body is capable of amazing transformations, keep pushing forward. We will keep in touch with you via email.";

  // Display alert message
  window.alert(alertMessage);

  // You can add code here to send the data to a server or perform other actions

  // Clear form fields after submission
  document.getElementById('name').value = '';
  document.getElementById('age').value = '';
  document.getElementById('email').value = '';
  document.getElementById('weight').value = '';
});





var feedbackForm = document.getElementById('feedbackForm');


feedbackForm.addEventListener('submit', function(event) {
    
    event.preventDefault();

    
    alert("Hello,we appreciate your feedback and take your suggestions seriously. We will use your input to improve our services.");
});


window.alert(alertMessage);

