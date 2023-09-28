const render = () => {
    const formulario = document.querySelector("#registro");
    const mensaje = document.querySelector("#mensaje");

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const nombre = event.target.nombre.value;
        const apellido = event.target.apellido.value;
        const edad = event.target.edad.value;

        const mensajeTexto = "El nombre de la persona es " + nombre + ", su apellido es " + apellido + " y su edad es " + edad + " años.";

        mensaje.textContent = mensajeTexto;
    });
}

window.onload = render;
