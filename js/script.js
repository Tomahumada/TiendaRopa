let products = [];
let total = 0;
let salto = '\n';


    const btnAgregar1 = document.querySelector('#button1'),
    btnAgregar2 = document.getElementById('button2'),
    btnAgregar3 = document.getElementById('button3'),
    btnAgregar4 = document.getElementById('button4'),
    btnAgregar5 = document.getElementById('button5'),
    btnAgregar6 = document.getElementById('button6'),
    btnAgregar7 = document.getElementById('button7'),
    btnAgregar8 = document.getElementById('button8'),
    btnAgregar9 = document.getElementById('button9'),
    btnAgregar10 = document.getElementById('button10'),
    btnAgregar11 = document.getElementById('button11'),
    btnAgregar12 = document.getElementById('button12');
    

function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
}

function pay() {
    window.swal.fire({
        title: `Total de $${total} en la compra`,
        html: products.join('<br>') + `<br>presiona continuar si deseas comprar o cancelar si deseas elegir otra cosa`,
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        position: 'top-center',
        backdrop: '#445599bb'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Compra Exitosa',
                text: `Deseas pagar ahora o cuando pases a retirarlas`,
                icon: 'success',
                iconColor: '#00ff00',
                showCancelButton: true,
                confirmButtonText: 'Pagar Ahora',
                cancelButtonText: 'Pagar Despues',
                position: 'top-center',
                backdrop: '#445566aa'
            }).then((result) => {
                if(result.isConfirmed){
                    Swal.fire({
                        title: 'Muchas gracias',
                        text: `haz click en siguente para realizar el pago`,
                        icon: 'success',
                        confirmButtonText: 'OK',
                        position: 'top-center',
                        backdrop: '#445566aa',
                        destination:'https//www.youtube.com'
                    })
                }else{
                    Swal.fire({
                        title: 'Muchas gracias',
                        text: `Cuando te alojes en el complejo podras realizar el pago de tu estadia`,
                        icon: 'success',
                        iconColor: '#00ff00',
                        confirmButtonText: 'OK',
                        position: 'top-center',
                        backdrop: '#445566aa'
                    })
                }
            })
        }
    })
}


btnAgregar1.addEventListener('onclick', add('Air Force One', 18000))