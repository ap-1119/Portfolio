document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let errors = [];
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let message = document.getElementById('message').value;

  // Validate name
  if (name.trim() === '') {
    errors.push('Name is mandatory.');
  }

  // Validate email
  if (!email.includes('.com')) {
    errors.push('Email must include .com.');
  }

  /// Validate phone
  let phonePattern = /^\d{10}$/;
  if (phone && !phonePattern.test(phone)) {
    errors.push('Mobile number must be 10 digits.');
  }

  // Validate message
  if (message.length > 256) {
    errors.push('Message cannot exceed 256 characters.');
  }

  // Display errors or submit form
  if (errors.length > 0) {
    document.getElementById('errorMessages').innerHTML = errors.join('<br>');
  } else {
    document.getElementById('errorMessages').innerHTML = 'Form submitted successfully!';
    // Here you can actually submit the form or do other actions
    // document.getElementById('contactForm').submit();
  }
});
