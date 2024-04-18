function submitForm(event){
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('api/user', {
        method: 'POST' ,
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then(response =>{
        if(response){
            alert('Login successful!');
            window.location.href = '/appointment.html';
        }else{
            alert('Login failed. Please try again')
        }
}