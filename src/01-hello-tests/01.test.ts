import {multi, splitIntoWards, sum} from "./01";
//data
let a: number
let b: number
let c: number
//зарание определяем переменные и теперь для каждого теста можно
// использовать и определять как старое звынпчение пер. та и новое
beforeEach(() => {
    a = 1
    b = 2
    c = 3
})
test("sum should be correct", () => {

    //action
    const result1 = sum(a, b)
    a = 100
    const result2 = sum(a, c)
//expect result
    expect(result1).toBe(3)
    expect(result2).toBe(103)
})
test("mult should be correct", () => {

    //action
    const result1 = multi(a, b);
    const result2 = multi(a, c);
    const result3 = multi(b, c);
//expect result
    expect(result1).toBe(2)
    expect(result2).toBe(3)
    expect(result3).toBe(6)
})
test("splitting  should be correct", () => {
    //data
    const sent1 = "Hello my friend."
    const sent2 = "JS - my friend!"

    //action
    const result1 = splitIntoWards(sent1);
    const result2 = splitIntoWards(sent2);
//expect result
    expect((result1).length).toBe(3)
    expect((result1[0])).toBe("hello")
    expect((result1[1])).toBe("my")
    expect((result1[2])).toBe("friend")
    //expect result
    expect((result2).length).toBe(4)
    expect((result2[0])).toBe("js")
    expect((result2[1])).toBe("-")
    expect((result2[2])).toBe("my")
    expect((result2[3])).toBe("friend")
})

