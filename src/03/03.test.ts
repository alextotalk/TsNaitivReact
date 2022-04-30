import {StudentType} from "../02/02";
import {addSkill, changActive, doesStudentLiveIn} from "./03";

let student: StudentType
beforeEach(() => {
    student = {
        id: 1,
        "name": "Dimych",
        age: 32,
        isActive: false,
        address: {
            streetTitle: "surganova 2",
            city: {
                title: "Minsk",
                countryTitle: "Belarus"
            }
        },
        technologies: [
            {
                id: 1,
                title: "Html",
            },
            {
                id: 2,
                title: "React",
            },
            {
                id: 2,
                title: "Css",
            },
        ]
    }

})
test("new skill should be added", () => {
    addSkill(student, "js")

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("js")


    //проверка на то что он просто определён

    expect(student.technologies[3].id).toBeDefined()
})
test("new skill should be made active", () => {
    expect(student.isActive).toBe(false)

    changActive(student)

    expect(student.isActive).toBe(true)

})
test("student live in city", () => {
    let res1 = doesStudentLiveIn(student, "Moskow")
    let res2 = doesStudentLiveIn(student, "Minsk")

    expect(res1).toBe(false)
    expect(res2).toBe(true)

})
