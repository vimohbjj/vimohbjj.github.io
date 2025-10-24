window.addEventListener("load", inicio);

function inicio() {

}

function solicitarRegistro(event) {
    event.preventDefault(); 
    const response =  fetch("http://localhost:8000/api/noAprobado", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "name": event.target.nombre.value,
            "email": event.target.email.value,
            "password": event.target.password.value,
            "password_confirmation": event.target.password_confirmation.value,
            "lastname": event.target.apellido.value
        })
    });
    console.log(response);
    if(response.ok === true){
        alert("Ingreso exitoso");
    }
}

