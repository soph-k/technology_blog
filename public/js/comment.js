///////////////////// Gloabal Variable /////////////////
const newForm = document.querySelector('#new-comment-form');
const postId = document.querySelector('input[name="post-id"]').value;
const body = document.querySelector('textarea[name="comment-body"]').value;

/////////////////////// Function /////////////////////
commentForm = async (event) =>{
  event.preventDefault();
  if (body) {
    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        postId,
        body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    document.location.reload();
  }
};

/////////////////// Event Listeners ///////////////////
newForm.addEventListener('submit', commentForm);
