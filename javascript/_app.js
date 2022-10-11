import { validarArticuloRepetido } from "./_accionesCarrito.js";


const mostrarArticulos = (productos) => {
    const almacenamientoArticulos = document.getElementById ("producto-contenedor");
    
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