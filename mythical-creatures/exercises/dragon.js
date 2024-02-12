function createDragon(name, rider, temperment, timesEaten = 0, hungry = true) {
  
  var dragon = {
    name: name, 
    rider: rider,
    temperment: temperment,
    timesEaten: timesEaten,
    hungry: true 
  }
return dragon
}

function greetRider(dragon) {
  console.log('dragon', dragon)
  return `Hi, ${dragon.rider}!`
}

function eat(dragon) {
  if (dragon.hungry) dragon.timesEaten++

  if (dragon.timesEaten >= 3) dragon.hungry = false 
  return dragon 
}
  
function findFireBreathers(allDragons) {
  fireBreathers = []
  for (var i = 0; i < allDragons.length; i++) {
    if (allDragons[i].temperment === 'aggressive') {
      fireBreathers.push(allDragons[i])
    }
  }
  return fireBreathers 
}
//Looks like the aim of this function is to return the 0 and 2 index positiions
// from the allDragons array because their temperament is 'aggressive'. I can 
//identify this trait with a for loop and return the dragons I'm looking for 
// with a conditional statment whose return involves the push method. 
module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}