

$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
      event.preventDefault();
  
     
      var name = $('#exampleFormControlInput2').val();
      var email = $('#exampleFormControlInput1').val();
      var message = $('#exampleFormControlTextarea1').val();
  
      if (!name || !email || !message) {
          alert('Please fill out all fields.');
          return;
      }
  
      var formData = {
          name: name,
          email: email,
          message: message
      };
  
      var formDataString = JSON.stringify(formData);
  
  
      setTimeout(function() {
        window.location.href = 'index.html';
    }, 3000); 
      console.log(formData)
    });
  });
  