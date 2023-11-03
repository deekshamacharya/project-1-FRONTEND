
document.getElementById('12').addEventListener('click', function (){
    var form = document.getElementById('13');
    var isValid = form.checkValidity();

    if (isValid) {
       
        window.location.href = 'ticket.html';
    } else {
       
        alert('Please fill out all required fields.');
    }
});
