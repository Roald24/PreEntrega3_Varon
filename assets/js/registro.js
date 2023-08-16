document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("formulario");
    const usuariosDiv = document.getElementById("usuarios");

    registroForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const contrasena = document.getElementById("contrasena").value;

        const usuario = {
            nombre: nombre,
            email: email,
            contrasena: contrasena
        };

        // Obtener datos existentes del localStorage
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        // Agregar el nuevo usuario
        usuarios.push(usuario);

        // Actualizar datos en el localStorage
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Gracias por registrarse :D");

        // Limpiar el formulario
        registroForm.reset();

        // Actualizar la lista de usuarios
        actualizarListaUsuarios(usuarios);
    });

    // Función para actualizar la lista de usuarios
    function actualizarListaUsuarios(usuarios) {
        usuariosDiv.innerHTML = "";

        usuarios.forEach(function (usuario) {
            const nombre_y_mail = document.createElement("p");
            nombre_y_mail.textContent = `${usuario.nombre} ${usuario.email}`;
            usuariosDiv.appendChild(nombre_y_mail);
        });
    }
});

