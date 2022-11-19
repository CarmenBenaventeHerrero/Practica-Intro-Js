const students = [{
  age: 32,
  examScores: [],
  gender: 'male',
  name: 'edu'
},
{
  age: 29,
  examScores: [],
  gender: 'female',
  name: 'silvia'
},
{
  age: 23,
  examScores: [],
  gender: 'female',
  name: 'carmen'
},
{
  age: 27,
  examScores: [],
  gender: 'male',
  name: 'peter'
},
{
  age: 20,
  examScores: [],
  gender: 'male',
  name: 'sebas'
},
{
  age: 28,
  examScores: [],
  gender: 'female',
  name: 'marta'
}
]

const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableTotalNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos', 'cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia']
const availableGenders = ['male', 'female'];


import readline from 'readline'; /*importo esto desde aqui-->es algo que nos ofrece node*/

function calculateRandomNumber(min, max){
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; /*floor redondea*/
    return randomNumber;
}

const secretNumber = calculateRandomNumber(0, 100);/*tu le puedes pedir el número al servidor(node) o al navegador. Lo haremos con node*/


//Configuramos la utilidad de node para que los datos se pidan y se muestren por consola.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Productor
function getNumberFromConsole() {
  const promise = new Promise((resolve, reject) => {
      rl.question('Introduce el número: ', (num) => {
          rl.pause();
          resolve(num)
          //si el usuario mete una letra, debemos hacer un reject
      })
  })
  return promise;
}

//Consumidor
//const numberFromConsole = await getNumberFromConsole();

const numberFromConsole = 11;
switch(numberFromConsole) {
  case 1:
    console.log
    break;
  case 2:
    console.log(students.length)
    break;
  case 3:
    for (let index = 0; index <= students.length - 1; index++){
      console.log(students[index].name)
    }
    break;
  case 4:
    console.log(students.pop())
    console.log('La nueva lista quedaría ', students)
    break;
  case 5:
    let randomNumber = calculateRandomNumber(0, students.length - 1)
    console.log(students.splice(randomNumber, 1))
    console.log('La nueva lista quedaría ', students)
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
    console.log(femalesEvery)
    break;
  case 9:
    let studentAgeRange = students.filter(student => student.age >= 20 && student.age <= 25)
    console.log("Nombre 1: " + studentAgeRange[0].name,"\nNombre 2: " + studentAgeRange[1].name)
    break;
  case 10:
    let randomName = availableTotalNames[calculateRandomNumber(0, availableTotalNames.length - 1)]
    let isFemale = randomName in availableMaleNames ? 'Male' : 'Female';
    let newStudent = students.push({
      age: calculateRandomNumber(20, 50),
      examScores: [],
      gender: isFemale, //incompleto!!!
      name: randomName,
    }
    )
    console.log(students)
    break;
  case 11:
    let age = []
    for (let index = 0; index <= students.length - 1; index++){
      age.push(students[index].age)
    }
      console.log(age)

    let min = Math.min.apply(Math, age)
    console.log(min)   
    let nameMin = students.filter(student => student.age === min)
    console.log(nameMin)
    break;
  case 12:
    console.log
    break;
  case 13:
    console.log
    break;
  case 14:
    console.log
    break;
  case 15:
    console.log
    break;
  default:
    console.log("Número no válido, se acabó");
}