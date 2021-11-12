///////////////////// Gloabal Variable /////////////////
const loginBtn = document.querySelector('#login-form')
const usernameEl = document.querySelector('#username-input-login');
const passwordEl = document.querySelector('#password-input-login');

///////////////////// Function /////////////////
loginForm = async (event) => {
  event.preventDefault();
  const response = await fetch('/api/user/login', {
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
    alert('Failed to login');
  }
};


/////////////////// Event Listeners ///////////////////
loginBtn.addEventListener('submit', loginForm);
