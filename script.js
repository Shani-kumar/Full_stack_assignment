const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameInput = form.querySelector('#subs-name');
  const emailInput = form.querySelector('#subs-email');

  if (nameInput.value === '') {
    alert('Please enter your name.');
    nameInput.focus();
    return;
  }

  if (emailInput.value === '') {
    alert('Please enter your email address.');
    emailInput.focus();
    return;
  }

  // Submit the form if it is valid.
  form.submit();
});
