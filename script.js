let tempC = prompt("Ingresa la temperatura en grados Celsius: ")
let temperaturaC = parseFloat(tempC); //Convierte a float para que si sume los numeros en lugar de concatenar

if (isNaN(temperaturaC)){ //isNan da true cuando no es un numero
    alert("Ingresa un número válido");
}else {
let tempetaturaK = temperaturaC + 273.15;
let temperaturaF = (temperaturaC * 1.8 ) + 32;

const conversion = document.getElementById("conversion");
conversion.textContent="La temperatura en Fahrenheit es: " + temperaturaF + ". La temperatura en Kelvin es: " + tempetaturaK+".";
}