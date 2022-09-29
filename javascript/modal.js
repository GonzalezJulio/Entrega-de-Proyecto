const modalContenedor = document.querySelector('.modal-conteiner');
const abrirCarrito = document.getElementById('open');
const cerrarCarrito = document.getElementById('cerrar');
const modalCarrito = document.querySelector('.modal-carrito');

abrirCarrito.addEventListener("click", () => {
    modalContenedor.classList.toggle(".modal-active")
});

cerrarCarrito.addEventListener("click", () => {
    modalContenedor.classList.remove(".modal-active")

});

modalContenedor.addEventListener("click", () => {
    cerrarCarrito.click()
});

modalCarrito.addEventListener("click", (e) => {
    e.stopPropagation()
});