type UsersType = {
    [key: string]: { id: number, name: string }
}

export let users: UsersType = {}


beforeEach(() => {
    users = {
        "1": {id: 1, name: "Dimich"},
        "2": {id: 2, name: "Natasha"},
        "3": {id: 3, name: "Valera"},
        "4": {id: 4, name: "Katya"},
    }
})

test("should update corresponding user", () => {
    users["1"].name = "Katyha"

    expect(users["1"].name).toBe("Katyha")
    expect(users["1"]).toEqual({id: 1, name: "Katyha"})
})
test("should delete corresponding user", () => {
    delete users["1"]

    expect(users["1"]).toBeUndefined()
})
