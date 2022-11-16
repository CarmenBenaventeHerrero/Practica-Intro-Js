// Escribe un switch que dada la nota numérica de un examen, imprima por consola si es un suspenso, suficiente, bien, notable, sobresaliente o matrícula.
const note = 6;

switch(note) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
    console.log('suspenso')
  case 5:
    console.log('suficiente')
  case 6:
    console.log('bien')
  case 7:
  case 8:
    console.log('notable')
  case 9:
    console.log('sobresaliente')
  case 10:
    console.log('mdh')
  default:
    console.log('nota no valida')
}

