// Escribir una función que, dada una edad, devuelva true si es mayor de edad.
// En caso contrario, debe devolver false. 


// primera forma de resolverlo
function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}


// otra forma de resolverlo, siendo más correctos utilizando sólo 1 return.
function isAdult2(age) {
  let result;

  if (age >= 18) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

// otra forma de resolverlo, devolviendo directamente el valor de la comprobación que evaluamos.
function isAdult3(age) {
  return age >= 18;
}

// misma solución que la función isAdult pero escrita en función flecha
const isAdultArrow = (age) => {  // recordad que los paréntesis de los argumentos son OPCIONALES cuando sólo recibimos un argumento
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

// misma solución que isAdult2 pero utilizando función flecha
const isAdult2Arrow = age => { // aquí por ejemplo he decidido NO usar los paréntesis
  let result;

  if (age >= 18) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

// misma solución que isAdult3 pero utilizando función flecha
const isAdult3Arrow = age => age >= 18; // no uso llaves ni return porque es una función arrow de una línea. Por ello, las llaves no son necesarias y el return es implícito. 
