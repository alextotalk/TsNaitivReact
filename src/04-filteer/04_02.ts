import {CityType, GovernmentBuildingsType} from "../02/02_02";

export const demolishHousesOnTheStreets= (city: CityType, Street: string)=>{
city.houses=city.houses.filter(house=>house.address.street.title!==Street)
}
export const getBuildingsWithStaffCountGreaterThen= (buildings: Array<GovernmentBuildingsType>, number: number)=> {
  return buildings.filter(b=>b.staffCount>number)
}
