// Se debera poder agregar alumnos al listado.
// El boton eliminar podra eliminar al div padre del boton
// la funcion que elimina al padre es parentElement.remove() se aplica sobre el boton.

// Analizar el codigo HTML para identificar los selectores y contenedores
// Cosas a tener en cuenta:
// 1) Obtener el valor del input cuando se ejecute el evento click del boton agregar
// 2) La funcion agregar debera crear un nuevo div hijo para el div listado.
// 3) La funcion eliminar se agregar al evento del boton cuando se crea.

// No modificar esta funcion pero se puede tomar como referencia para el "eliminar"

var eliminarEjemplo = document.getElementsByClassName("btn-eliminar")[0]

eliminarEjemplo.addEventListener("click", function(){
    eliminarEjemplo.parentElement.remove()
})

// Empezar a codear AQUI ABAJO...

// var btn_buscar = document.getElementById("btn-agregar")
// btn_buscar.addEventListener("click", function(){
// var nombre_alumno = document.getElementById("alumno")
// var agregarA = nuevo(nombre_alumno.value)
//  var lista = document.getElementById("listado")
// })

// var nuevo = document.createElement("h3")
// nuevo.innerText = "nuevo"
// listado.appendChild(nuevo)

//     var lista = document.getElementById("listado")

//     var agregar_alumno = document.getElementById("alumno")

//     var buscar = document.getElementById("btn-agregar")

// function agregar_alumno(){
//     var agregarAlumno = document.createElement("h3")
//     agregarAlumno.innerText = "alumno"
//     lista.appendChild(agregarAlumno)
// }
// buscar.addEventListener("click",agregar_alumno)

var buton_agregar = document.getElementById("btn-agregar")


function agregar(nombre){
    var contenedor = document.createElement("div")
    var texto = document.createElement("h3")
    var eliminar = document.createElement("button")
    // div h3 y button a
    contenedor.classList.add("contenedor")
    texto.innerText = nombre
    eliminar.innerHTML = "<i><img width='30px' height='15px' src='iconos/dustbin_120823.svg' alt=''></i>"
    eliminar.classList.add("btn-eliminar")

    eliminarContenedor(eliminar)

    // div clas = "contenedor"
    // h3 {nombre}
    // button class="btn-eliminar" texto eliminar
    contenedor.appendChild(texto)
    contenedor.appendChild(eliminar)
    var listado = document.getElementById("listado")
    listado.appendChild(contenedor)
}
buton_agregar.addEventListener("click",function(){
    var input = document.getElementById("alumno")

    agregar(input.value)
    input.value = ""
})
function eliminarContenedor (boton){
    boton.addEventListener("click",function(){
        boton.parentElement.remove()

    })
}
