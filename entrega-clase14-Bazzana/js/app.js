//Comprobar que se cargue el DOM
$(function() {
	console.log("DOM ready");
});


//Formulario de reserva
$("#formulario").prepend(`<form id="form" class="form">
<div class="row m-3 form-control">
	<label for="name" class="form-label">Nombre y apellido</label>
	<input type="text" class="form-control" id="name" aria-describedby="name" placeholder="Ingrese su nombre">
	<i class="fas fa-check-circle"></i>
	<i class="fas fa-exclamation-circle"></i>
	<small>Mensaje</small>
</div>

<div class="row m-3 form-control">
	<label for="email" class="form-label">E-mail</label>
	<input type="email" class="form-control" id="email" placeholder="nombre@mail.com">
	<i class="fas fa-check-circle"></i>
	<i class="fas fa-exclamation-circle"></i>
	<small>Mensaje</small>
</div>

<div class="row m-3 form-control">
	<label for="cantidad" class="form-label">Seleccione la cantidad de personas</label>
	<select class="form-select" id="cantidad" aria-label="Default select example">
		<option selected>No especificada</option>
		<option value="1">1</option>
		<option value="2">2</option>
		<option value="3">3</option>
		<option value="4">4</option>
		<option value="5">5</option>
		<option value="6">6</option>
		<option value="7">7</option>
		<option value="8">8</option>
		<option value="9">9</option>
		<option value="10">10</option>
		<option value="11">11</option>
		<option value="12">12</option>
		<option value="13">13</option>
		<option value="14">14</option>
		<option value="15">15</option>
	<select>
	<i class="fas fa-check-circle"></i>
	<i class="fas fa-exclamation-circle"></i>
	<small>Mensaje</small>
</div>

<div class="row m-3 form-control">
	<label for="fecha" class="form-label">Ingrese la fecha de su reserva</label>
	<input type="date" class="form-control" id="fecha">
	<i class="fas fa-check-circle"></i>
	<i class="fas fa-exclamation-circle"></i>
	<small>Mensaje</small>
</div>

<div class="row m-3 form-control">
	<label for="info-extra" class="form-label">¿Tiene alguna otra especificación?</label>
	<textarea class="form-control" id="info-extra" rows="3" placeholder="Ingrese aquí información qeu pueda ser de utilidad"></textarea>
	<i class="fas fa-check-circle"></i>
	<i class="fas fa-exclamation-circle"></i>
	<small>Mensaje</small>
</div>

<button type="submit" id="button" class="btn btn-primary m-3">Reservar</button>

</form>`);

const usuario = document.getElementById('name');
const email = document.getElementById('email');
const personas = document.getElementById('cantidad');
const fecha = document.getElementById('fecha');
const otraInfo = document.getElementById('info-extra');

//Submit
$("#form").submit(function (e) { 
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

	if(personasValue === 'No especificada') {
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



//Carta de productos
class Producto {
    constructor (id, nombre, precio, categoria, imagen){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.imagen = imagen;
    }
}

// let productos = [];
// productos.push(new Producto(1, 'Café', 25, 'Cafetería', './images/fondo-portada.jpg'));
// productos.push(new Producto(2, 'Café', 65, 'Cafetería', './images/fondo-portada.jpg'));
// productos.push(new Producto(3, 'Café', 40, 'Cafetería', './images/fondo-portada.jpg'));
// productos.push(new Producto(4, 'Café', 90, 'Cafetería', './images/fondo-portada.jpg'));
// productos.push(new Producto(5, 'Café', 210, 'Cafetería', './images/fondo-portada.jpg'));


//let mostrarProductos = document.querySelector("#cartaCafe");

function cardProducto(arr) { //arr va a ser un array con productos
	let nuevoDiv = ""; //document.createElement("div")
	for(let i = 0; i < arr.length; i++){
		nuevoDiv+= `
		<div class="col-md-3 m-0">
			<div class="card mt-2 mb-2" style="width: 18rem;">
				<img src="${arr[i].imagen}" class="card-img-top" alt="...">
				<div class="card-body">
					<h5 class="card-title">${arr[i].nombre}</h5>
					<p class="card-text">$${arr[i].precio}</p>
					<p class="card-text">${arr[i].categoria}</p>
					<button id="add-cart-btn" class="btn btn-primary" onclick="guardar(${arr[i].id})">Agregar al pedido</button>
				</div>
			</div>
		</div>
		`
	};
	return nuevoDiv;
}


// $("#cartaCafe").append(cardProducto(productos));
//mostrarProductos.innerHTML = nuevoDiv;


//Local Storage
let pedido = [];

function guardar(id) {
	//console.log('guardar');
	if (localStorage.getItem('order')) {
		pedido = JSON.parse(localStorage.getItem('order'));
	}

	//console.log(productos.find(el => el.id == id && el));
	pedido.push(productos.find(el => el.id == id && el));
	localStorage.setItem('order', JSON.stringify(pedido));
}


//AJAX
const URL = "./js/productos.json";
$.ajax({
	method: "GET",
	url: URL,
	dataType: "json",
	success: function (response) {
		//console.log(response);
		let ajaxResponse = [];
		for (let elem of response) {
			ajaxResponse.push(elem);
		}
		//console.log(ajaxResponse);
		$("#cartaCafe").append(cardProducto(ajaxResponse));
	},
	error: err => console.log(err)
});

// document.getElementById("add-cart-btn").addEventListener('click', e=> {
// 	e.preventDefault();

// 	if (localStorage.getItem('order')) {
// 		pedido = JSON.stringify(localStorage.getItem('order'));
// 	}

// 	pedido.push()
// 	localStorage.setItem('order', 'hola');
// })
