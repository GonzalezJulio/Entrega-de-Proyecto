// improtaciones de funciones 
import { actualizarTotalCarrito } from './_actualizarCarrito.js';
import { obtenerArticulos } from './_obtenerProductos.js';
import { obtenerCarritoStorage } from './storage.js';

// llamado de id de HTML para generar una const 
const vaciarCarrito = document.querySelector("#comprar-carrito");
let carrito = [];
// funciones de vaciar carrito
vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    pintarCarrito(actualizarTotalCarrito(carrito));
    
    
})



// funcion para verificar que el carrito sume lo productos repetidos
function validarArticuloRepetido(productoId) {

    if (localStorage.getItem('carrito')) {
        carrito = obtenerCarritoStorage();
    }
    const articuloRepetido = carrito.find(producto => producto.id === productoId);

    if (articuloRepetido) {
        articuloRepetido.cantidad++;
        const cantidadArticulo = document.getElementById(`cantidad${articuloRepetido.id}`);
        cantidadArticulo.innerText = `cantidad: ${articuloRepetido.cantidad}`;
        actualizarTotalCarrito(carrito);
    } else {
        agregarAlCarrito(productoId);
    }

}

// funcion para agregar los productos
const agregarAlCarrito = async (productoId) => {
    const contenedor = document.getElementById('carrito-contenedor');
    const productos = await obtenerArticulos();
    const producto = productos.find(producto => producto.id === productoId);
    carrito.push(producto);

    const div = document.createElement('div');
    div.classList.add('articuloCarrito');
    div.innerHTML = `<p class="pepe">${producto.nombre}</p>
    <p class="pepe">Precio: ${producto.precio}</p>
    <p id=cantidad${producto.id} class="pepe">Cantidad: ${producto.cantidad}</p>
    <button id=eliminar${producto.id} value='${producto.id}' class='btn waves-effect waves-ligth boton-eliminar'>X</button>`;
    contenedor.appendChild(div);
    actualizarTotalCarrito(carrito);
};
// funcion de como aparecen los productos en el modal
const pintarCarrito = (carrito) => {
    const contenedor = document.getElementById('carrito-contenedor');
    
    contenedor.innerHTML = '';
    
    carrito.forEach(producto =>{
        const div = document.createElement('div');
        div.classList.add('articuloCarrito');
        div.innerHTML = `<p class="pepe">${producto.nombre}</p>
                        <p class="pepe">Precio: ${producto.precio}</p>
                        <p id=cantidad${producto.id} class="pepe">Cantidad: ${producto.cantidad}</p>
                        <button id=eliminar${producto.id} value='${producto.id}' class='btn waves-effect waves-ligth boton-eliminar'>X</button>
        `;
        contenedor.appendChild(div);
    });
};

// para eliminar los articulos en el modal
const eliminarArticuloCarrito = (productoId) => {
    const carritoStorage = obtenerCarritoStorage();
    const carritoActualizado = carritoStorage.filter(producto => producto.id != productoId);
    actualizarTotalCarrito(carritoActualizado);
    pintarCarrito(carritoActualizado);
};






export { agregarAlCarrito, validarArticuloRepetido, pintarCarrito, eliminarArticuloCarrito };




