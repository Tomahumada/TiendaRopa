const productos = [
    {
        nombre: 'Nike Airforce One',
        precio: 20000,
        id: 1,
        cantidad: 1,
        img: '../img/zapatillas.webp'

    },
    {
        nombre: 'Nike Air Max 90 LTR',
        precio: 20000,
        id: 2,
        cantidad: 1
    },
    {
        nombre: 'NIke Air max Intrik',
        precio: 20000,
        id: 3,
        cantidad: 1
    },
    {
        nombre: 'Nike Quesr',
        precio: 20000,
        id: 3,
        cantidad: 1
    },
    {
        nombre: 'Nike W Air Max Up',
        precio: 20000,
        id: 3,
        cantidad: 1
    },
    {
        nombre: 'Nike Reposto',
        precio: 20000,
        id: 3,
        cantidad: 1
    },
    {
        nombre: 'Nike Air Zoom Winflo 8',
        precio: 20000,
        id: 3,
        cantidad: 1
    }

]

const contenedor = document.querySelector('#producto-container');

productos.forEach(producto => {
    let cardProducto = document.createElement('div');


    cardProducto.innerHTML = `<div class="card cardProduct">
                                <div class="card-body">
                                ${producto.img}
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">$${producto.precio}</p>
                                <button class="button-add" onclick="add(${producto.nombre}, $${producto.precio})">Agregar</button>
                                </div>
                                </div>`


    contenedor.appendChild(cardProducto);
});