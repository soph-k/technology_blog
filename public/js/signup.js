///////////////////// Gloabal Variable /////////////////
const usernameEl = document.querySelector('#username-input-signup');
const passwordEl = document.querySelector('#password-input-signup');
const singupBtn = document.querySelector('#signup-form')


///////////////////// Function /////////////////
signup = async (event) => {
  event.preventDefault();
  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to sign up');
  }
};

///////////////////// Event Listeners /////////////////
singupBtn.addEventListener('submit', signupFormHandler);
