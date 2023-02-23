// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2)
}
//returns the first two drivers. 0 is starting pint, 2 is how many you want to return.

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2)
}
// the negative two starts from the last on the array. -1 will just give you last in the array.

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier = function (multiplier) {
    return function (fare) {
        return multiplier * fare
    } 
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (drivers, driversGroup) {
    //drivers => array of names
    // driverGroup => a function
    return driversGroup(drivers)
}
