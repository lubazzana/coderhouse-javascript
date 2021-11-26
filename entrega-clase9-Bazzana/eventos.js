const form = document.getElementById('form');
const usuario = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('click', e => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	//remover espacios en blanco
	const usuarioValue = usuario.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
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
	
	if(passwordValue === '') {
		setError(password, 'Contraseña no válida');
	} else {
		setSuccess(password);
	}
	
	if(password2Value === '') {
		setError(password2, 'Vuelva a ingresar la contraseña');
	} else if(passwordValue !== password2Value) {
		setError(password2, 'Las contraseñas no coinciden');
	} else{
		setSuccess(password2);
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
