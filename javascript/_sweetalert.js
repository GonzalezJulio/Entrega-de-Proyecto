const btn = document.getElementeByName('boton-eliminar');

btn.addEventListener('click', () => {
    Swal.fire({
        title: 'Esta seguro?',
        text: 'Va a eliminar el producto!',
        icon: 'warning',
        showCancelButton: true,
        corfirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
    });
});