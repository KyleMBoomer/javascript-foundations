function createElevator(building, floors, currentFloor, passengers) {
    return {
        building: building,
        floors: floors,
        currentFloor: currentFloor,
        passengers: passengers
    }
}

function changeFloors(elevator, number) {

    if(number === elevator.currentFloor) {
        return `You\'re already on floor ${number}!`
    }
    if (elevator.floors < number) {
       return `Floor ${number} does not exist!`
    }
return `Taking you to floor ${number}!`
}

function dropOffPassenger(elevator, passenger) {
    for (var i = 0; i < elevator.passengers.length; i++) {
        if(elevator.passengers[i] === passenger) {
            elevator.passengers.splice(i, 1)
        }
    }
    return elevator.passengers
}
module.exports = { 
    createElevator,
    changeFloors,
    dropOffPassenger

 };
