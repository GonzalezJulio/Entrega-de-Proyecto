const guardarCarritoStorage = (carritoDeCompras) => {
    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras));
    
;}

const obtenerCarritoStorage = () => {
        const carritoStorage = JSON.parse(localStorage.getItem('carrito'));
        return carritoStorage;
};

/* const borrarCarritoStorage = () => {
    const carritoStorage = JSON.remove(localStorage.removeItem('carrito'));
    return carritoStorage;
} */

export { guardarCarritoStorage, obtenerCarritoStorage, borrarCarritoStorage};