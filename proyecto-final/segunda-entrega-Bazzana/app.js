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
