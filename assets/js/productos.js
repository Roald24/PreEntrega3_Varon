
// Array de los productos
const productos = [
    { nombre: 'OG Kush', precio: 800 },
    { nombre: 'Wedding Cake', precio: 850 },
    { nombre: 'Afgani', precio: 1000 },
    { nombre: 'Scout Cookies', precio: 900 },
    { nombre: 'Critical', precio: 700 }
];


// Los filtros de los productos
function cambiarVistaProductos() {
    const filtroSeleccion = document.getElementById('filtro-seleccion').value;

    if (filtroSeleccion === 'filtroNombre') {
        const nombreBusqueda = prompt('Ingrese el nombre del producto:');
        if (nombreBusqueda) {
            const productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(nombreBusqueda.toLowerCase()));
            mostrarProductos(productosFiltrados);
        }
    } else if (filtroSeleccion === 'filtroPrecio') {
        const productosOrdenados = productos.slice().sort((a, b) => a.precio - b.precio);
        mostrarProductos(productosOrdenados);
    } else {
        mostrarProductos(productos);
    }
}

// Mostrar los productos con sus imagenes, precios y boton
function mostrarProductos(productosArray) {
    const productosDiv = document.getElementById('productos');
    productosDiv.innerHTML = '';

    productosArray.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.className = 'producto';

        const img = document.createElement('img');
        img.src = `../assets/img/${producto.nombre.toLowerCase().replace(/\s/g, '_')}.jpg`;
        img.alt = producto.nombre;
        divProducto.appendChild(img);

        const pNombre = document.createElement('p');
        pNombre.textContent = `${producto.nombre} - $${producto.precio}`;
        divProducto.appendChild(pNombre);

        const button = document.createElement('button');
        button.textContent = 'Agregar al Carrito';
        button.onclick = () => agregarAlCarrito(producto.nombre, producto.precio);
        divProducto.appendChild(button);

        productosDiv.appendChild(divProducto);
    });
}

// Te muestra los productos
mostrarProductos(productos);



