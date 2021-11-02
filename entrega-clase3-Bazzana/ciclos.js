let userName = prompt("Ingresá tu nombre");
// alert("¡Hola " + nombreUsuario +"!");

const magicNumber = 84;
console.log(magicNumber);

let userNumber;
let intentos = 7;

do {
    userNumber = Number(prompt("Ingresá un número entre 0 y 100"));

if (userNumber < 0 || userNumber > 100) {
    alert("El número ingresado no está entre 0 y 100. Volvé a intentarlo");
    continue;
}

if (userNumber < magicNumber) {
    alert("El número ingresado es menor que el Número Mágico. Volvé a intentarlo");
    intentos--;
    } else if (userNumber > magicNumber) {
        alert("El número ingresado es mayor que el Número Mágico. Volvé a intentarlo");
        intentos--;
    } else {
        alert(`¡Felicitaciones ${userName}, encontraste el número mágico!`);
    }

} while (userNumber !== magicNumber && intentos > 0) {
    alert("¡Lo sentimos! Ya no tenés más intentos. ¡Suerte para la próxima!")
}
