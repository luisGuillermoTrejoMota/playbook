const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]



console.log("Ejercicio 2.1 y 2.2")

explorers.forEach(explorer => console.log(explorer.name + " Stack " + explorer.stack))


console.log("Ejercicio 2.3")
const explorer_map = explorers.map(mapa => mapa.stack)
console.log(explorer_map)

console.log("Ejercicio 2.4")
const explorer_js = explorers.filter(jotas => jotas.stack.includes("js"))
console.log(explorer_js)

console.log("Ejercicio 2.5")
const explorer_cdmx = explorers.find(cityA => cityA.city === "CDMX")
console.log(explorer_cdmx)

console.log("Ejercicio 2.6")
const explorer_ec = explorers.reduce((acc, excom) =>acc + excom.exercises_completed, 0)
console.log(explorer_ec)

console.log("Ejercicio 2.7")
const explorer_sm = explorers.some(finishA => finishA.missions.frontend.exercisesFinished === true)
console.log(explorer_sm)

console.log("Ejercicio 2.8")
const explorer_ev = explorers.every(finishB => finishB.missions.frontend.exercisesFinished === true)
console.log(explorer_ev)