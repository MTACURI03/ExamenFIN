document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const clave = document.getElementById('clave').value;

    if (email === "mateotacuri@gmail.com" && clave === "123") {
        alert('Inicio de sesión exitoso');
        alert('Bienvenido, ' + email);  
        window.location.href = "clientes.html";
    } else {
        alert('Email o clave incorrectos');
    }
});
