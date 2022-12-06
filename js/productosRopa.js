const remeras = [
    {
        nombre: 'remera Nike Entrenamiento',
        precio: 20000,
        id: 10,
        cantidad: 1,
        img: '../img/remera7.webp'
    },
    {
        nombre: 'short de entrenamiento',
        precio: 20000,
        id: 11,
        cantidad: 1,
        img: '../img/pantalon7.webp'
    }, {
        nombre: 'Remera nike ciclismo',
        precio: 20000,
        id: 12,
        cantidad: 1,
        img: '../img/remera8.webp'
    },
    {
        nombre: 'Calza nike ciclismo',
        precio: 20000,
        id: 13,
        cantidad: 1,
        img: '../img/pantalon8.webp'
    },
    {
        nombre: 'Calza nike ciclismo',
        precio: 20000,
        id: 13,
        cantidad: 1,
        img: '../img/pantalon2.webp'
    },
    {
        nombre: 'Calza nike ciclismo',
        precio: 20000,
        id: 13,
        cantidad: 1,
        img: '../img/remera3.webp'
    },
    {
        nombre: 'Calza nike ciclismo',
        precio: 20000,
        id: 13,
        cantidad: 1,
        img: '../img/pantalon.webp'
    },
    {
        nombre: 'Calza nike ciclismo',
        precio: 20000,
        id: 13,
        cantidad: 1,
        img: '../img/remera.webp'
    },
    {
        nombre: 'Calza nike ciclismo',
        precio: 20000,
        id: 13,
        cantidad: 1,
        img: '../img/pantalon1.webp'
    },
    {
        nombre: 'Calza nike ciclismo',
        precio: 20000,
        id: 13,
        cantidad: 1,
        img: '../img/remera2.webp'
    },
    {
        nombre: 'Calza nike ciclismo',
        precio: 20000,
        id: 13,
        cantidad: 1,
        img: '../img/pantalon4.webp'
    },
    {
        nombre: 'Calza nike ciclismo',
        precio: 20000,
        id: 13,
        cantidad: 1,
        img: '../img/remera4.webp'
    }, {
        nombre: 'Calza nike ciclismo',
        precio: 20000,
        id: 13,
        cantidad: 1,
        img: '../img/remera5.webp'
    },
    {
        nombre: 'Calza nike ciclismo',
        precio: 20000,
        id: 13,
        cantidad: 1,
        img: '../img/pantalon6.webp'
    },
    {
        nombre: 'Calza nike ciclismo',
        precio: 20000,
        id: 13,
        cantidad: 1,
        img: '../img/pantalon5.webp'
    },
    {
        nombre: 'Calza nike ciclismo',
        precio: 20000,
        id: 13,
        cantidad: 1,
        img: '../img/remera6.webp'
    },
]

const contenedorRopa = document.querySelector('#producto-container-ropa');
remeras.forEach(producto => {
    let cardProductoRopa = document.createElement('div');
    cardProductoRopa.classList.add("col-xl-3", "col-md-6", "col-sm-12");

    cardProductoRopa.innerHTML = `<div class="card cardProduct">
                                <div class="card-body">
                                <img src='${producto.img}' alt="" class='card-img-top'>
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">$${producto.precio}</p>
                                <button id="boton${producto.id}" class="btn btn-primary"> Agregar al Carrito </button>
                                </div>
                                </div>`
                                

    contenedorRopa.appendChild(cardProductoRopa);
});

const boton = document.getElementById(`boton${producto.id}`);
boton.addEventListener('click', () => {
  agregarAlCarrito(producto.id);
});


const carrito = [];

const agregarAlCarrito = (id) => {
    const producto = remeras.find((producto) => producto.id === id);
    const productoEnCarrito = carrito.find((producto) => producto.id === id);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push(producto);
    }
    actualizarCarrito();
};


const contenedorCarrito = document.getElementById('contenedorCarrito');
const verCarrito = document.getElementById('verCarrito');

verCarrito.addEventListener('click', actualizarCarrito);

function actualizarCarrito() {
    let aux = '';
    carrito.forEach((producto) => {
        aux += `
            <div class="card col-xl-3 col-md-6 col-sm-12">
                <img src="img/${producto.id}.jpg" class="card-img-top img-fluid py-3">
                <div class="card-body">
                    <h3 class="card-title"> ${producto.nombre} </h3>
                    <p class="card-text"> ${producto.precio} </p>
                    <button onClick = "eliminarDelCarrito(${producto.id})" class="btn btn-primary"> Eliminar del Carrito </button>
                </div>
            </div>
            `;
    });

    contenedorCarrito.innerHTML = aux;
    calcularTotalCompra();
}


const eliminarDelCarrito = (id) => {
    const producto = carrito.find((producto) => producto.id === id);
    carrito.splice(carrito.indexOf(producto), 1);
    actualizarCarrito();
};

const vaciarCarrito = document.getElementById('vaciarCarrito');
vaciarCarrito.addEventListener('click', () => {
    carrito.splice(0, carrito.length);
    actualizarCarrito();
});

const totalCompra = document.getElementById('totalCompra');

const calcularTotalCompra = () => {
    let total = 0;
    carrito.forEach((producto) => {
        total += producto.precio * producto.cantidad;
    });
    totalCompra.innerHTML = total;
};

