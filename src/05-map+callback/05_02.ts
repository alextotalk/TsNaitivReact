import {GovernmentBuildingsType, HouseType} from "../02/02_02";

export const getStreetsTitle = (governmentBuildings: Array<GovernmentBuildingsType>) => {
    return governmentBuildings.map(b => b.address.street.title)
}
export const getStreetsTitleOfHouses = (houses: Array<HouseType>) => {
    return houses.map(h=>h.address.street.title)
}
export function createMessages(houses: Array<HouseType>) {

    let callbackefn=(h:HouseType)=>{
        return `Hi from ${h.address.street.title}`}
return houses.map(callbackefn)
}
