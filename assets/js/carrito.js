// Variables del carrito
const carrito = [];
let total = 0;

// Aregar elementos al carrito
function agregarAlCarrito(nombre, precio) {
    const producto = { nombre, precio };
    carrito.push(producto);
    total += precio;
    actualizarCarrito();
}

// Vaciar el carrito
function vaciarCarrito() {
    carrito.length = 0;
    total = 0;
    actualizarCarrito();
}

// Actualizar el carrito, agregar, eliminar y precio total
function actualizarCarrito() {
    const carritoLista = document.getElementById('carrito-lista');
    const precioTotal = document.getElementById('precio-total');

    carritoLista.innerHTML = '';
    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - Precio: $${producto.precio}`;
        carritoLista.appendChild(li);
    });

    precioTotal.textContent = `Total: $${total}`;
}