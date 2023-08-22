// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2);
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return function(mult) {
        return fare * mult;
    };
}

function fareDoubler(fare) {
    const double = createFareMultiplier;
    return double(fare)(2);
}

function fareTripler(fare) {
    const triple = createFareMultiplier
    return triple(fare)(3);
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}