import { mostrarArticulos } from "./_app.js";
import { pintarCarrito } from "./_accionesCarrito.js";
import { actualizarTotalCarrito } from "./_actualizarCarrito.js";
import { obtenerCarritoStorage } from "./storage.js";




document.addEventListener('DOMContentLoaded', () => {
    mostrarArticulos();

    if (localStorage.getItem('carrito')) {
        const carrito = obtenerCarritoStorage();
        pintarCarrito(carrito);
         actualizarTotalCarrito(carrito);
    }
});
