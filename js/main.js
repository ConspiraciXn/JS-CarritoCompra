// Array almacen de objetos PRODUCTO.
let productos = [{"id": 1, "nombre":" Monitor AOC 27'", "precio": 125000, "categoria": "monitores", "enlaceIMG": "https://http2.mlstatic.com/D_NQ_NP_764964-MLA49136969152_022022-V.webp"},
	{"id": 2, "nombre": "Monitor Samsung 32'", "precio": 167000, "categoria": "monitores", "enlaceIMG": "https://http2.mlstatic.com/D_NQ_NP_946077-MLA45731349396_042021-V.webp"},
	{"id": 3, "nombre": "Monitor Redragon 32'", "precio": 187000, "categoria": "monitores", "enlaceIMG": "https://http2.mlstatic.com/D_NQ_NP_922295-MLC50434128174_062022-V.webp"},
	{"id": 4, "nombre": "Mouse genérico USB", "precio": 6500, "categoria": "accesorios", "enlaceIMG": "https://http2.mlstatic.com/D_NQ_NP_787275-MLA48881823896_012022-O.webp"},
	{"id": 5, "nombre": "Teclado genérico USB", "precio": 9000, "categoria": "accesorios", "enlaceIMG": "https://http2.mlstatic.com/D_NQ_NP_768244-MLA45316064540_032021-O.webp"},
	{"id": 6, "nombre": "Cámara Web USB 1080p", "precio": 19990, "categoria": "accesorios", "enlaceIMG": "https://http2.mlstatic.com/D_NQ_NP_949440-MLC48043584087_102021-O.webp"},
	{"id": 7, "nombre": "Tableta Digitalizadora Easypen", "precio": 34990, "categoria": "diseño", "enlaceIMG": "https://http2.mlstatic.com/D_NQ_NP_825488-MLA45376527675_032021-O.webp"},
	{"id": 8, "nombre": "Tableta Digitalizadora Deco Fun", "precio": 39990, "categoria": "diseño", "enlaceIMG": "https://http2.mlstatic.com/D_NQ_NP_629181-MLA46390941428_062021-O.webp"},
	{"id": 9, "nombre": "Lapiz Touch para Tablet ", "precio": 9990, "categoria": "diseño", "enlaceIMG": "https://http2.mlstatic.com/D_NQ_NP_608363-CBT50507245316_062022-V.webp"},
	{"id": 10, "nombre": "Cable de Red 2mts CAT5", "precio": 2990, "categoria": "conectividad", "enlaceIMG": "https://http2.mlstatic.com/D_NQ_NP_700761-MLC47921711112_102021-V.webp"},
	{"id": 11, "nombre": "Cable HDMI 3mts", "precio": 6990, "categoria": "conectividad", "enlaceIMG": "https://http2.mlstatic.com/D_NQ_NP_627493-MLC50332312427_062022-V.webp"},
	{"id": 12, "nombre": "Cable DP 3mts", "precio": 10990, "categoria": "conectividad", "enlaceIMG": "https://http2.mlstatic.com/D_NQ_NP_853685-MLC46084177940_052021-V.webp"},
	{"id": 13, "nombre": "Parlante Logitech USB", "precio": 15990, "categoria": "audio", "enlaceIMG": "https://http2.mlstatic.com/D_NQ_NP_706754-MLA47543087027_092021-V.webp"},
	{"id": 14, "nombre": "Cable AUX 3.5mm 3mts", "precio": 3990, "categoria": "audio", "enlaceIMG": "https://http2.mlstatic.com/D_NQ_NP_953145-MLC50836638669_072022-V.webp"},
	{"id": 15, "nombre": "Micrófono HyperX Quadcast", "precio": 29990, "categoria": "audio", "enlaceIMG": "https://http2.mlstatic.com/D_NQ_NP_814996-MLA51900927372_102022-V.webp"}
]


