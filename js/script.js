let products = [];
let total = 0;
let salto = '\n';

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