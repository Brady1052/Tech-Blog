const postFormHandler = async (event) => {
  event.preventDefault();

  const postTitle = document.querySelector('#exampleFormControlInput1').value.trim();
  const postBody = document.querySelector('#exampleFormControlTextarea1').value.trim();

  if (postTitle && postBody) {
   
    console.log("new_post")
    const response = await fetch('/post', {
      method: 'POST',
      body: JSON.stringify({ postTitle, postBody }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create new post');
    }
  };
}

async function newFormHandler(event) {
  event.preventDefault();
}