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
productos.push(new Producto(1, 'Fideos', 25, 'Pastas', './imagenes/fideos.jpg'));
productos.push(new Producto(2, 'Galletitas', 65, 'Snacks', './imagenes/galletitas.jpg'));
productos.push(new Producto(3, 'Arroz', 40, 'Arroz', './imagenes/arroz.jpg'));
productos.push(new Producto(4, 'Lentejas', 90, 'Legumbres', './imagenes/lentejas.jpg'));
productos.push(new Producto(5, 'Helado', 210, 'Congelados', './imagenes/helado.jpg'));


let mostrarProductos = document.querySelector("#catalogo");
let nuevoDiv = document.createElement("div")

for(let i = 0; i < productos.length; i++){
    
    nuevoDiv.innerHTML += `
    <div class="card" style="width: 18rem; text-align: center;">
        <img src="${productos[i].imagen}" class="card-img-top" alt=" ">
        <div class="card-body">
            <h3 class="card-title">${productos[i].nombre}</h3>
            <h4 class="card-text">$${productos[i].precio}</h4>
            <p class="card-text">${productos[i].categoria}</p>
            <a href="#" class="btn btn-primary">Agregar al carrito</a>
        </div>
    </div> <br><br>
    `
}

mostrarProductos.appendChild(nuevoDiv)



// let nombre = prompt('Ingrese su nombre');
// let saludo = document.querySelector("#saludo");
// saludo.innerHTML = `<h2>Hola ${nombre}</h2>`;
