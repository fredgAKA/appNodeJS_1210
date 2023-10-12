//promise
document.getElementById('sendButton').addEventListener('click', function() {
    const nameValue = document.getElementById('nameInput').value;
 
    fetch('/greet', {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: nameValue }),
     })
     
    .then(response => response.text())
    .then(data => {
       document.getElementById('greeting').innerText = data;
    });
 });
 