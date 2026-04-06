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

// Artículos de la sección principal
fetch("Pages/contenidoArticulos.html")
.then(res => res.text())
.then(html => {
    document.getElementById("articulos").innerHTML = html;
})

// const form = document.forms["loginForm"];
const form = document.getElementById("form_loggin");
const mensaje = document.querySelector("#mensaje");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const usuario = form.user.value;
    const contraseña = form.pass.value;

    mensaje.textContent = 'Bienvenido, ' + usuario + '.';
});

//Publicaciones
    const formPublic = document.getElementById("form_public");

    formPublic.addEventListener("submit", (e) =>{
        e.preventDefault();
        const titulo = formPublic.titulo.value;
        const cuerpo = formPublic.cuerpo.value;
        const imagen = formPublic.imagen.files[0];

        if (!titulo || !cuerpo || !imagen){
            alert("Por favor rellene titulo, cuerpo y imagen al publicar")
            return
        }

        const reader = new FileReader();
            reader.onload = function(e) {
                const src = e.target.result;

                const article = document.createElement("article");

                article.innerHTML = `
                        <div id="contenido">
                            <div>
                                <h3>${titulo}</h3>
                            </div>
                            <div id="contenido_texto">
                                <p>${cuerpo}</p>
                            </div>
                        </div>

                        <div>
                            <img id="img_articulo" src="${src}">
                        </div>
                `;

                articulos.appendChild(article);
                formPublic.reset();
            };

            if (imagen) {
                reader.readAsDataURL(imagen);
            }

    });
