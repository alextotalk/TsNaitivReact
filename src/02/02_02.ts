type StreetType = {
    title: string
}
type AddressType = {
    isNumber: number
    street: StreetType
}
export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizenNumber: number
}
export type GovernmentBuildingsType = {
    type: string
    budget: number
    staffCount: number
    address:GovernmentBuildingsAddressType
}
export type GovernmentBuildingsAddressType = {
 street:GovernmentBuildingsAddressTitleType
}
export type GovernmentBuildingsAddressTitleType = {
 title:string
}
export type HouseType = {
    id?:number
    builderAt: number
    repaired: boolean
    address: AddressType
}
