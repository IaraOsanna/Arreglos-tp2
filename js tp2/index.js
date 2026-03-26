/*1*/
let Frutas = ["Naranja", "Mango", "Frutilla"]
Frutas.push("Manzana")
Frutas.unshift("Melocoton")
Frutas.pop()
Frutas.shift()
console.log(Frutas)

/*2*/

let Nombres = ["Bastian", "Anna", "Alejandro"]
console.log(Nombres.length)
Nombres.push("Matilda")
Nombres.push("Candelaria")
let NuevosNombres = []
NuevosNombres.push(Nombres)

/*3*/

let Numeros = [2, 3, 4, 6]
let p = document.querySelector("p")
for (let i = 0; i < Numeros.length; i++) {
    p.textContent = Numeros[i]
    
}

/*4*/

let Numeros2 = [3, 5, 6, 2]
let suma = 0
for (let i = 0; i < Numeros2.length; i++) {
    suma += Numeros2[i]
    
}
document.querySelector("Resultado1").textContent = ("La suma es" + suma)

/*5*/

let palabras = []
for (let i = 0; i < 5; i++) {
    let palabra = prompt("Escribe una palabra")
    palabras.push(palabra)
}
document.querySelector("Resultado2").textContent = ("Palabras = " + palabras)

/*6*/

let Numeros3 = []
let resultadoHTML = ""
for (let i = 0; i < 5; i++) {
    let Numero = Number(prompt("Ingresa un numero"))
    Numeros3.push(Numero)
    
}
for (let index = 0; index < array.length; index++) {
    if (Numero3[i] > 100) {
        resultadoHTML += "<b>" + Numero3[i] + "</b>"
    } else {
        resultadoHTML += Numero3[i] + ""
    }
}
document.querySelector("Resultado3").innerHTML = "Numeros = " + resultadoHTML