import { actualizarTotalCarrito } from './_actualizarCarrito.js';
import { obtenerArticulos } from './_obtenerProductos.js';
import { obtenerCarritoStorage } from './storage.js';

const comprarCarrito = document.getElementById('comprar-carrito');

let carrito = [];
 

if (comprarCarrito) {
    comprarCarrito.addEventListener('click', () => {
    carrito.length = [];
    pintarCarrito();
    
});
}



const validarArticuloRepetido = (productoId) => {
    
    if(localStorage.getItem('carrito')) {
        carrito = obtenerCarritoStorage();
    }
    const articuloRepetido = carrito.find(producto => producto.id === productoId);

    if(articuloRepetido) {
        articuloRepetido.cantidad++;
        const cantidadArticulo = document.getElementById(`cantidad${articuloRepetido.id}`);
        cantidadArticulo.innerText = `cantidad: ${articuloRepetido.cantidad}`;
        actualizarTotalCarrito(carrito);
    } else {
        agregarAlCarrito(productoId);
    }

};


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


const eliminarArticuloCarrito = (productoId) => {
    const carritoStorage = obtenerCarritoStorage();
    const carritoActualizado = carritoStorage.filter(producto => producto.id != productoId);
    
    actualizarTotalCarrito(carritoActualizado);
    pintarCarrito(carritoActualizado);
}



export { agregarAlCarrito, validarArticuloRepetido, pintarCarrito, eliminarArticuloCarrito};