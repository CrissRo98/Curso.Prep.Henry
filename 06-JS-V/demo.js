function Vehiculos(Marca, modelo, año, tienda){
    this.marca = Marca,
    this.modelo = modelo,
    this.color = ["Negro", "Blanco", "Rojo", "Azul", "Verde", "Morado", "Gris"],
    this.año = año,
    this.tienda = tienda,
    this.disponible = true
    this.runrun = function(){return "El carro hace: Run...Run"}
}
Vehiculos.prototype.presentacion = function() {
return console.log("El vehiculo " + this.marca + " modelo " + this.modelo + " en el color " + this.color[3]+ " se encuentra disponible. " + this.runrun())
}
Vehiculos.prototype.saludo = function(idioma){
    if(idioma === "en") return "Hi " + this.marca + " " + this.modelo
    else return "Hola " + this.marca + " " + this.modelo
}

let producto1 = new Vehiculos("Mazda", "L5", 2019, "Benavides");
let producto2 = new Vehiculos("VolksWagen", "1300", 1960, "R. Panama");
let producto3 = new Vehiculos("Lamborgini", "Murcielago", 2020, "Chacarilla");
let producto4 = new Vehiculos("Ferrari", "Sport2", 2020, "R. Panama");
let producto5 = new Vehiculos("Ford", "Mustang C4", 2021, "Molina");

class RoblesFamily{
    constructor(nombre, apellido, edad){
        this.name = nombre,
        this.lastname = apellido,
        this.yearsOld = edad,
        this.saludar = function (){
            return "Hola, me llamo " + this.name + " " + this.lastname + ", nice to meet you."
        }
        this.detalle = function(){
            return RoblesFamily;
        }
    }
    trabaja(idioma){
        if(idioma === "en") return "Hi " + this.name + " " + this.lastname
    else return "Hola " + this.name + " " + this.lastname
    }

}

class LaboresRobles extends RoblesFamily{
    constructor(nombre, apellido, edad, esElExito){
        super(nombre, apellido, edad)
        this.esElExito = true;
    }
    

}

let pio = new RoblesFamily("Cristian", "Robles", 24)
//let chimchar = new RoblesFamily("Alberto", "Robles", 30)
console.log(pio.detalle())
//console.log(chimchar.saludar())
//console.log(pio.trabaja("en"))
//console.log(pio)
//let RCriss = new LaboresRobles("Cristian", "Robles", 24)
//console.log(RCriss.trabaja("en"))

