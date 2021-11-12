///////////////////// Gloabal Variable /////////////////
const title = document.querySelector('input[name="post-title"]').value;
const body = document.querySelector('textarea[name="post-body"]').value; 
const newPost = document.querySelector('#new-post-form')

///////////////////// Function /////////////////
newForm = async (event) => {
  event.preventDefault();
  await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  document.location.replace('/dashboard');
};


///////////////////// Event Listener /////////////////
newPost.addEventListener('submit', newForm);
