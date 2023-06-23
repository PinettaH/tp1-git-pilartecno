/*  
  Ejercicio 1: 
  Implementar la función 'extractValues' que toma un objeto y retorna un array con todos los valores del objeto.
  Ejemplo: 
  extractValues({a: 1, b: 2, c: 3}) debería retornar [1, 2, 3]
*/

function extractValues(data) {
  // Tu código aquí
  return Object.values(data);
}

/*  
  Ejercicio 2: 
  Implementar la función 'arrayToLengthCounters' que toma un array de strings y retorna un objeto donde cada elemento
  del array se convierte en una clave del objeto y el valor es la longitud de cada string.
  Ejemplo: 
  arrayToLengthCounters(['gato', 'perro', 'elefante']) debería retornar {gato: 4, perro: 5, elefante: 8}
*/

function arrayToLengthCounters(array) {
  // Tu código aquí
  const elementos = {};
  for (var i = 0; i < array.length; i++) {
    var aux = array[i];
    elementos[aux] = aux.length;
  }
  return elementos;
}

/*  
  Ejercicio 3: 
  Implementar la función 'findKeysInCommon' que toma dos objetos y retorna un array con los nombres de las 
  propiedades que tienen en común.
  Ejemplo:
  findKeysInCommon({a: 1, b: 2, c: 3}, {b: 4, c: 5, d: 6}) debería retornar ['b', 'c']
*/

function findKeysInCommon(objeto1, objeto2) {
  // Tu código aquí
  var keys1 = Object.keys(objeto1);
  var keys2 = Object.keys(objeto2);
  var keysEnComun = [];

  for (var i = 0; i < keys1.length; i++) {
    var key = keys1[i];
    if (keys2.includes(key)) {
      keysEnComun.push(key);
    }
  }

  return keysEnComun;
}

// Llamamos a las funciones y mostramos los resultados

function main() {
  console.log(extractValues({ a: 1, b: 2, c: 3 }));
  console.log(arrayToLengthCounters(['gato', 'perro', 'elefante']));
  console.log(findKeysInCommon({ a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 }));
}

main();