// Eventos listener en botones navbar.
let divFiltros = document.getElementById("filaFiltros")
let divProductos = document.getElementById("filaProductos")
let divCarrito = document.getElementById("carritoCompra")
let divDetallesCarrito = document.getElementById("detallesCarritoCompra")

let btnProductos = document.getElementById("navProductos")
let btnCarrito = document.getElementById("navCarrito")

// Evento onClick() btn productos.
btnProductos.onclick = () => {
	btnProductos.classList.add('active');
	btnCarrito.classList.remove('active');
	divFiltros.classList.remove('d-none');
	divProductos.classList.remove('d-none');
	divCarrito.classList.add('d-none');
}

// Evento onClick() btn carrito.
btnCarrito.onclick = () => {
	actualizarCarrito()
	btnProductos.classList.remove('active');
	btnCarrito.classList.add('active');
	divFiltros.classList.add('d-none');
	divProductos.classList.add('d-none');
	divCarrito.classList.remove('d-none');
}


// Carga de filtros en HTML.
let filaFiltros = document.getElementById("filaFiltros")

let filtrosProductos = document.createElement("div")
filtrosProductos.innerHTML = `<div class="row mt-3">
	<div class="col-12 text-center justify-content-center">
		<div class="dropdown">
		<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
			Filtrar categorías:
		</button>
		<ul class="dropdown-menu">
			<li><a class="dropdown-item" href="#" onClick="filtrar('monitores')" id="btnMonitores">Monitores</a></li>
			<li><a class="dropdown-item" href="#" onClick="filtrar('accesorios')" id="btnAccesorios">Accesorios</a></li>
			<li><a class="dropdown-item" href="#" onClick="filtrar('diseno')" id="btnDiseno">Diseño</a></li>
			<li><a class="dropdown-item" href="#" onClick="filtrar('conectividad')" id="btnConectiv">Conectividad</a></li>
			<li><a class="dropdown-item" href="#" onClick="filtrar('audio')" id="btnAudio">Audio</a></li>
			<li><hr class="dropdown-divider"></li>
			<li><a class="dropdown-item text-danger" href="#" onClick="filtrar('quitarFiltros')" id="btnQuitarFiltros">Quitar filtros</a></li>
		</ul>
		</div>
	</div>
</div>`

filaFiltros.append(filtrosProductos)


// Carga de productos en HTML.
function cargarProductos(arrayProductos) {
	let filaProductos = document.getElementById("filaProductos")
	filaProductos.innerHTML = " "

	for (const p of arrayProductos) {
		let cardProducto = document.createElement("div")
		cardProducto.innerHTML = `<div class="col mt-3 mb-3 ms-1 me-1">
			<div class="thumb-wrapper">
				<span class="wish-icon"><i class="fa fa-heart-o" onClick="toggleHeart(this)"></i></span>
				<div class="img-box">
					<img src="${p.enlaceIMG}" class="img-fluid" alt="">									
				</div>
				<div class="thumb-content">
					<h4>${p.nombre}</h4>									
					<div class="star-rating">
						<ul class="list-inline">
								<li class="list-inline-item"><i class="fa fa-star"></i></li>
								<li class="list-inline-item"><i class="fa fa-star"></i></li>
								<li class="list-inline-item"><i class="fa fa-star"></i></li>
								<li class="list-inline-item"><i class="fa fa-star"></i></li>
								<li class="list-inline-item"><i class="fa fa-star"></i></li>
						</ul>
					</div>
					<p class="item-price"><b>$${p.precio}</b></p>
					<button onclick="agregarCarrito(${p.id})" class="botonCompra">Añadir al carrito</button>
				</div>
			</div>
		</div>`

		filaProductos.append(cardProducto)
	}
}


