class Producto {
    constructor(nombre, categoria, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = Number(precio);
    }
}

const productos = [];

productos.push(new Producto("Café", "Bebidas calientes", 150));
productos.push(new Producto("Jugo de naranja", "Bebidas frías", 80));
productos.push(new Producto("Sandwich", "Almuerzos y cenas", 400));
productos.push(new Producto("Alfajor", "Desayunos y meriendas", 75));
productos.push(new Producto("Medialuna", "Desayunos y meriendas", 50));
productos.push(new Producto("Agua mineral", "Bebidas", 80));


let ordenarPrecio = [];
ordenarPrecio = productos.map(elemento => elemento);
ordenarPrecio.sort(function(a, b) {
    return a.precio - b.precio;
});

console.log('Ordenar por precio ascendente');
console.log(ordenarPrecio);

let texto = '';
for (const producto of ordenarPrecio) {
    texto += `Producto: ${producto.nombre}\nPrecio: $ ${producto.precio}\n\n`
}

