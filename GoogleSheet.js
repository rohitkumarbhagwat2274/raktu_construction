const scriptURL = 'https://script.google.com/macros/s/AKfycbzvmQAOFUjUxnC16PzZYl18wRm16C8bwyW3oNDXX0DleYF8QRjk0O2xKk6PctSnIV5j/exec';
const form = document.getElementById('content-form');

form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (response.ok) {
                console.log("done");
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            if (data) {
                alert("Thank you for connecting Raktu Consturction !!! Your form is submitted successfully.");
                window.location.reload();
            } else {
                console.error('Error!', data.message);
            }
        })
        .catch(error => console.error('Error!', error.message));
});
