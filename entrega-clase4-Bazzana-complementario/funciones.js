const sumar = (x, y) => x + y;
const restar = (x, y) => x - y;
const iva = x => x * 0.21;

let precioProducto = Number(prompt(`Ingrese el precio del producto`));
let descuento = 500;
let nuevoPrecio = restar(sumar(precioProducto, iva(precioProducto)), descuento);

console.log(`El precio del producto con IVA incluido es de $${nuevoPrecio}`)