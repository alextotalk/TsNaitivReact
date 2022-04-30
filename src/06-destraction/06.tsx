import React, {useState} from "react";
export type ManType={
    name:string
    age:number
    lessons:Array<{title:string; name?:string}>
    address: {street: {title: string}}
}
type PropsType={
    title:string
    man:ManType
    food:Array<string>
    car:{model:string}
}

function useA(m:string) {
    return [m,function () {

    }]

}
export const ManComponent:React.FC<PropsType>=({title,man:{name},...props})=>{
  // const {title,man:{name}}=props
  // const {name}=props.man
const [massager,setMassager]=useState<string>("hi")
    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {name}
        </div>
         <div>{props.car.model}</div>
    </div>
}
