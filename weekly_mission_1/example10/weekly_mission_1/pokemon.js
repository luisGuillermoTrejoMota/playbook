export default class Pokemon{
        constructor(name) {
            this.name = name
        }
    
        sayHello(message) {
            console.log(`Hola yo soy un ${this.name}, ${message}`)
        }
    }
