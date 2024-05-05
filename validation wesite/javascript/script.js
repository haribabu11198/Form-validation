function validateForm() {
    //get from inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    //reset error messages
    document.getElementById('nameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';

    //validate name
    if (name ===''){
        document.getElementById('nameError').innerHTML = 'Name is Required';
        return false; //prevent form submission
    }

    //validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerHTML = 'invalid email format';
        return false; //prevent form submission    
    }
    //if validation passes, the form will be submitted
    alert('Form submitted Successfully');
    return true;
}

