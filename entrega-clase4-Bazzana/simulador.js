let totalCompra = alert(`El total de tu compra es de $3500`)
let precio = 3500;

function compra () {
    let cuotas = Number(prompt(`¿En cuántas cuotas los querés abonar?
Tené en cuenta que si lo abonás en más de 3 cuotas, se agregará un recargo del 5% al valor total`));

    let precioCuota= precio/cuotas;
    
    if (cuotas > 3) {
        let recargo = Math.round((precioCuota + 1*5/100)*100) /100;
        alert(`Si lo abonás en ${cuotas} cuotas, el valor de cada cuota será de $${recargo}`)
}
}

compra()
