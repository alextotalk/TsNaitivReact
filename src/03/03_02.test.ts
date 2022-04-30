import {CityType} from "../02/02_02";
import {addMoneyToBudget, repairHouse, toFireStaff} from "./03";

let city: CityType

beforeEach(() => {
    city = {
        title: "New York",
        houses: [{
            builderAt: 2012,
            repaired: false,
            address: {
                isNumber: 100,
                street: {
                    title: "White street"
                }
            }
        }, {
            builderAt: 2008,
            repaired: false,
            address: {
                isNumber: 100,
                street: {
                    title: "Happy street"
                }
            }
        }, {
            builderAt: 2000,
            repaired: false,
            address: {
                isNumber: 101,
                street: {
                    title: "Happy street"
                }
            }
        }],
        governmentBuildings: [{
            type: "HOSPITAL", budget: 200000, staffCount: 1000,
            address: {
                street: {
                    title: "Central Str"
                }
            }
        }, {
            type: "FIRE-STATION", budget: 500000, staffCount: 1000,
            address: {
                street: {
                    title: "South Str"
                }
            }
        }
        ],
        citizenNumber: 100000
    }
})

test("Budget should be changed fo Hospital", () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000)
    expect(city.governmentBuildings[0].budget).toBe(300000)
})
test ("Budget should be changed fo FIRE-STATION", () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000)
    expect(city.governmentBuildings[1].budget).toBe(400000)
})
// test ("House must be destroyed",()=>{
//     demolishHousesOnTheStreet(city,"Happy street")
//     expect(city.houses.length).toBe(1)
//     expect(city.houses[0].id).toBe(1)
//
// })
test( "House should be repair",()=>{
    repairHouse(city.houses[1])

    expect(city.houses[1].repaired).toBeTruthy()
})

test ('staff should be increased',()=>{
    toFireStaff(city.governmentBuildings[0],20)
    expect(city.governmentBuildings[0].staffCount).toBe(980)
})
