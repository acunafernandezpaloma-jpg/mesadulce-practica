let opcion 
let stockVainichips = 6
let stockChocochips = 15
let stockRedVelvet = 4
let continuar = true;


function hayStock(cantidad, stock) {
    if (cantidad <= stock) {
        return true;
    } else {
        return false;
    }
}

function calcularTotal(precio, cantidad) {
    let total = precio * cantidad;
    return total;
}

const mostrarTotal = (total) => {
    alert("El total de tu compra es: $" + total);
    console.log("Total de la compra: $" + total);
};
while(continuar){
    opcion = parseInt(prompt("Menu\nElegi un sabor del 1 al 3:\n1.Vainichips\n2.Chocochips\n3.Red velvet."))
    let stock;
    let precio;
    switch(opcion){
        case 1:
            precio=4500;
            stock=stockVainichips;    
            alert("El precio es $" +precio);
            break;
        case 2:
            precio=5000;
            stock=stockChocochips;
            alert("El precio es $"+precio);
            break;
        case 3:
            precio=4500;
            stock=stockRedVelvet;
            alert("El precio es $"+precio);
            break;
        default:
            alert("Opcion no valida");
            continue;
    }

let cantidad = parseInt(prompt("¿Cuántas cookies deseas comprar?"));
    if (cantidad <= 0 || isNaN(cantidad)) {
    alert("Ingresá una cantidad válida.");
    continue;
}

    if (!hayStock(cantidad, stock)) {
    alert("¡Lo sentimos! No tenemos suficiente stock. Disponemos de " + stock + " unidades.");
    continue;
}

    let total = calcularTotal(precio, cantidad);
    mostrarTotal(total);
    let pago = confirm("¿Deseás continuar con el pago?");

    if (pago) {
    switch (opcion) {
        case 1:
            stockVainichips -= cantidad;
            console.log("Stock restante de Vainichips: " + stockVainichips);
            break;
        case 2:
            stockChocochips -= cantidad;
            console.log("Stock restante de Chocochips: " + stockChocochips);
            break;
        case 3:
            stockRedVelvet -= cantidad;
            console.log("Stock restante de Red velvet: " + stockRedVelvet);
            break;
    }

    alert("¡Gracias por tu compra! Te esperamos en Mesa Dulce.");
    continuar = false;

} else {
    alert("Podés volver a elegir cuando quieras.");
}
}


