class Producto{
    constructor (id, img, titulo, descripcion){
        this.id = id,
        this.img = img,
        this.titulo = titulo,
        this.descripcion = descripcion
    }
}

const productos = [];
productos.push(new Producto(1, "../img/macaron1.png", "Matcha Green", "Lorem"));
productos.push(new Producto(2, "../img/macaron2.png", "Gloriuous Pink", "Lorem"));
productos.push(new Producto(3, "../img/macaron3.png", "Banana Yellow", "Lorem"));
productos.push(new Producto(4, "../img/macaron4.png", "Tangerine", "Lorem"));
productos.push(new Producto(5, "../img/macaron5.png", "Fudgy Choco", "Lorem"));
productos.push(new Producto(6, "../img/macaron6.png", "Almond Paradise", "Lorem"));

console.log(productos);

const getFlavors = array => {
    array.forEach(item => {
        let {titulo, img} = item;
        let contenedor = document.getElementById("cardsFlavors");
        let card = document.createElement("div");
        card.innerHTML = `
        <img src="${img}"/>
        <h3>${titulo}</h3>
        `;
        card.className = "card1";
        contenedor.append(card);
    });
}

getFlavors(productos);