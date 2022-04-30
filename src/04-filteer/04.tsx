import {CityType} from "../02/02_02";

const ages=[18,20,22,1,100,90,14]
const  predicate=(age:number)=>{
    return age>90
}
type CourseType={
    title:string
    price:number
}
const  oldAges=[100]//>90
 const courses=[
     {title:"css",price:110},
     {title:"JS",price:200},
     {title:"REACT",price:150},
 ]
//>160
const cheapCourses=(course:CourseType)=>{
    return  courses[0].price<160
}
