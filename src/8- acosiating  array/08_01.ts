type UsersType = {
    [key: string]: { id: number, name: string }
}
export const users: UsersType = {
    "1": {id: 1, name: "Dimich"},
    "2": {id: 2, name: "Natasha"},
    "3": {id: 3, name: "Valera"},
    "4": {id: 4, name: "Katya"},
}

let user = {id: 12, name: "Igor"}
users[user.id] = user
delete users[user.id]
users[user.id].name="Vitya"

export const usersArray = [
    {id: 1, name: "Dimich"},
    {id: 2, name: "Natasha"},
    {id: 3, name: "Valera"},
    {id: 4, name: "Katya"},
]
// let usersCopy=[...usersArray,user]
// usersArray.push(user)
// let usersArray=usersArray.filter(u=>u.id!==user.id)
