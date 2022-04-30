import {CityType} from "../02/02_02";
import {createMessages, getStreetsTitle, getStreetsTitleOfHouses} from "./05_02";


let city: CityType

beforeEach(() => {
    city = {
        title: "New York",
        houses: [{
            id: 1, builderAt: 2012, repaired: false,
            address: {
                isNumber: 100,
                street: {
                    title: "White street"
                }
            }
        }, {
            id: 2, builderAt: 2008, repaired: false,
            address: {
                isNumber: 100,
                street: {
                    title: "Happy street"
                }
            }
        }, {
            id: 3, builderAt: 2000, repaired: false,
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
test("list of streets titles of governments buildings", () => {
    let streetsNames = getStreetsTitle(city.governmentBuildings)
    expect(streetsNames.length).toBe(2)
    expect(streetsNames[0]).toBe("Central Str")
    expect(streetsNames[1]).toBe("South Str")
})

test("list of streets titles of houses", () => {
    let streetsNames = getStreetsTitleOfHouses(city.houses)
    expect(streetsNames.length).toBe(3)
    expect(streetsNames[0]).toBe("White street")
    expect(streetsNames[1]).toBe("Happy street")
    expect(streetsNames[2]).toBe("Happy street")
})


test("create greeting for streets",()=>{
    let messages= createMessages(city.houses)
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hi from White street")
    expect(messages[1]).toBe("Hi from Happy street")
    expect(messages[2]).toBe("Hi from Happy street")
})
