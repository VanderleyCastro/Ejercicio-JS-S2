const personaje ={
    nombre:"Guerrero",
    nivel: 10,
    vida:100,
    arma: "Espada",

    atacar:function(){
        console.log("El personaje esta atacando");
    }
};
console.log(personaje.nombre);
console.log(personaje.arma);

personaje.atacar();