const guardarCarritoStorage = (carrito) => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
;}

const obtenerCarritoStorage = () => {
        const carritoStorage = JSON.parse(localStorage.getItem('carrito')) || [];
        return carritoStorage;
};



export { guardarCarritoStorage, obtenerCarritoStorage,};