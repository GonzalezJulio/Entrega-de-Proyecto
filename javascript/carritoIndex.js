const carritoArticulos = []

const carritoCompras = (productoId) => {

    const contenedorCarrito = document.getElementById ('carrito-contenedor');

    const articulosCarrito = () => {
        let producto = productos.find(producto => producto.id == productoId);
        carritoArticulos.push(producto);

        producto.cantidad = 1;

        let div = document.createElement ('div')
        div.classList.add('articuloEnCarrito')
        div.innerHTML = `<p>${producto.nombre}</p>
                         <p>Precio:$ ${producto.precio}</p>
                         <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                         <button id="eliminar${producto.id}" class="boton-eliminar" ><i class="fa-solid fa-trash-can"></i></button>`;
                         
        contenedorCarrito.appendChild(div)
    }
    articulosCarrito()
}
