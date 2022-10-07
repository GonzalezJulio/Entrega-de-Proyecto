import { validarArticuloRepetido } from "./_accionesCarrito.js";


const mostrarArticulos = (productos) => {
    const almacenamientoArticulos = document.getElementById ("producto-contenedor");
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML += `<div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="${producto.img}" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">${producto.desc}</p>
                                <p class="card-text">$ ${producto.precio}</p>
                                <button type="button" class="btn btn-outline-primary" id="boton${producto.id}">Comprar</button>
                            </div>
                        </div>`
        almacenamientoArticulos.appendChild(div)

        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener('click', () => {
            validarArticuloRepetido(producto.id);
            
        })
    });
};

export { mostrarArticulos };