// Carga de carrito en HTML.
let contenidoCarrito = document.createElement("div")
contenidoCarrito.innerHTML = `<div class="col-12 p-5 bg-white rounded shadow-sm mb-5">
	<div class="table-responsive">
		<table class="table">

			<thead>
				<tr>
					<th scope="col" class="border-0 bg-light">
						<div class="p-2 px-3 text-uppercase">Producto</div>
					</th>
					<th scope="col" class="border-0 bg-light">
						<div class="py-2 text-uppercase">Precio</div>
					</th>
					<th scope="col" class="border-0 bg-light">
						<div class="py-2 text-uppercase">Cantidad</div>
					</th>
					<th scope="col" class="border-0 bg-light">
						<div class="py-2 text-uppercase">Remover</div>
					</th>
				</tr>
			</thead>

			<tbody id="bodyTablaProductos">
			</tbody>

		</table>
	</div>
</div>

<div class="col-lg-6" id="detallesCarrito">
</div>`

divCarrito.append(contenidoCarrito)


// Funcion actualizar carrito.
function actualizarCarrito() {

	// Limpiar carrito actual.
	let divBodyTablaProd = document.getElementById("bodyTablaProductos")
	let divDetallesCarrito = document.getElementById("detallesCarrito")

	divBodyTablaProd.innerHTML = ' '
	divDetallesCarrito.innerHTML = ' '


	if (localStorage.getItem("carritoCompra") != null) {
						
		// Insertar productos en carrito.
		let carritoExistente = JSON.parse(localStorage.getItem("carritoCompra"))
						
		for (const prod of carritoExistente) {
			let filaProducto = document.createElement("tr")
			filaProducto.innerHTML = `<tr>
				<th scope="row" class="border-0">
					<div class="p-2">
						<div class="ml-3 d-inline-block align-middle">
							<h5 class="mb-0"> <a href="#" class="text-dark d-inline-block align-middle">${prod.nombre}</a></h5><span class="text-muted font-weight-normal font-italic d-block">Categoria: ${prod.categoria}</span>
						</div>
					</div>
				</th>
				<td class="border-0 align-middle"><strong>$${prod.total}</strong></td>
					<td class="border-0 align-middle"><strong>${prod.cantidad}</strong></td>
					<td class="border-0 align-middle"><a href="#" onclick="eliminarProdCarrito(${prod.id})" class="text-dark"><i class="fa fa-trash"></i></a>
				</td>
			</tr>`

			divBodyTablaProd.append(filaProducto)
		}

		// Cargar detalles carrito.
		let valorCarrito = parseInt(JSON.parse(localStorage.getItem("valorTotal")))
		let valorDespacho = parseInt(valorCarrito * 0.05)
		let valorImpuestos = parseInt(valorCarrito * 0.19)
		let total = valorCarrito + valorImpuestos + valorDespacho

		let detallesCarrito = document.createElement("div")
		detallesCarrito.innerHTML = `<div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Resumen orden</div>
			<div class="p-4">
				<p class="font-italic mb-4">Costos de envíos y otros cargos son calculados en base a los valores enterados.</p>
				<ul class="list-unstyled mb-4">
					<li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Subtotal</strong><strong>$${valorCarrito}</strong></li>
					<li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Despacho</strong><strong>$${valorDespacho}</strong></li>
					<li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Impuestos</strong><strong>$${valorImpuestos}</strong></li>
					<li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Total</strong>
							<h5 class="font-weight-bold">$${total}</h5>
					</li>
				</ul><a href="#" class="btn btn-dark rounded-pill py-2 btn-block" onclick="finalizarCompra()">Confirmar compra</a>
		</div>`

		divDetallesCarrito.append(detallesCarrito)

	}

}


