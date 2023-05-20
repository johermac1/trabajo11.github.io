// Pregunta al cliente por el pedido
let pedido = prompt("¿Qué desea pedir? (carne, pescado o verdura)");

// Verifica el pedido utilizando un condicional switch
switch (pedido) {
  case "carne":
    console.log("Como bebida, le ofrecemos vino tinto.");
    break;
  case "pescado":
    console.log("Como bebida, le ofrecemos vino blanco.");
    break;
  case "verdura":
    console.log("Como bebida, le ofrecemos agua.");
    break;
  default:
    console.log("Por favor, elija carne, pescado o verdura.");
    break;
}

// Crear un array de datos
let datos = ["dato1", "dato2", "dato3", "dato4", "dato5"];

// Recorrer el array con un ciclo for
for (let i = 0; i < datos.length; i++) {
  console.log(datos[i]);
}

// Insertar un elemento en el array
datos.push("dato6");

// Volver a recorrer el array con un ciclo for
for (let i = 0; i < datos.length; i++) {
  console.log(datos[i]);
}

// Utilizar un ciclo while para verificar si el número es menor que 11
let numero = 1;
while (numero < 11) {
  console.log("El número es más chico que 11");
  numero++; // Incrementar la variable para evitar un bucle infinito
}