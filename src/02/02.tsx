type LocCityType={
    title:string
    countryTitle:string
}
type AddressType={
    streetTitle:string
    city:LocCityType
}
export type StudentType={
    id:number
    name:string
    age:number
    isActive:boolean
    address:AddressType
    technologies:Array<TechType>
}
type TechType={
    id:number
    title:string
}
export const student:StudentType={
    id:1,
    "name":"Dimych",
    age:32,
    isActive:false,
    address:{
        streetTitle:"surganova 2",
        city:{
            title:"Minsk",
            countryTitle:"Belarus"
        }
    },
    technologies:[
        {
            id:1,
            title:"Html",
        },
        {
            id:2,
            title:"React",
        },
        {
            id:2,
            title:"Css",
        },
    ]
}
console.log(student.age)
console.log(student.address.city.countryTitle)
console.log(student.technologies[2].title)

