class Producto {
    constructor(nombre, categoria, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = Number(precio);
    }
}

const productos = [];
const carrito = [];

productos.push(new Producto("Café", "Bebidas calientes", 150));
productos.push(new Producto("Jugo de naranja", "Bebidas frías", 80));
productos.push(new Producto("Sandwich", "Almuerzos y cenas", 400));



const verProductos = (productos) => {
    let texto = '';
    for (const producto of productos) {
        texto += `Producto: ${producto.nombre}\nCategoría: ${producto.categoria}\nPrecio: $ ${producto.precio}\n\n`
    }

    return texto;
}

const ordenar = () => {
    const productoUsuario = prompt(`¿Qué producto desea ordenar?\n\n${verProductos(productos)}`);

    const productoEncontrado = productos.find(producto => producto.nombre.toLowerCase() === productoUsuario.toLocaleLowerCase().trim());

    if(productoEncontrado) {
        carrito.push(productoEncontrado);
        alert(`Agregaste ${productoEncontrado.nombre} al carrito`);
    } else {
        alert(`El producto no se encuentra disponible`)
    }
}

const verCarrito = () => {
    const productosCarrito = verProductos(carrito);
    if(productosCarrito) {
        alert(productosCarrito);
    } else {
        alert(`El carrito está vacío`);
    }
}

let menu;
do {
    menu = Number(prompt(`Ingrese una opción:
    1 - Ver productos
    2 - Comprar
    3 - Mostrar carrito
    4 - Salir`));

    switch(menu) {
        case 1:
            const valorRecibido = verProductos(productos);
            alert(valorRecibido);
            break;
        
        case 2:
            ordenar();
            break;
        
        case 3:
            verCarrito();
            break;

        case 4:
            alert(`¡Gracias por su visita!`);
            break;

        default:
            alert(`Opción incorrecta`);
            break;
    }
} while (menu !== 4);