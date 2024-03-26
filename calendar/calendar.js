function createEvent(title, month, day) {
    var event = {
        title: title,
        month: month,
        day : day
    }
    if (event.day >= 1 && event.day < 31) {
        return event
    } else {
        return `Error: ${event.day} is not a valid day`
    }
}

function createCalendar(owner, events) {
    console.log('owner', owner)
    console.log('events', events)
    var calendar = {
        owner: owner,
        events: events
    }
 return calendar 
}

function reportMonthlyEvents(array, string) {
    var month = []
for (var i = 0; i < array.events.length; i++) {
    if (array.events[i].month === string) {
        month.push(array.events[i])
    }
  }
  return month 
}
module.exports = {createEvent, createCalendar, reportMonthlyEvents};