// Función agregar prod a carrito.
function agregarCarrito(id) {

	let producto = productos.find(p => p.id === id)

	// Si carrito no existe.
	if (localStorage.getItem("carritoCompra") === null) {

		let valorTotal = producto["precio"]
		producto["cantidad"] = 1
		producto["total"] = producto["precio"]

		let productosCarrito = [producto]
		let productosCarritoJSON = JSON.stringify(productosCarrito)

		localStorage.setItem("carritoCompra", productosCarritoJSON)
		localStorage.setItem("valorTotal", valorTotal)

	} else {

		// Si carrito ya existe.
		let productosCarrito = []
		let existenciaProducto = false
		let carritoExistente = JSON.parse(localStorage.getItem("carritoCompra"))
		let valorCarritoExiste = JSON.parse(localStorage.getItem("valorTotal"))
		let valorTotal = parseInt(valorCarritoExiste)

		for (const prod of carritoExistente) {
				
			// Si el producto ya existía se incrementa cantidad en 1.
			if (prod.id == id) {
				existenciaProducto = true
				valorTotal += prod["precio"]
				prod["total"] += prod["precio"]
				prod["cantidad"] += 1
			}

			productosCarrito.push(prod)

		}

		// Si el producto no existía se añade.
		if (!existenciaProducto) {
			producto["cantidad"] = 1
			productosCarrito.push(producto)
			producto["total"] = producto["precio"]
			valorTotal += producto["total"]
		}

		productosCarritoJSON = JSON.stringify(productosCarrito)
		localStorage.setItem("carritoCompra", productosCarritoJSON)
		localStorage.setItem("valorTotal", valorTotal)
	}

	desplegarAlerta("¡Producto agregado al carrito!")
}


// Funcion quitar prod de carrito.
function eliminarProdCarrito(id) {

	let productosCarrito = []
	let carritoExistente = JSON.parse(localStorage.getItem("carritoCompra"))
	let valorCarritoExiste = JSON.parse(localStorage.getItem("valorTotal"))
	let valorTotal = parseInt(valorCarritoExiste)

	for (const prod of carritoExistente) {
			
		if (prod.id != id) {
			productosCarrito.push(prod)

		} else {

			valorTotal -= prod["precio"]
			prod["total"] -= prod["precio"]
			let nuevaCantidad = prod["cantidad"] - 1
			
			if (nuevaCantidad > 0) {
				prod["cantidad"] -= 1
				productosCarrito.push(prod)
			}

		}
	}

	productosCarritoJSON = JSON.stringify(productosCarrito)
	localStorage.setItem("carritoCompra", productosCarritoJSON)
	localStorage.setItem("valorTotal", valorTotal)

	desplegarAlerta("¡Producto eliminado del carrito!")
	actualizarCarrito()
}


// Funcion toasts.
function desplegarAlerta(textoAlerta) {
	Toastify({
		text: textoAlerta,
		duration: 3000,
		style: {
			background: '#198754'
		}
	}).showToast();
}


// Funcion filtrar por categoría.
function filtrar(filtro) {

	let prodFiltrados = []

	switch (true) {
		case filtro == "monitores":
			prodFiltrados = productos.filter(prod => prod.categoria == "monitores")
			break;

		case filtro == "accesorios":
			prodFiltrados = productos.filter(prod => prod.categoria == "accesorios")
			break;

		case filtro == "diseno":
			prodFiltrados = productos.filter(prod => prod.categoria == "diseño")
			break;

		case filtro == "conectividad":
			prodFiltrados = productos.filter(prod => prod.categoria == "conectividad")
			break;

		case filtro == "audio":
			prodFiltrados = productos.filter(prod => prod.categoria == "audio")
			break;

		case filtro == "quitarFiltros":
			prodFiltrados = productos
			break;

	}

	cargarProductos(prodFiltrados)

}


// Funcion toggle heart.
function toggleHeart(heart) {
	heart.classList.toggle('fa-heart-o')
	heart.classList.toggle('fa-heart')
}


// Funcion finalizar compra
function finalizarCompra() {
	
	localStorage.clear()
	actualizarCarrito()

	Toastify({
		text: "Compra finalizada.",
		duration: 3000,
		style: {
			background: '#DC3545'
		}
	}).showToast();
}


// Cargar flujo principal.
cargarProductos(productos)