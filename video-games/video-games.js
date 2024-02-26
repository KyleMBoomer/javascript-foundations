function createPlayer(name, age, moveset) {
  var player = {
    name: name,
    age: age,
    moveset: moveset
  }
  return player
}

function createLevel(name, player, coins, lives) {
    var level = {
        name: name,
        players: player,
        coins: coins || 0,
        lives: lives || 3
    }
    return level
}

function findCoins(level, coins) {
var updatedLevel = {coins : coins}
if (updatedLevel.coins === 100) {
  level.lives = level.lives +1
}
return updatedLevel
}

function defeatPlayer(lives) {
   lives.lives-=1
  if (lives.lives === 0) {
    return `GAME OVER`
  }
return lives
}



module.exports = {createPlayer, createLevel, findCoins, defeatPlayer };