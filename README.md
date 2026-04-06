# PracticaCSS-JS
Practica de desarrollo de una página web HTML con CSS y Javascript.

Idea principal: un blog con estilo retro.

El proyecto acutalment ecuenta con 7 directorios:

Html. Engloba el proyecto

Javascript. Agrupa el javascript utilizado

Media. Es donde se ubicará el contenido multimedia, ejemplo: imagenes, videos, musica...

Pages. Las páginas enlazadas al index

Styles. Los css utilizados en las páginas.

CSS
Estilo sencillo y retro. Insipirado en las primeras páginas web estaticas donde todo esta contenido por bloques delimitados. 
Los colores calidos y márrones son la personalidad del blog.

Una fuente de inspiración han sido las páginas de neocities.
Gran parte del tiempo dedicado ha sido al CSS, debido a que me entretengo probando formas propias de presentar el contenido.

JS
Como blog, las funcionalidades en las que me he interesado són el inicio de sesión de un usuario y las publicaciones.
He añadido un pequeño detalle como un texto dinamico que marca la fecha actual.

Detalles que podria añadir en un futuro es que los datos ingresados se guarden de manera local y mantenerlos aunque se recargue la página.

IA
Se ha utilizado IA para varias funciones que desconocia, como en el reloj:
toLocaleDateString();
toLocaleTimeString();
setInterval();

Estas funciones no se han empleado en clase, pero son necesarias para que el reloj vaya marcando la hora.

Empleo de fecth();
Se me ocurrió que seria buena idea que el contenido principal estuviera guardado en otra hoja Html despejando el index.html.
Pero de nuevo es una función que no empleamos en clase y que investigue utilizando la IA.

FileReader();
Queria que el usuario pudiera publicar imagenes, resulta que necesita esta función que transforma la imagen en binario a base64,
para que pueda ser interpretado como contenido src.