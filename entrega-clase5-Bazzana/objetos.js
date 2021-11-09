class Compra {
    constructor(producto, categoria, stock, cantidadComprada){
        this.producto = producto;
        this.categoria = categoria;
        this.stock = stock;
        this.cantidad = cantidadComprada;
    }

    controlStock(){
        if(this.cantidad > this.stock){
            alert("No tenemos suficiente stock de este producto")
        } else if(this.cantidad < this.stock && this.cantidad > 0){
            this.stock = this.stock - this.cantidad
            alert(`La cantidad ingresada es: ${this.cantidad}. Y el stock actualizado es de: ${this.stock}`)
        } else {
            alert("Usted ingresó una cantidad negativa, eso es incorrecto")
        }
    }
}



let compraUsuario = Number(prompt("Ingrese la cantidad a comprar"));
const objeto1 = new Compra ("agua mineral", "bebidas", 30, compraUsuario);
objeto1.controlStock();
console.log(objeto1)