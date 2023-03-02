
// Task 1

// const person = {
//     firstName: "Ivan",
//     secondName: "Ivanov",
//     showData() {
//         console.log(`Ім'я:${this.firstName}, Прізвище:${this.secondName}`)
//     }

// };
// console.log(person);
// person.showData()
// const newPerson=Object.assign({}, person)
// console.log(newPerson)
// newPerson.firstName = 'Petro'
// newPerson.secondName = 'Petriv'
// person.showData()
// newPerson.showData()

// Task 2

const myMath = {
    a: 5,
    b: 2,
    sum() {

        console.log(this.a + this.b)
    },
    multiplication() {
        console.log(this.a * this.b)

    },
    division() {
        console.log(this.a / this.b)
    },
    subtraction() {
        console.log(this.a - this.b)
    }

}
myMath.sum()
myMath.multiplication()
myMath.division()
myMath.subtraction()
