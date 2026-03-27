// función para actualizar el reloj
function actualizarReloj(){
    const ahora = new Date();
    const fecha = ahora.toLocaleDateString();
    const hora = ahora.toLocaleTimeString();

    document.getElementById("reloj").textContent = `${fecha} ${hora}`;
}

// Repite la función consecutivamente 
setInterval(actualizarReloj, 1000);

actualizarReloj();

// Añade contenido a la sección principal
fetch("Pages/contenidoArticulos.html")
.then(res => res.text())
.then(html => {
    document.getElementById("articulos").innerHTML = html;
})

// const form = document.forms["loginForm"];
const form = document.getElementById("form_loggin");
const mensaje = document.querySelector("#mensaje");
// debugger;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    debugger;
    const usuario = form.user.value;
    const contraseña = form.pass.value;

    mensaje.textContent += 'Bienvenido, ' + usuario + '.'
});