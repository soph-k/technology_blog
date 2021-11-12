/////////////////// Global Variables ///////////////////
const postId = document.querySelector('input[name="post-id"]').value;
const editPost = document.querySelector('#edit-post-form');
const deletePost = document.querySelector('#delete-btn');
const title = document.querySelector('input[name="post-title"]').value;
const body = document.querySelector('textarea[name="post-body"]').value;

/////////////////// Functions ///////////////////
editPost = async (event) => {
  event.preventDefault();
  await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      body
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  document.location.replace('/dashboard');
};

deleteForm = async () => {
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE'
  });
  document.location.replace('/dashboard');
};


/////////////////// Event Listeners ///////////////////
editPost.addEventListener('submit', editPost);
deletePost.addEventListener('click', deletePost);
