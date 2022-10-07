import { mostrarArticulos } from "./_app.js";
import { pintarCarrito } from "./_accionesCarrito.js";
import { actulizarTotalesCarrito } from "./_actulizarcarrito.js";
import { productos } from "./_stock.js";
import { obtenerCarritoStorage } from "./storage.js";


document.addEventListener('DOMContentLoaded', () => {
    mostrarArticulos (productos);

    if (localStorage.getItem('carrito')) {
        const carrito = obtenerCarritoStorage();
        pintarCarrito(carrito);
        actulizarTotalesCarrito(carrito);
    };
});