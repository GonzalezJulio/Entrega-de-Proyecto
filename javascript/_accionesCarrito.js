import { actualizarTotalCarrito } from './_actulizarcarrito.js';
import { productos } from './_stock.js';
import { obtenerCarritoStorage } from './storage.js';


let carrito = [];

const validarArticuloRepetido = (productoId) => {
    
    if(localStorage.getItem('carrito')) {
        carrito = obtenerCarritoStorage();
    }
    const productoRepetido = carrito.find (producto => producto.id === productoId);

    if(productoRepetido) {
        productoRepetido.cantidad++;
        const cantidadProducto = document.getElementById(`cantidad${productoRepetido.id}`);
        cantidadProducto.innerText = `cantidad: ${productoRepetido.cantidad}`;
        actualizarTotalCarrito(carrito);
    } else {
        agregarAlCarrito(productoId);
    }

};


const agregarAlCarrito = (productoId) => {
    const contenedor = document.getElementById('carrito-contenedor');
    const producto = productos.find(producto => producto.id === productoId);
    carrito.push(producto);

    const div = document.createElement('div');
    div.classList.add('articuloCarrito');
    div.innerHTML = `<p>${producto.nombre}</p>
                     <p>${producto.precio}</p>
                     <p id=cantidad${producto.id}>${producto.cantidad}</p>
                     <button id=eliminar${producto.id} value='${producto.id}' class='btn wavea-effect waves-light boton-eliminar'>X</button>`;
    contenedor.appendChild(div);
    actualizarTotalCarrito(carrito);
};

const pintarCarrito = (carrito) => {
    const contenedor = document.getElementById('carrito-contenedor');
    contenedor.innerHTML = '';
    carrito.forEach(producto =>{
        const div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML = `<p>${producto.nombre}</p>
        <p>Precio: ${producto.precio}</p>
        <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
        <button id=eliminar${producto.id} value='${producto.id}' class='btn waves-effect waves-ligth boton-eliminar'>X</button>
        `;
        contenedor.appendChild(div);
    });
};


const eliminarProductoCarrito = (productoId) => {
    const carritoStorage = obtenerCarritoStorage();
    const carritoActualizado = carritoStorage.filter(producto => producto.id != productoId);
    actualizarTotalCarrito(carritoActualizado);
    pintarCarrito(carritoActualizado);
}
export { agregarAlCarrito, validarArticuloRepetido, pintarCarrito, eliminarProductoCarrito};