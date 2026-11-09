let opcion 
let stockVainichips = 6
let stockChocochips = 15
let stockRedVelvet = 4
let continuar = true;
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
    if (cantidad > stock) {
        alert("¡Lo sentimos! No tenemos suficiente stock. Disponemos de " + stock + " unidades.");
        continue;
    }

    if (cantidad <= 0 || isNaN(cantidad)) {
        alert("Ingresá una cantidad válida.");
        continue;
    }

    let total = precio * cantidad;

    alert("El total de tu compra es: $" + total);

    let pago = confirm("¿Deseás continuar con el pago?");

    if (pago) {
        alert("¡Gracias por tu compra! Te esperamos en Mesa Dulce.");
        continuar = false;
    } else {
        alert("Podés volver a elegir cuando quieras.");
    }
}



