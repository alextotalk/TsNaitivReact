function increaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string
    age: number
    address: {
        title: string
    }
}

test("big test", () => {
    var user: UserType = {
        name: "Dimich",
        age: 32,
        address: {
            title: "Minsk",
        },

    }
    increaseAge(user)

    expect(user["age"]).toBe(33)

    const superman = user

    superman.age = 1000

    expect(user["age"]).toBe(1000)

})

test("array test", () => {
    var users: Array<UserType> = [{
        name: "Dimich",
        age: 32,
        address: {
            title: "Minsk",
        },
    }, {
        name: "Dimich",
        age: 32,
        address: {
            title: "Minsk",
        },
    }]
    var admin = users
    admin.push({
        name: "lol", age: 10, address: {
            title: "Minsk",
        }
    })
    expect(users[2].age).toBe(10)
})
test("value type test", () => {
    let usersCount = 100
    let adminCount = usersCount
    adminCount++
    expect(usersCount).toBe(100)
})

test("big test ref", () => {
    let user: UserType = {
        name: "Dimich",
        age: 32,
        address: {
            title: "Minsk",
        },
    }

    // let addr=user.address
    let user2: UserType = {
        name: "Natasha",
        age: 30,
        address: user.address
    }

    user2.address.title = "kanaru"
    expect(user["address"].title).toBe("kanaru")

})

test("big test ref array", () => {
    const address = {
        title: "Minsk",
    }

    let user: UserType = {
        name: "Dimich",
        age: 32,
        address: address
    }

    // let addr=user.address
    let user2: UserType = {
        name: "Natasha",
        age: 30,
        address: address
    }

    const users = [user, user2, {name: "Katy", age: 18, address: address}]
    const admins = [user, user2]
    admins[0].name = "Dmitriy"


    expect(users[0].name).toBe("Dmitriy")
    expect(user.name).toBe("Dmitriy")

})

test("test sort array", () => {
    const letters = ["d", "c", "e", "f", "g", "p"]
    passports(letters)
    expect(letters).toEqual(["d","c",  "e", "f", "g", "p"])

})

function passports(letters: Array<string>) {
    let copy=[...letters]
    copy=copy.sort()
    console.log(copy)
    console.log(letters)
}
