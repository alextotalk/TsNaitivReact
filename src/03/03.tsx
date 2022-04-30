import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType, HouseType} from "../02/02_02";

export const sum = (a: number, b: number) => {
    return a + b
}
export const addSkill =(st: StudentType, skill: string) => {
    st.technologies.push({id: new Date().getTime(),
        title: skill})
}
export const changActive =(st: StudentType ) => {
    st.isActive=true
}
export const doesStudentLiveIn =(st: StudentType, cityName: string) => {
    return st.address.city.title===cityName
}
export const addMoneyToBudget =(governmentBuildings:GovernmentBuildingsType, budget:number) => {
governmentBuildings.budget+=budget
}
export const repairHouse =(house:HouseType) => {
house.repaired=true
}
export const toFireStaff= ( building: GovernmentBuildingsType, staffToFire: number)=>{
    building.staffCount-=staffToFire
}
