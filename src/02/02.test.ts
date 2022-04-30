import {CityType} from "./02_02"

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
        governmentBuildings: [],
        citizenNumber: 100000
    }
})

test("city should content 3 houses", () => {
    expect(city.houses.length).toBe(3)

    expect(city.houses[0].builderAt).toBe(2012)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].address.isNumber).toBe(100)
    expect(city.houses[0].address.street.title).toBe("White street")

    expect(city.houses[1].builderAt).toBe(2008)
    expect(city.houses[1].repaired).toBe(false)
    expect(city.houses[1].address.isNumber).toBe(100)
    expect(city.houses[1].address.street.title).toBe("Happy street")

    expect(city.houses[2].builderAt).toBe(2000)
    expect(city.houses[2].repaired).toBe(false)
    expect(city.houses[2].address.isNumber).toBe(101)
    expect(city.houses[2].address.street.title).toBe("Happy street")
})
