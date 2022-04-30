export type ManType = {
    name: string
    age: number
}
const people: Array<ManType> = [
    {name: "Andrei I", age: 33},
    {name: "Alex P", age: 24},
    {name: "Dmitro S", age: 18},
]
const dimychTransformator = (man: ManType) => ({
    stack: ["css,html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
})
const devs = [
    {
        stack: ["css,html", "js", "tdd", "react"],
        firstName: "Andrei", lastName: "I"
    },
    {
        stack: ["css,html", "js", "tdd", "react"],
        firstName: "Andrei", lastName: "P"
    },
    {
        stack: ["css,html", "js", "tdd", "react"],
        firstName: "Andrei", lastName: "S"
    },]
let d1 = dimychTransformator(people[0])

let d2 = dimychTransformator(people[1])

let d3 = dimychTransformator(people[2])

const dev2 = [
    d1, d2, d3
]

const dev3 = people.map(dimychTransformator)
const dev4 = people.map( man => ({
    stack: ["css,html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
}))
const massages= people.map(man=>`Hello ${man.name.split(" ")[0]}, welcome to IT my friend`)
