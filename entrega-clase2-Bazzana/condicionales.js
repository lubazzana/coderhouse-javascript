const user = prompt("Ingresa tu nombre de usuario");
const pass = prompt("Ingresa tu contraseña");

const adminValido = user == "admin" && pass == "admin123";
const usuarioValido = (user == "lucrecia" && pass == "lucrecia123") || (user == "marcos" && pass == "marcos123") || (user == "ana" && pass == "luna");

if (adminValido) {
    console.log("¡Hola admin!")
} else if (usuarioValido) {
    console.log("¡Hola " + user +"!")
} else {
    console.log("Datos incorrectos")
};

