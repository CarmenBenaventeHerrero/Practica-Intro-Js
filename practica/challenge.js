const students = [{
  age: 32,
  examScores: [5, 7, 8],
  gender: 'male',
  name: 'edu'
},
{
  age: 29,
  examScores: [8, 3, 7],
  gender: 'female',
  name: 'silvia'
},
{
  age: 23,
  examScores: [9, 8, 8],
  gender: 'female',
  name: 'carmen'
},
{
  age: 27,
  examScores: [7, 6, 9],
  gender: 'male',
  name: 'peter'
},
{
  age: 20,
  examScores: [5, 8, 9],
  gender: 'male',
  name: 'sebas'
},
{
  age: 28,
  examScores: [2, 7, 6],
  gender: 'female',
  name: 'marta'
}
]

const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableTotalNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos', 'cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia']
const availableGenders = ['male', 'female'];


import readline from 'readline'; /*importo esto desde aqui-->es algo que nos ofrece node, tengo que crear el fichero package.json*/

function calculateRandomNumber(min, max){
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; /*floor redondea*/
    return randomNumber;
}

//Configuramos la utilidad de node para que los datos se pidan y se muestren por consola.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Función para convertir un str a un número entero, y descartar los NaN

const isInt = (str) => { //parseInt recibe cualquier valor y te lo convierte a número entero --> si recibe un tipo de dato que no sabe convertir devolvera un tipo de dato que NaN (not a number)
  const integer = parseInt(str);
  if(Number.isNaN(integer)) { //Number es la clase Number de JS. Todas las funciones que empiezan por is/are devuelven un booleano. En el caso de que sea un NaN tengo que petármelo
      return false
  } else {
      return true
  }
}
//Productor -->quien gestiona y retorna la promesa
function getNumberFromConsole() {
  const promise = new Promise((resolve, reject) => {
    rl.question('Introduce un número del 1 al 17: ', (num) => {
      rl.pause();
      if(isInt(num)) {//(num > 0 && num <= 17)
        num = Number.parseInt(num);
        resolve(num)
    }
      else{
        reject('Lo siento. Se acabó la partida')
      }
      })
    })
      return promise;
    }

