const form = document.querySelector('.login-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email =form.nextElementSibling.email.value.trim();
    const password = form.nextElementSibling.password.value.trim();
    if (email === '' || password === '') {
        alert('All form fields must be filled in');
        return
    }
    const data = {
        email : email,
        password : password,
    }
    console.log(data);
    form.requestFullscreen();
});
