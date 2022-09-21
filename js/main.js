const consolas = [

{ id: 1, nombre: "Nes", precio: 12000  },

{ id: 2, nombre: "Super Nintendo", precio: 18000 },

{ id: 3, nombre: "Sega Genesis", precio: 14000 },

{ id: 4, nombre: "Play Station One", precio: 25000 },

{ id: 5, nombre: "Nintendo 64", precio: 30000 },

{ id: 6, nombre: "Sega Dreamcast", precio: 35000 },

{ id: 7, nombre: "Nintendo Game Cube", precio: 40000 },

{ id: 8, nombre: "Play Station 2", precio: 37000 },

{ id: 9, nombre: " Xbox", precio: 32500 },

{ id: 10, nombre: "Nintendo Wii", precio: 29700 },

{ id: 11, nombre: "Game Boy ", precio: 24999 },

{ id: 12, nombre: "Nintendo DS", precio: 39800 },

{ id: 13, nombre: "Xbox 360", precio: 43200 },

{ id: 14, nombre: "Play Station 3", precio: 51500 },

{id: 15 , nombre:"PC Gamer", precio: 127000},

{id: 16 , nombre: "Nintendo DS", precio: 47000},

{id: 17 , nombre: "Game boy Color" , precio: 29300},

{id: 18 , nombre: "Nintendo WiiU" , precio: 69200},

{id: 19 , nombre: "Atari original" , precio: 45099},

{ id: 20, nombre: "Nintendo 3DS", precio: 47500 },

];

const containerDiv = document.querySelector(".container");
const carritoDiv = document.querySelector(".carrito");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function Cards(){
    consolas.forEach(element=>{
            containerDiv.innerHTML +=`<div class = "tarjetas">
        <h4 class ="titulo-tarjeta">${element.nombre}</h4>
        <p class="precio">$${element.precio}</p>
        <button class="boton-tarjeta" id="btn-agregar${element.id}">Agregar al carrito</button>
        </div>`
    })
    agregarFuncionAlBoton();
}

function agregarFuncionAlBoton(){
    consolas.forEach(producto=>{
        document.querySelector(`#btn-agregar${producto.id}`).addEventListener("click",()=>{
            agregarAlCarrito(producto)
        })
    })
}

function agregarAlCarrito(producto){

let existe = carrito.some(prod=>prod.id === producto.id);
if(existe===false){
    producto.cantidad = 1;
    carrito.push(producto);
}
else{
    let prodFind = carrito.find(prod=> prod.id===producto.id);
    prodFind.cantidad++;
}
console.log(carrito);
actualizarCarrito();
}

function precioFinal(cantidad, precio) {
    return cantidad * precio;
}

function actualizarCarrito(){
    carritoDiv.innerHTML = "";
    carrito.forEach(prod=>{
        carritoDiv.innerHTML += `<div class ="tarjeta-carrito">
        <h4 class="titulo-tarjeta">${prod.nombre}</h4>
        <h3 class="cantidad">Cantidad: ${prod.cantidad}</h3>
        <p class="precio-carrito">$${precioFinal(prod.cantidad, prod.precio)}</p>
        <button class="boton-carrito" id="btn-borrar${prod.id}">Borrar todo</button>
        </div>`
    })
    localStorage.setItem("carrito",JSON.stringify(carrito))
    borrartodoslosProducto()
}

console.log(localStorage.getItem("carrito"));

function borrartodoslosProducto(){
    carrito.forEach(producto=>{
        document.querySelector(`#btn-borrar${producto.id}`).addEventListener("click",()=>{
            let indice = carrito.findIndex(element=>element.id===producto.id);
            carrito.splice(indice,1);
            actualizarCarrito()
        })
    })
}

actualizarCarrito();
Cards();