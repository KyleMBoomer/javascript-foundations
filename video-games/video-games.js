function createPlayer(name, age, moveset) {
  var player = {
    name: name,
    age: age,
    moveset: moveset
  }
  return player
}

function createLevel(name, players, coins, lives) {
    var level = {
        name: name,
        players: players,
        coins: 0 || 5,
        lives: 3
    }
    return level
}

function findCoins(level) {
var updatedLevel = level.coins += 5
console.log('updatedlevel', updatedLevel)
return updatedLevel
}





module.exports = {createPlayer, createLevel, findCoins };