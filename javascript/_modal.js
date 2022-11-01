
import { ejecutarCompra, eliminarArticuloCarrito } from "./_accionesCarrito.js";


const modalContenedor = document.querySelector(".modal-contenedor");
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector(".modal-carrito");
const comprar = document.getElementById(".compra-realizada");



abrirCarrito.addEventListener("click", () => {
    modalContenedor.classList.toggle("modal-active")
})

cerrarCarrito.addEventListener("click", () => {
    modalContenedor.classList.remove("modal-active")

})

modalContenedor.addEventListener("click", () => {
    cerrarCarrito.click()
})

comprar.addEventListener("submit", () => {
    comprar.submit()
    if (e.target.classList.contains('compra-realizada')) {
        Swal.fire({
            title: 'ud desea',
            text: 'Finalizar su compra?',
            icon: 'warning',
            showCancelButton: true,
            corfirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                ejecutarCompra(e.target.value)
                Swal.fire(
                    'Su compra',
                    'ha sido reliazda con exito',
                    'success',
                )
            }
        });
    };
});

modalCarrito.addEventListener("click", (e) => {
    e.stopPropagation();

    if (e.target.classList.contains('boton-eliminar')) {
        Swal.fire({
            title: 'Esta seguro?',
            text: 'Va a eliminar el producto!',
            icon: 'warning',
            showCancelButton: true,
            corfirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarArticuloCarrito(e.target.value)
                Swal.fire(
                    'Eliminado!',
                    'El Producto ha sido eliminado.',
                    'success'
                )
            }
        });
        
    };
});

