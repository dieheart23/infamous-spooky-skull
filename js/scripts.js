const form = document.querySelector('#requestForm');

window.addEventListener('DOMContentLoaded', () => {
    const savedName = localStorage.getItem('userName');
    const savedEmail = localStorage.getItem('userEmail');
    const savedWorkshop = localStorage.getItem('userWorkshop');
    
    if (savedName) document.getElementById('name').value = savedName;
    if (savedEmail) document.getElementById('email').value = savedEmail;
    if (savedWorkshop) document.getElementById('workshopSelect').value = savedWorkshop;
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const isValid = typeof validateForm === 'function' ? validateForm() : true;

    if (isValid) {
        localStorage.setItem('userName', document.getElementById('name').value);
        localStorage.setItem('userEmail', document.getElementById('email').value);
        localStorage.setItem('userWorkshop', document.getElementById('workshopSelect').value);
        
        form.reset();
        
        console.log('Form submitted');
    } else {
        console.log('Validation failed');
    }
});