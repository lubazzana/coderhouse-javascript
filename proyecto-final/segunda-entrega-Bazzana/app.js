const form = document.getElementById('form');
const usuario = document.getElementById('name');
const email = document.getElementById('email');
const personas = document.getElementById('cantidad');
const fecha = document.getElementById('fecha');
const otraInfo = document.getElementById('info-extra');



form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	//remover espacios en blanco
	const usuarioValue = usuario.value.trim();
	const emailValue = email.value.trim();
	const personasValue = personas.value.trim();
	const fechaValue = fecha.value.trim();
    // const otraInfoValue = otraInfo.value.trim();

	if(usuarioValue === '') {
		setError(usuario, 'Ingrese un nombre de usuario');
	} else {
		setSuccess(usuario);
	}

	if(emailValue === '') {
		setError(email, 'Ingrese un email');
	} else {
		setSuccess(email);
	}

	if(personasValue === '') {
        setError(personas, 'Ingrese la cantidad de personas');
    } else {
        setSuccess(personas);
	}

    if(fechaValue === '') {
        setError(fecha, 'Ingrese una fecha');
	} else {
        setSuccess(fecha);
	}
}

function setError(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}



class Producto {
    constructor (id, nombre, precio, categoria, imagen){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.imagen = imagen;
    }
}

let productos = [];
productos.push(new Producto(1, 'Café', 25, 'Cafetería', './images/fondo-portada.jpg'));
productos.push(new Producto(2, 'Café', 65, 'Cafetería', './images/fondo-portada.jpg'));
productos.push(new Producto(3, 'Café', 40, 'Cafetería', './images/fondo-portada.jpg'));
productos.push(new Producto(4, 'Café', 90, 'Cafetería', './images/fondo-portada.jpg'));
productos.push(new Producto(5, 'Café', 210, 'Cafetería', './images/fondo-portada.jpg'));


let mostrarProductos = document.querySelector("#cartaCafe");
let nuevoDiv = ""; //document.createElement("div")

for(let i = 0; i < productos.length; i++){
    
    nuevoDiv+= `
	<div class="col-md-3 m-0">
		<div class="card mt-2 mb-2" style="width: 18rem;">
			<img src="${productos[i].imagen}" class="card-img-top" alt="...">
			<div class="card-body">
				<h5 class="card-title">${productos[i].nombre}</h5>
				<p class="card-text">$${productos[i].precio}</p>
				<p class="card-text">${productos[i].categoria}</p>
				<button id="add-cart-btn" class="btn btn-primary" onclick="guardar(${productos[i].id})">Agregar al pedido</button>
			</div>
		</div>
	</div>
    `
}

mostrarProductos.innerHTML = nuevoDiv;

let pedido = [];

function guardar(id) {
	console.log('guardar');
	if (localStorage.getItem('order')) {
		pedido = JSON.stringify(localStorage.getItem('order'));
	}

	pedido.push(productos.map(el => el.id == id));
	localStorage.setItem('order', JSON.stringify(pedido));
}

// document.getElementById("add-cart-btn").addEventListener('click', e=> {
// 	e.preventDefault();

// 	if (localStorage.getItem('order')) {
// 		pedido = JSON.stringify(localStorage.getItem('order'));
// 	}

// 	pedido.push()
// 	localStorage.setItem('order', 'hola');
// })
