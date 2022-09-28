function bienvenidaAlUsuario(usuario){
    return "Hola " + usuario + ", bienvedido a kentucky!"
}

function despedidaAlUsuario(usuario){
    return "Adios " + usuario + ", vuelva pronto!"
}

function crearSaludo(usuario, colBac){
    return colBac(usuario)
}

console.log(crearSaludo("Cristian", bienvenidaAlUsuario))
console.log(crearSaludo("David", despedidaAlUsuario))


let  colaboradores = ["Daniel", "Miguel", "Pablo", "Michell", "Ronald"]
let edadesDePiedra = [20, 22, 24, 25, 26, 33]
//for(let i = 0; i < colaboradores.length; i++){
    //if(colaboradores[i] === "Pablo"){return true}
 //   console.log(colaboradores[i]);
//}

//function mostrarColaboradores(colaboradores){
//    console.log(colaboradores)
//}
//colaboradores.forEach(mostrarColaboradores)
//ForEach no retorna nada y no se puede usar para guardar el contenido del bucle
colaboradores.forEach(function(wPanaderia){
    console.log("Hola desde el foreach " + wPanaderia)
})

let apertura = colaboradores.map(function(panacho, i){
    return "Hello panacho " + panacho + " " + i 
})
console.log(apertura)

let reducido = edadesDePiedra.reduce(function(acumulador, item, i){
    if(item === 22 || i === 0){

    }else { acumulador = acumulador + item
    }return acumulador;
}, 0)
console.log(reducido)
