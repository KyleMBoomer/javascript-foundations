function createVampire(name, pet, thirsty, ouncesDrank) {
  var vampire = {
    name : name,
    pet: pet || 'bat',
    thirsty: true,
    ouncesDrank: ouncesDrank || 0
  }
  return vampire
}

function encounterDeliciousVictim(vampire) {
  if (vampire.ouncesDrank >= 50 && vampire.thirsty === false) {
    return `No thanks, I am too full.`
  } else {
  return 'I WANT TO SUCK YOUR BLOOD!'
  }
  console.log('vampire', vampire)
}

function drink(vampire) {
if (vampire.ouncesDrank <= 40) {
  vampire.ouncesDrank = vampire.ouncesDrank + 10
}
 if (vampire.ouncesDrank === 50) {
  vampire.thirsty = false
 }
  return vampire
}

function inquirePlace(locations, string) {
  console.log('locations', locations)
  var places = locations
for (var i = 0; i < locations.length; i++) {
  if (places.includes(`${string}`)) {
    return `Yes, I have spent some time in ${string}.`
    } else {
    return `No, I have never been to ${string}.`
  }
  }
}

function findBatLovers(vampire) {
var batLovers = []
for (var i = 0; i < vampire.length; i++) {
  if (vampire[i].pet === 'bat') {
    batLovers.push(vampire[i].name)
  }

}
return batLovers
}

module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}