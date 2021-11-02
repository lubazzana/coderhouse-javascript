let userName = prompt("Ingresá tu nombre");

const magicNumber = 75;
console.log(magicNumber);

let number;
let intentos = 7;

do {
    number = Number(prompt("Ingresá un número entre 0 y 100. Tenés 7 intentos"));

if (number < 0 || number > 100) {
    alert("El número ingresado no está entre 0 y 100. Volvé a intentarlo");
    continue;
}

if (number < magicNumber) {
    alert("El número ingresado es menor que el Número Mágico");
    intentos--;
    } else if (number > magicNumber) {
        alert("El número ingresado es mayor que el Número Mágico");
        intentos--;
    } else {
        alert(`¡Felicitaciones ${userName}, encontraste el Número Mágico!`);
    }

} while (number !== magicNumber && intentos > 0)
