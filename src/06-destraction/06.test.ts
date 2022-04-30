import {ManType} from "./06";

let props: ManType
beforeEach(() => {
    props = {

        name: "Dimych",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}, {title: "3",name:"react"}],
        address: {street: {title: "Kievskay"}}
    }
})
test('', () => {

    // const age=props.age
    // const lessons=props.lessons

    const {age: a, lessons: l} = props
    const {age, lessons} = props
    const {title} = props.address.street
    // const a = props.age
    // const l = props.lessons

    expect(age).toBe(32)
    expect(lessons.length).toBe(3)
    expect(a).toBe(32)
    expect(title).toBe("Kievskay")
    expect(l.length).toBe(3)
})
test('a', () => {
// const lesson1=props.lessons[0]
// const lesson2=props.lessons[1]

const [lesson1,,...restLessons]=props.lessons

    expect(lesson1.title).toBe("1")
    expect(restLessons[0].title).toBe("3")
    expect(restLessons[0].name).toBe("react")
    //проверка обектов
    expect(restLessons[0]).toStrictEqual({title: "3",name:"react"})
})
