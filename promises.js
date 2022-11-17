function calculateRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

console.log('inicio script')

// productor
function obtenerCitasDisponibles() {
  const time = calculateRandomNumber(1000, 4000);
  
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // Existe un servidor por ahí, que nos va a decir las citas disponibles.
      const citas = '12:30, 13:30';
      resolve(citas)

      // el servidor no tiene citas disponibles
      // reject();
    }, time);
  })

  return promise;
}

// consumidor
// obtenerCitasDisponibles()
//   .then((citasDisponibles) => {
//     console.log('las citas disponibles son: ', citasDisponibles);
//   })
//   .catch(() => {
//     console.log('no hay citas disponibles')
//   })

async function main() {
  try {
    const citasDisponibles = await obtenerCitasDisponibles();
    console.log('las citas disponibles son: ', citasDisponibles);
  } catch (error) {
    console.log('no hay citas disponibles')
  }
  
  console.log('fin de script')
}

main()




