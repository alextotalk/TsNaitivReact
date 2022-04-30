import React, {ChangeEvent, MouseEvent} from "react";

// const callback = () => {
//     alert('hi')
// }
// window.setTimeout(callback, 3000)

const deleteUser = (e:MouseEvent<HTMLButtonElement>) => {
    alert(    e.currentTarget.name)
}
const saveUser = () => {
    alert('User should be save')
}
const change = () => {
    console.log("same change")
}
const changeAge = (event:ChangeEvent<HTMLInputElement>) => {
    console.log("Age change" + event.currentTarget.value)
}
const focusLost  = () => {
    console.log("Focus lost")
}
export const User = () => {
    return <div><textarea onChange={change} onBlur={focusLost}>Alex</textarea>
        <input onChange={changeAge} type={"number"}/>
        <button name="save" tabIndex={0} onClick={saveUser}>Save</button>
        <button name="delet" tabIndex={1} onClick={deleteUser}>Delete</button>
    </div>
}
