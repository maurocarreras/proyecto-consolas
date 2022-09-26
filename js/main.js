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

const especificacionesretro ={
    generacion: "tercera y cuarta",
    resolucion: "240 pixeles ",
    bits: "de 8 a 16 ",
    pantalla: "crt",
}  


const especificacionesactuales={
    almacenamiento: "320 gigabyte",
    hdmi: "velocidad 2.0 ",
    online: "si",
    juegos: " digitales y fisicos ",
}

//DESTRUCTURACION //

const {generacion, resolucion, bits, pantalla} = especificacionesretro
console.log(generacion)
console.log(resolucion)
console.log(bits)
console.log(pantalla)

const {almacenamiento,hdmi,online,juegos}=especificacionesactuales

console.log(almacenamiento)
console.log(hdmi)
console.log(online)
console.log(juegos)



const containerDiv = document.querySelector(".container");
const parrafo = document.querySelector(".parrafo");
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

const contactos = [];
const botonValidarContacto = document.getElementById("agregarContacto")

    function preventDefault(evt) {
        evt.preventDefault();
    }

    botonValidarContacto.addEventListener("click", cargarNombre)
    botonValidarContacto.addEventListener("click", cargarApellido)
    botonValidarContacto.addEventListener("click", cargarTelefono)
    botonValidarContacto.addEventListener("click", cargarAJSON)

const botonLimpiarContacto = document.getElementById("limpiarContacto")
    botonLimpiarContacto.addEventListener("click", limpiarStorage)
    botonLimpiarContacto.addEventListener("click", alertaBorrado)

function cargarNombre(){
    let nombre = document.getElementById("nombre").value
    contactos.push(nombre);
}

function cargarApellido(){
    let apellido = document.getElementById("apellido").value
    contactos.push(apellido)
}

function cargarTelefono(){
    let telefono = document.getElementById("telefono").value
    contactos.push(telefono)
}

function cargarAJSON (){
    let contactosJSON = JSON.stringify(contactos)
    localStorage.setItem("Datos de Contacto", contactosJSON)
    console.log(contactosJSON);
}

function limpiarStorage(){
    localStorage.clear(contactos)
}

function alertaBorrado(){
    Swal.fire("tus datos  han sido borrados!")
}

function welcome(){
    Swal.fire("Bienvenido/a a mi tienda</p>" + nombre +"</p>"+apellido+"!")
}


const datosContacto = JSON.parse(localStorage.getItem("Datos de Contacto")) || [];

console.log(datosContacto);
console.log(datosContacto[0]);
console.log(datosContacto[1]);
console.log(datosContacto[2]);

console.log(datosContacto); 
const datosContactoObj = {
    datosContacto
}
console.log(datosContactoObj);

console.log(datosContactoObj);

const [a, b, c] = datosContacto

console.log(a);
console.log(b);
let mensajeAlerta = 'Ingrese su nombre, apellido y numero de telefono para continuar'
const nombre = a ?? "Debe ingresar su nombre"
const apellido = b ?? " su apellido"
const telefono = c ?? "Ingrese su numero de telefono"
nombre === "" && Swal.fire(mensajeAlerta) || apellido === "" && Swal.fire(mensajeAlerta) || telefono === "" && Swal.fire(mensajeAlerta)
parrafo.innerHTML= `<div class="datos de contacto" > </p><u>Nombre:</u> <b>${nombre}</b></p><u>Apellido:</u> <b>${apellido}</b></p><u>Telefono/Celular:</u> <b>${telefono}</b></div>`

// welcome()