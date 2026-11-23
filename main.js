
let opcion;
let continuar = true;

let stockVainichips = 6;
let stockChocochips = 15;
let stockRedVelvet = 4;
let stockOreo = 10;
let stockLimon = 2;
let stockNutella = 10;
let stockChipa = 40;
let stockFrutilla = 5;
let stockBalcarce = 7;

const productosEnStock = ["Vainichips","Chocochips","Red Velvet","Oreo","Limon","Nutella","Chipa"];

productosEnStock.push("Balcarce");
productosEnStock.unshift("Frutilla");


productosEnStock.push("Brownie");
const sinStock = productosEnStock.pop();
console.log("Producto retirado: " + sinStock);

const buscado = prompt("¿Qué sabor querés consultar?");

if (productosEnStock.includes(buscado)) {
    const posicion = productosEnStock.indexOf(buscado);
    console.log(buscado + " está disponible en la posición " + posicion);
} else {
    console.log("Ese sabor no está disponible.");
}

productosEnStock.splice(2, 1, "Vainichips");

function calcularTotal(precio, cantidad) {
    let total = precio * cantidad;
    return total;
}

function pedirDato(mensaje) {
    let dato = parseInt(prompt(mensaje));
    return dato;
}

const mostrarTotal = (total) => {
    alert("El total de tu compra es: $" + total);
    console.log("Total de la compra: $" + total);
};

const hayStock = (cantidad, stock) => cantidad <= stock;


function listarStock(lista) {
    console.log("--- Stock actual ---");

    for (const producto of lista) {
        console.log(`Producto: ${producto}`);
    }

    console.log(`Total: ${lista.length} productos`);
}

listarStock(productosEnStock);


while (continuar) {

    let menu = "Elegí un sabor:\n";

    for (let i = 0; i < productosEnStock.length; i++) {
        menu += (i + 1) + ". " + productosEnStock[i] + "\n";
    }

    opcion = pedirDato(menu);

    let stock;
    let precio;

    switch (opcion) {
        case 1:
            precio = 4500;
            stock = stockVainichips;
            alert("El precio es $" + precio);
            break;

        case 2:
            precio = 5000;
            stock = stockChocochips;
            alert("El precio es $" + precio);
            break;

        case 3:
            precio = 4500;
            stock = stockRedVelvet;
            alert("El precio es $" + precio);
            break;

        case 4:
            precio = 4200;
            stock = stockOreo;
            alert("El precio es $" + precio);
            break;

        case 5:
            precio = 4200;
            stock = stockLimon;
            alert("El precio es $" + precio);
            break;

        case 6:
            precio = 6000;
            stock = stockNutella;
            alert("El precio es $" + precio);
            break;

        case 7:
            precio = 500;
            stock = stockChipa;
            alert("El precio es $" + precio);
            break;

        case 8:
            precio = 3000;
            stock = stockFrutilla;
            alert("El precio es $" + precio);
            break;

        case 9:
            precio = 5000;
            stock = stockBalcarce;
            alert("El precio es $" + precio);
            break;

        default:
            alert("Opción no válida");
            continue;
    }

    const cantidad = pedirDato("¿Cuántas cookies deseas comprar?");

    if (cantidad <= 0 || isNaN(cantidad)) {
        alert("Ingresá una cantidad válida.");
        continue;
    }

    if (!hayStock(cantidad, stock)) {
        alert("¡Lo sentimos! No tenemos suficiente stock. Disponemos de " + stock + " unidades.");
        continue;
    }

    const total = calcularTotal(precio, cantidad);
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
                console.log("Stock restante de Red Velvet: " + stockRedVelvet);
                break;

            case 4:
                stockOreo -= cantidad;
                console.log("Stock restante de Oreo: " + stockOreo);
                break;

            case 5:
                stockLimon -= cantidad;
                console.log("Stock restante de Limon: " + stockLimon);
                break;

            case 6:
                stockNutella -= cantidad;
                console.log("Stock restante de Nutella: " + stockNutella);
                break;

            case 7:
                stockChipa -= cantidad;
                console.log("Stock restante de Chipa: " + stockChipa);
                break;

            case 8:
                stockFrutilla -= cantidad;
                console.log("Stock restante de Frutilla: " + stockFrutilla);
                break;

            case 9:
                stockBalcarce -= cantidad;
                console.log("Stock restante de Balcarce: " + stockBalcarce);
                break;
        }

        alert("¡Gracias por tu compra! Te esperamos en Mesa Dulce.");
        continuar = false;

    } else {
        alert("Podés volver a elegir cuando quieras.");
    }
}


