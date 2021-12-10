const postFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#exampleFormControlInput1').value.trim();
  const postContent = document.querySelector('#exampleFormControlTextarea1').value.trim();

  if (title && postContent) {
   
    console.log("new_post")
    const response = await fetch('/api/blogs/post', {
      method: 'POST',
      body: JSON.stringify({ title, postContent }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create new post');
    }
  };
}
const submitButton = document.getElementById('submitBtn')
submitButton.addEventListener('click', postFormHandler)
console.log('connected')
