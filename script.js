const productos = [
    { nombre: "buzo", precio: 300 },
    { nombre: "remera", precio: 150 },
    { nombre: "jean", precio: 500 },
    { nombre: "zapatillas", precio: 600 },
    { nombre: "reloj", precio: 200 }
];

let carrito = []

let seleccion = prompt("Hola, desea comprar algun producto?")
while (seleccion != "si" && "no") {
    alert("Porfavor, ingresa si o no")
    seleccion = prompt("Hola desea comprar algo? si o no")
}

if (seleccion === "si") {
    alert("a continuacion nuestra lista de productos")
    let todoslosproductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$")
    alert(todoslosproductos.join(" - "))
} else if (seleccion == "no") {
    alert("Gracias por su compra")
};

while (seleccion != "no") {
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0

    if (producto == "buzo" || producto == "remera" || producto == "jean" || producto == "zapatillas" || producto == "reloj") {
        switch (producto) {
            case "buzo":
                precio = 900;
                break;
            case "remera":
                precio = 250;
                break;
            case "jean":
                precio = 150;
                break;
            case "zapatillas":
                precio = 600;
                break;
            case "reloj":
                precio = 200;
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt("cuantas unidades quiere llevar?"))

        carrito.push({ producto, unidades, precio })
    } else {
        alert("no tenemos ese producto")
    }

    seleccion = prompt("desea seguir comprando?")
    while (seleccion == "no") {
        alert("Gracias por su compra")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto${carritoFinal.unidades * carritoFinal.precio} `)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar por su compra es: ${total} `)