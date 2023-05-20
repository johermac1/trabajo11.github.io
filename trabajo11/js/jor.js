// Variables
var helado = 20; // Precio del helado (valor numérico)
var topping; // Variable para el topping seleccionado
var precio; // Precio del topping seleccionado
var precioFinal; // Precio final del helado con el topping

// Asignar un valor al topping
topping = "Oreo";

// Calcular el precio del topping
if (topping === "Oreo") {
  precio = 10;
} else if (topping === "KitKat") {
  precio = 15;
} else if (topping === "Kinder") {
  precio = 25;
} else {
  console.log("No tenemos este topping");
}

// Calcular el precio final
precioFinal = helado + precio;

// Imprimir el mensaje con el precio final
console.log("El helado cuesta $" + precioFinal);