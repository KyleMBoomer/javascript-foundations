function createAirport(string, array, number) {
return {
  name: string,
  availableGates: number, 
  airlines: array
  }
}

function welcomeGuests(airport) {
return `Welcome to ${airport.name}!`
}

function landPlanes(airport, number) {
  var openGates = airport.availableGates - number
  var feedbackMsg = ''
  if (number > airport.availableGates) {
    feedbackMsg = `Oh no! Not enough gates available. Current overflow is ${openGates * -1}.`
    return {
      availableGates: 0,
      message: feedbackMsg
    }
  } else {
    feedbackMsg = `Success! Current availability is ${openGates}.`
 return {
  availableGates: openGates,
  message: feedbackMsg
    } 
  }
}

function checkAirlineLocations(array, string) {
var carriers = [] 
for(var i = 0; i < array.length; i++) {
  if (array[i].airlines.includes(string)) {
    carriers.push(array[i].name) 
  }
}
  return carriers
}






module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes, 
  checkAirlineLocations
};
