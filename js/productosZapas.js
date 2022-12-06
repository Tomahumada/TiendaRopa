const zapatillas = [
    {
        nombre: 'Nike Airforce One',
        precio: 25000,
        id: 1,
        cantidad: 1,
        img: '../img/zapatillas.webp'

    },
    {
        nombre: 'Nike Air Max 90 LTR',
        precio: 19000,
        id: 2,
        cantidad: 1,
        img: '../img/zapatillas1.webp'
    },
    {
        nombre: 'NIke Air max Intrik',
        precio: 18000,
        id: 3,
        cantidad: 1,
        img: '../img/zapatillas2.webp'
    },
    {
        nombre: 'Nike Quest Five',
        precio: 15000,
        id: 4,
        cantidad: 1,
        img: '../img/zapatillas3.webp'
    },
    {
        nombre: 'Nike W Air Max Up',
        precio: 34000,
        id: 5,
        cantidad: 1,
        img: '../img/zapatillas4.webp'
    },
    {
        nombre: 'Nike Reposto',
        precio: 25000,
        id: 6,
        cantidad: 1,
        img: '../img/zapatillas5.webp'
    },
    {
        nombre: 'Nike Air Zoom Winflo 8',
        precio: 29000,
        id: 7,
        cantidad: 1,
        img: '../img/zapatillas6.webp'
    },
    {
        nombre: 'Nike Stefan Janoski Max GS',
        precio: 22000,
        id: 8,
        cantidad: 1,
        img: '../img/zapatillas7.webp'
    },
    {
        nombre: 'Nike Waffle One',
        precio: 32000,
        id: 9,
        cantidad: 1,
        img: '../img/zapatillas6.webp'
    }

]


const contenedorZapatillas = document.querySelector('#producto-container-zapatillas');
zapatillas.forEach(zapatillas => {
    let cardProductoZapas = document.createElement('div');
    cardProductoZapas.classList.add("col-xl-4", "col-md-6","col-sm-12");


    cardProductoZapas.innerHTML = `<div class="card cardProduct">
                                <div class="card-body">
                                <img src='${zapatillas.img}' alt="" class='card-img-top'>
                                <h5 class="card-title">${zapatillas.nombre}</h5>
                                <p class="card-text">$${zapatillas.precio}</p>
                                <button class="button-add">Agregar</button>
                                </div>
                                </div>`

    contenedorZapatillas.appendChild(cardProductoZapas);
});
