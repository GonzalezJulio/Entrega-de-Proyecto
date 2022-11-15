
import { eliminarArticuloCarrito } from "./_accionesCarrito.js";


//modal para mostrar los productos

const modalContenedor = document.querySelector(".modal-contenedor");
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector(".modal-carrito");

// abrir el modal carrito
abrirCarrito.addEventListener("click", () => {
    modalContenedor.classList.toggle("modal-active")
})
//cerrar el modal carrito
cerrarCarrito.addEventListener("click", () => {
    modalContenedor.classList.remove("modal-active")

})

modalContenedor.addEventListener("click", () => {
    cerrarCarrito.click()
})


//eliminar elementos del modal carrito, con SweetAlert


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

