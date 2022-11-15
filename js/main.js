// Simulador de carrito de compra con productos
// por categoria y opcion de añadir más productos.

// Jarhed Soto Lizama
// Comision 45280



// Clase producto.
class Producto {
    constructor(id, nombre, precio, categoria) {
        this.id = id,
        this.nombre = nombre,
        this.precio = precio,
        this.categoria = categoria
    }
}

// Arrays almacen de objetos.
let carritoCompra = []
let productos = []

// Función principal compra de producto.
function comprarProducto() {
    let categoriaSolicitada = parseInt(prompt("CATEGORÍAS DISPONIBLES:\n1 - Monitores\n2 - Accesorios\n3 - Diseño\n4 - Audio\n5 - Conectividad\n\n" + "Ingrese categoría a desplegar: "))

    while (categoriaSolicitada < 1 || categoriaSolicitada > 5) {
        categoriaSolicitada = parseInt(prompt("CATEGORÍAS DISPONIBLES:\n1 - Monitores\n2 - Accesorios\n3 - Diseño\n4 - Audio\n5 - Conectividad\n\n" + "Ingrese categoría a desplegar:\nLa opción ingresada es inválida, reintente."))
    }

    // Filtrar productos por categoría seleccionada.
    let categoriaFiltrada = []
    switch (true) {
        case categoriaSolicitada == 1:  // Monitores.
            categoriaFiltrada = productos.filter(prod => prod.categoria == "monitores")
            break;

        case categoriaSolicitada == 2:  // Accesorios.
            categoriaFiltrada = productos.filter(prod => prod.categoria == "accesorios")
            break;

        case categoriaSolicitada == 3:  // Diseño.
            categoriaFiltrada = productos.filter(prod => prod.categoria == "diseño")
            break;

        case categoriaSolicitada == 4:  // Audio.
            categoriaFiltrada = productos.filter(prod => prod.categoria == "audio")
            break;

        case categoriaSolicitada == 5:  // Conectividad.
            categoriaFiltrada = productos.filter(prod => prod.categoria == "conectividad")
            break;

        default:
            break;
    }

    // Concatenar productos categoría filtrada.
    let productosFiltrados = ""
    let idProductos = []
    for (let index = 0; index < categoriaFiltrada.length; index++) {
        productosFiltrados += categoriaFiltrada[index].id + " - " + categoriaFiltrada[index].nombre + " / $" + categoriaFiltrada[index].precio + " / Cat: " + categoriaFiltrada[index].categoria.toUpperCase() + "\n"
        idProductos.push(categoriaFiltrada[index].id)
    }

    // Menú seleccionar producto.
    let productoSeleccionado = parseInt(prompt("PRODUCTOS DISPONIBLES:\n" + productosFiltrados + "\n\n" + "Ingrese producto que desea comprar:"))

    while (idProductos.includes(productoSeleccionado) != true) {
        productoSeleccionado = parseInt(prompt("PRODUCTOS DISPONIBLES:\n" + productosFiltrados + "\n\n" + "Ingrese producto que desea comprar:\nLa opción ingresada es inválida, reintente."))
    }

    // Comprar o añadir mas productos.
    let prod = productos.find(x => x.id === productoSeleccionado)
    carritoCompra.push(prod)
    let menuCompra = parseInt(prompt("PRODUCTO AÑADIDO AL CARRO DE COMPRA:\n" + prod.nombre + " $" + prod.precio + "\n\n" + "1 - Comprar otro producto.\n2 - Finalizar compra.\n\n" + "Ingrese la opción deseada:"))

    while (menuCompra < 1 || menuCompra > 2) {
        menuCompra = parseInt(prompt("PRODUCTO AÑADIDO AL CARRO DE COMPRA:\n" + prod.nombre + " $" + prod.precio + "\n\n" + "1 - Comprar otro producto.\n2 - Finalizar compra.\n\n" + "Ingrese la opción deseada:\nLa opción ingresada es inválida, reintente."))
    }

    if (menuCompra == 1) {
        comprarProducto()
    } else {
        finalizarCompra()
    }

}

// Funcion finalizar compra.
function finalizarCompra() {

    // Total compra.
    valorCompra = 0
    productosCarrito = ""
    for (let index = 0; index < carritoCompra.length; index++) {
        valorCompra += parseInt(carritoCompra[index].precio)
        productosCarrito += " - " + carritoCompra[index].nombre + " - $" + carritoCompra[index].precio + " - " + carritoCompra[index].categoria + "\n"
    }
    
    // Productos en carrito.
    alert("PRODUCTOS EN CARRO DE COMPRA:\n\n" + productosCarrito + "\nTOTAL COMPRA: $" + valorCompra)
    alert("Compra completada. Recibirá un e-mail de confirmación.")

}

// Creación de productos y carga en array productos,
productos.push(new Producto(1, "Monitor AOC 27'", 125000, "monitores"))
productos.push(new Producto(2, "Monitor Samsung 32'", 167000, "monitores"))
productos.push(new Producto(3, "Monitor Redragon 32'", 187000, "monitores"))
productos.push(new Producto(4, "Mouse genérico USB", 6500, "accesorios"))
productos.push(new Producto(5, "Teclado genérico USB", 9000, "accesorios"))
productos.push(new Producto(6, "Cámara Web USB 1080p", 19990, "accesorios"))
productos.push(new Producto(7, "Tableta Digitalizadora Easypen", 34990, "diseño"))
productos.push(new Producto(8, "Tableta Digitalizadora Deco Fun", 39990, "diseño"))
productos.push(new Producto(9, "Lapiz Touch para Tablet ", 9990, "diseño"))
productos.push(new Producto(10, "Cable de Red 2mts CAT5", 2990, "conectividad"))
productos.push(new Producto(11, "Cable HDMI 3mts", 6990, "conectividad"))
productos.push(new Producto(12, "Cable DPI 3mts", 10990, "conectividad"))
productos.push(new Producto(13, "Parlante Logitech USB", 15990, "audio"))
productos.push(new Producto(14, "Cable AUX 3.5mm 3mts", 3990, "audio"))
productos.push(new Producto(15, "Micrófono HyperX Quadcast", 29990, "audio"))

// Llamar funcion principal.
comprarProducto()