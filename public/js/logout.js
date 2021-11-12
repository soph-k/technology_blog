///////////////////// Gloabal Variable /////////////////
const logoutBtn = document.querySelector('#logout-link')

/////////////////////// Function /////////////////////
logout = async () => {
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out');
  }
};

/////////////////// Event Listeners ///////////////////
logoutBtn.addEventListener('click', logout);
