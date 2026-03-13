function actualizarReloj(){
    const ahora = new Date();
    const fecha = ahora.toLocaleDateString();
    const hora = ahora.toLocaleTimeString();

    document.getElementById("reloj").textContent = `${fecha} ${hora}`;
}

setInterval(actualizarReloj, 1000);

actualizarReloj();