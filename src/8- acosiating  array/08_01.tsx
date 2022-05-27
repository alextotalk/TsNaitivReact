 import React from "react";

type UsersType = {
    [key: string]: { id: number, name: string }
}
export const users: UsersType = {
    "1": {id: 1, name: "Mich"},
    "2": {id: 2, name: "Natasha"},
    "3": {id: 3, name: "Valera"},
    "4": {id: 4, name: "Katya"},
}
 export const AssociativeArr=()=>{

let user = {id: 12, name: "Igor"}
users[user.id] = user
delete users[user.id]
// users[user.id].name="Vita"
let res: string[]
res=Object.keys(user).map(e=>e+"+")
// let usersCopy=[...usersArray,user]
// usersArray.push(user)
// let usersArray=usersArray.filter(u=>u.id!==user.id)
    return <div>
      you = {res}
    </div>



}