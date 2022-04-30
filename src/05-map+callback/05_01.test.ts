import {ManType} from "./05_01";

let people:Array<ManType>=[]
beforeEach(()=>{
    people=[
        {name: "Andrei I", age: 33},
        {name: "Alex P", age: 24},
        {name: "Dmitro S", age: 18},
    ]
})
test("should be array of greeting massagers",()=>{
    const massages=people.map(man=>`Hello ${man.name.split(" ")[0]}, welcome to IT my friend`)
    expect(massages.length).toBe(3)
    expect(massages[0]).toBe("Hello Andrei, welcome to IT my friend")
    expect(massages[1]).toBe("Hello Alex, welcome to IT my friend")
    expect(massages[2]).toBe("Hello Dmitro, welcome to IT my friend")

})