//Consumidor -->quien consume la promesa
async function playGame(){
 
    //const numberFromConsole = await getNumberFromConsole();
    //const numberFromConsoleParse = parseInt(numberFromConsole) 
  
    let numberFromConsole;//inicializo la variable para que se meta en el do/while
    
  do {
    const playRules = 
      '\nREQUISITOS: '+'\n\n1- Mostrar en formato de tabla todos los alumnos.'+ 
      '\n2- Mostrar por consola la cantidad de alumnos que hay en clase.'+
      '\n3- Mostrar por consola todos los nombres de los alumnos'+
      '\n4- Eliminar el último alumno de la clase.'+
      '\n5- Eliminar un alumno aleatoriamente de la clase.'+
      '\n6- Mostrar por consola todos los datos de los alumnos que son chicas.'+
      '\n7- Mostrar por consola el número de chicos y chicas que hay en la clase.'+
      '\n8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.'+
      '\n9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.'+
      '\n10- Añadir un alumno nuevo con los siguientes datos: nombre aleatorio, edad aleatoria entre 20 y 50 años, género aleatorio, listado de calificaciones vacío. ¡OJO!, el nombre y el género tienen que ir acordes.'+
      '\n11- Mostrar por consola el nombre de la persona más joven de la clase. ¡OJO!, si varias personas de la clase comparten la edad más baja, cualquiera de ellos es una respuesta válida.'+
      '\n12- Mostrar por consola la edad media de todos los alumnos de la clase.'+
      '\n13- Mostrar por consola la edad media de las chicas de la clase.'+
      '\n14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.'+
      '\n15- Ordenar el array de alumnos alfabéticamente según su nombre.'+
      '\n16- Mostrar por consola el alumno de la clase con las mejores notas.'+
      '\n17- Mostrar por consola la nota media más alta de la clase y el nombre del alumno al que pertenece.'+
      '\n18- Añadir un punto extra a cada nota existente de todos los alumnos. Recordad que la nota máxima posible es 10. Si los alumnos aún no tienen registrada ninguna nota, les pondremos un 10.'+
      '\n'
    
    console.log(playRules)
    
    try {
      numberFromConsole = await getNumberFromConsole();
  }
    catch(error) {
      console.log(error)
      process.exit(0)
  }
    switch(numberFromConsole) {
      case 1:
        console.table(students)
        break;

      case 2:
        console.log(`Hay ${students.length} alumnos en clase`)
        break;

      case 3:
        for (let index = 0; index <= students.length - 1; index++){
          console.log(students[index].name)
        }
        break;

      case 4:
        console.log('Se elimina al último alumno/a: ', students.pop())
        //console.log('La nueva lista quedaría ', students)
        break;

      case 5:
        let randomNumber = calculateRandomNumber(0, students.length - 1)
        console.log('Se elimina aleatoriamente al alumno/a: ', students.splice(randomNumber, 1))
        break;

      case 6:
        let females = students.filter(student => student.gender === 'female')
        console.log(females)
        break;

      case 7:
        let femalesCount = students.filter(student => student.gender === 'female')
        let malesCount = students.filter(student => student.gender === 'male')
        console.log('El número de mujeres es: ', femalesCount.length)
        console.log('El número de hombres es: ', malesCount.length)
        break;

      case 8:
        let femalesEvery = students.every(student => student.gender === 'female')
        console.log('La respuesta es: ',femalesEvery, '. No todos los alumnos de la clase son mujeres.')
        break;

      case 9:
        let studentAgeRange = students.filter(student => student.age >= 20 && student.age <= 25)
        console.log("Nombre 1: " + studentAgeRange[0].name,"\nNombre 2: " + studentAgeRange[1].name)
        break;

      case 10:
        let randomName = availableTotalNames[calculateRandomNumber(0, availableTotalNames.length - 1)]
        let isGender = (availableFemaleNames.includes(randomName)) ? 'female' : 'male';
        let newStudent = students.push({ //añade un objeto al final de la lista, pero devuelve la longitud de la lista
          age: calculateRandomNumber(20, 50),
          examScores: [],
          name: randomName,
          gender: isGender, //intentar darle la vuelta primero gender y luego name
        })
        console.log("El nuevo alumno/a de la clase es: ", students[newStudent - 1]) //por eso aqui me voy a la lista total, e imprimo "longitud de la lista = newStudent-->7" - 1
        break;

      case 11:
        let age = []
        for (let index = 0; index <= students.length - 1; index++){
          age.push(students[index].age)
        }
        for (let index = 0; index <= students.length - 1; index++){
          if (students[index].age === Math.min.apply(Math, age)){
            console.log(students[index].name)
            break;
          }
        }
        break;

      case 12:
        let sumAge = (students.reduce((sum, n) => {return (sum + n.age)}, 0))
        let averAge = sumAge / students.length
        console.log(averAge)
        break;

      case 13:
        let femalesFilter = students.filter(student => student.gender === 'female');
        //console.log(femalesFilter)
        let sumAgeFemale = (femalesFilter.reduce((sum, n) => {return (sum + n.age)}, 0))
        let averAgeFemale = sumAgeFemale / femalesFilter.length
        console.log(averAgeFemale)
        break;

      case 14:
        for (let index = 0; index <= students.length - 1; index++){
          students[index].examScores.push(calculateRandomNumber(0 , 10))
        }
        console.log(students)
        break;

      case 15:
        let orderStudents = students.sort((a,b) => (a.name > b.name) ? 1 : -1); 
        console.log(orderStudents)
        break;
      
      case 16: //mejorable
        let totalNotes = []
        for(let index = 0; index <= students.length -1; index++){
          totalNotes.push(students[index].examScores.reduce((sum, n) => {return (sum + n)}, 0))
            }
        //console.log(totalNotes)

        for (let index = 0; index <= students.length - 1; index++){
          if(students[index].examScores.reduce((sum, n) => {return (sum + n)}, 0) === Math.max.apply(Math, totalNotes)){
            console.log(students[index])}
        }
        break;

      case 17:
        let totalNotes1 = []
        for(let index = 0; index <= students.length -1; index++){
          totalNotes1.push((students[index].examScores.reduce((sum, n) => {return (sum + n)}, 0))
          / (students[index].examScores.length))
        }

        for (let index = 0; index <= totalNotes1.length - 1; index++){
          if(totalNotes1[index] === Math.max.apply(Math, totalNotes1)){
            console.log(students[index].name)
            console.log(Math.max.apply(Math, totalNotes1))
          }
        }
        break;
      default:
        rl.close() //le decimos a la utilidadad de readline que no queremos pedir más número por consola
        console.log('Lo siento. Se acabó la partida')
    }
} while (numberFromConsole > 0 && numberFromConsole <= 17);
}

playGame();