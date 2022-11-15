import { validarArticuloRepetido } from "./_accionesCarrito.js";
import { obtenerArticulos } from "./_obtenerProductos.js";
// Esta funcion sirve para mostrar los articulos en el html.
const mostrarArticulos = async () => {
    
    const almacenamientoArticulos = document.getElementById ("producto-contenedor");
    
    const productos = await obtenerArticulos();
    
    
    almacenamientoArticulos.addEventListener('click', () =>{
        Toastify({
            text: 'Agrego un producto al Carrito',
            duration: 3000,
            
        }).showToast();
    })
    
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML += `<div class="card-image">
                            <img src=${producto.img}>
                            <span class="card1-title">${producto.nombre}</span>
                            <a class="btn-floating halfway-fab wabes-effect waves-light red" id=boton${producto.id}><i class="material-icons">add_shopping_cart</i></a>
                        </div>
                        <div class="card-content">
                            <p class="pepe">${producto.desc}</p>
                            <p class="pepe">${producto.precio}</p>
                        </div>`
        almacenamientoArticulos.appendChild(div)
        

        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener('click', () => {
            validarArticuloRepetido(producto.id);
            
        })

    });
};



export { mostrarArticulos }; 

