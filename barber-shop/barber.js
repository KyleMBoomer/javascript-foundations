function createBarber(name, earnings, haircuts) {
    var barber = {
        name: name,
        earnings: earnings || 0,
        haircuts: haircuts || []
    }
    return barber
}

function giveCompliment(barber) {
return `This ${barber.style} looks great!`
}

function cutHair(barber, haircut) {
barber.haircuts.push(haircut)
barber.earnings += haircut.price 
return barber
}

function listStyles(barber) {
var shortStyles = []
for (var i = 0; i < barber.haircuts.length; i++) {
    if (barber.haircuts[i].hairLength === 'short') {
        shortStyles.push(barber.haircuts[i].style)
    }
console.log('array', shortStyles)
  }   
    return shortStyles
}


module.exports = { createBarber, giveCompliment, cutHair, listStyles };