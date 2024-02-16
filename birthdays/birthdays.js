function createBirthday(name, month, day) {
  var birthday = {
    name: name,
    month: month,
    day: day 
  }
    return birthday
}

function celebrateBirthday(birthday) {
    return `Today is ${birthday.month}/${birthday.day}! Happy birthday, ${birthday.name}!`
}

function countBirthdays(birthday, month) {
    var count = []
  for (var i = 0; i < birthday.length; i++) {
    if (birthday[i].month === month)
  count.push(birthday[i].month)
}
return count.length
}

module.exports = { createBirthday, celebrateBirthday, countBirthdays };